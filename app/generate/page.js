'use client'
import {useUser} from '@clerk/nextjs'
import {useState} from 'react'
import{useRouter} from 'next/navigation'
import {db} from '@/firebase'
import {collection} from 'firebase/firestore'


export default function Generate(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const [flipped,setFlipped] = useState([])
    const [text, setText] =useState('')
    const [name, setName] = useState('')
    const [open, setOpen] = useState(false)
    const router = useRouter

    const handleSubmit = async () => {
        fetch('api/generate', {
            method: 'POST',
            body: text,}
        )
        .then((res)=>res.json())
        .then(data > setFlashcards(data))
    }

    const handleCardClick = (id) =>{
        setFlipped((prev) => ({
            ...prev, 
            [id]: !prev[id],
        })
    )}

    const handeOpen = () => {
        setOpen(true)

    }
    const handeClose = () => {
        setOpen(false)
        
    }

    const saveFlashcards = async () => {
        if (!name) {
            alert('Please enter a name') 
            return 
        }

        const batch = writeBatch(db)
        const userDocRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(userDocRef)

        
    }
}