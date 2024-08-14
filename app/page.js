import Image from "next/image";
import {Box,AppBar, Toolbar, Typography, Container, Button, Stack, Grid} from "@mui/material"
import {getStripe} from "@/utils/get-stripe"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Head from 'next/head'


export default function Home() {
  return (
   <Container
    maxWidth="100vw"

   >
    {/* Create a head menu bar with sign in and sign out options */}
    <Head>
      <title>Flashcards SaaS</title>
      <meta name='description' content='Create flashcards from your text'/>
    </Head>

    <AppBar
    position="static"
    >
      <Toolbar
      >
        <Typography
        fontFamily="Segoe UI"
        variant='h6'
        sx={{flexGrow:1}}
        >Falshcard SaaS</Typography>
        <SignedOut> 
          {/* when singed out see these buttons */}
          <Button color='inherit' href="sign-in">
            Log In
          </Button>
          <Button color='inherit' href="sign-up">
            Sign up
          </Button>
        </SignedOut>
        <SignedIn>
          {/* when singed in see these buttons */}
          <Button color="inherit">
            Log Out
          </Button>
        </SignedIn>
      </Toolbar>
    </AppBar>
    <Stack
    display='flex'
    alignItems='center'
    justifyContent='center'  
    sx={{my:4}}  >
      <Typography
      variant="h2"
      fontFamily='Segoe UI'
      >
        Welcome to Flashcards SaaS
      </Typography>
      <Typography
      variant='h5'
      fontFamily={'Segoe UI'}
      >
        The easiest way to make flashcards from your text
      </Typography>
      <Button
      variant = 'contained' color = 'primary' sx={{mt: 2}}>
        get started 
      </Button>
    </Stack>
    <Box
    sx={{my:6}}
    display='center'
    justifyContent='center' 
      >
      <Typography
      variant='h4'
     
      fontFamily={'Segoe UI'}
      >Features</Typography>
      </Box>
      <Box sx={{my:6}}>
      {/* create a container inside whiich there will be elements horizontal in big screen and vertical in small screen */}
        <Grid container spacing={4}> 
        <Grid item xs = {12} md = {4}>
          <Box
          sx={{p:3,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Typography variant='h6' gutterBottom>Easy Text Input</Typography>
          <Typography>Simply input your text and let our software do the rest.
            Creating flashcards has never been easier. </Typography>
            </Box>
       
      </Grid>
        <Grid item xs = {12} md = {4}>
        <Box
          sx={{p:3,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Typography variant='h6' gutterBottom>Automated Content Generator</Typography>
          <Typography>AI algorithms can analyze text and 
            automatically generate flashcards based on key concepts, definitions, and important details. </Typography>
            </Box>
        
      </Grid>
        <Grid item xs = {12} md = {4}>
        <Box
         sx={{p:3,
          display: 'flex',
          flexDirection: 'column'
          }}>
          <Typography variant='h6' gutterBottom>Customizable</Typography>
          <Typography>Users can input specific topics or subjects, 
            and the AI can generate flashcards tailored to those inputs. </Typography>
            </Box>
      
      </Grid>
      </Grid>
      </Box>
    
    <Box> <Typography
      variant='h4' display='flex' justifyContent='center' 
      fontFamily={'Segoe UI'}>
        Pricing
      </Typography></Box>
    <Box
    sx={{my:6, textAlign:'cetner'}}
    >
     
     <Grid container spacing={4}>
        <Grid item xs = {12} md = {6}  >
        <Box
            sx={{p:3,
              border:'1px solid',
              borderColor:'grey.300',
              borderRadius:2,
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
          <Typography variant='h5' >Basic</Typography>
          <Typography variant='h6' gutterBottom >$5 Per Month</Typography>
          <Typography> Create up to 500 flashcards a month with basic AI generation. </Typography>
          <Button variant="contained" sx={{mt:3}} >Choose Basic</Button>
            </Box>
        </Grid>
        <Grid item xs = {12} md = {6}>
        <Box
          sx={{p:3,
            border:'1px solid',
            borderColor:'grey.300',
            borderRadius:2,
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
            }}
          >
          <Typography variant='h5' >Pro</Typography>
          <Typography variant='h6' gutterBottom>$10 Per Month</Typography>
          <Typography> Unlimited flashcard creation, customizable flashcard
            creation options, sync accross multiple devices.
          </Typography>
          <Button variant="contained" sx={{mt:3}} >Choose Pro</Button>
            </Box>
        </Grid>
        
        </Grid>
      
      </Box>
    
   </Container>
  );
}
