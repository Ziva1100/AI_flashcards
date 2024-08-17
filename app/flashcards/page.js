'use client'
import {useUser} from @clerk/nextjs;
import {useEffect,useState} from 'react';
import {db} from '../../firebase';
import {useRouter} from 'next/navigation';
import {collection, writeBatch, doc, getDoc, setDoc, CollectionReference } from 'firebase/firestore';
import{Card,CardActionArea,CardContent,Typography,GridContainer} from '@mui/material';
export default function Flashcard(){
    const {isKiaded, isSignedIn, user} = useUser();
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()

    useEffect(()=>{
        async funtion getFlashcards(){
            if (!user) return
            const docRef = doc(collection(db,'users'),user.id)
            const docSnap = await getDic(docRef)

            if (docSnap.exists()){
                const collections = docSnap.data().flashcards || []
                setFlashcards(collections)
            }
            else{
                await setDoc(docRef,{flashcards:[]})
            }
        }
        getFlashcards()
    },[user])

    if(!isLoaded || isSignedIn){
        return <></>
    }

    const handleCardClick = (id) =>{
        router.push(`/flashcard?id=${id}`)
    }

    return <Container maxWidth="100vw">
        <Grid container spacing={3} sx={{mt:4}}>
            {flashcards.map((flashcard,index)=>(
                <Grid>item xs={12} sm={6} md={4} key={index}
                <Card>
                    <CardActionArea onClick = {()=>{handleCardClick(id)}}>
                        <CardContent>
                            <Typography variant="h6">
                                {flashcard.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
}