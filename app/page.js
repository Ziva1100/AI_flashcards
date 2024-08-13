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
          <Button color='inherit'>
            Log In
          </Button>
          <Button color='inherit'>
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
     
      >Features</Typography>
      </Box>
      <Stack direction='row' spacing={6} sx={{my:6}}>
      
        <Grid item xs = {12} md = {4}>
          <Box
          sx={{p:3,
            border:'1px solid',
            borderColor:'grey.300',
            borderRadius:2,   boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography variant='h6' >Easy Text Input</Typography>
          <Typography>Simply input your text and let our software do the rest.
            Creating flashcards has never been easier. </Typography>
            </Box>
       
      </Grid>
       
        <Grid item xs = {12} md = {4}>
        <Box
          sx={{p:3,
            border:'1px solid',
            borderColor:'grey.300',
            borderRadius:2,
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography variant='h6' >Automated Content Generator</Typography>
          <Typography>AI algorithms can analyze text and 
            automatically generate flashcards based on key concepts, definitions, and important details. </Typography>
            </Box>
        
      </Grid>
        <Grid item xs = {12} md = {4}>
        <Box
          sx={{p:3,
            border:'1px solid',
            borderColor:'grey.300',
            borderRadius:2,
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography variant='h6' >Customizable</Typography>
          <Typography>Users can input specific topics or subjects, 
            and the AI can generate flashcards tailored to those inputs. </Typography>
            </Box>
      
      </Grid>
      </Stack>
    
    <Box> <Typography
      variant='h4' display='flex' justifyContent='center' >
        Pricing
      </Typography></Box>
    <Stack
    direction='row'
    spacing={6}
    sx={{my:6, textAlign:'cetner'}}
    >
     
      {/* <Grid container spacing={2} > */}
        <Grid item xs = {12} md = {4}  >
        <Box
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              padding: 2,
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Typography variant='h6' >Easy Text Input</Typography>
          <Typography>Simply input your text and let our software do the rest.
            Creating flashcards has never been easier. </Typography>
            </Box>
        </Grid>
      {/* </Grid> */}
      {/* <Grid container spacing={6} > */}
        <Grid item xs = {12} md = {4}>
        <Box
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              padding: 2,
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Typography variant='h6' >Automated Content Generator</Typography>
          <Typography>AI algorithms can analyze text and 
            automatically generate flashcards based on key concepts, definitions, and important details. </Typography>
            </Box>
        </Grid>
        {/* </Grid> */}
      
        {/* <Grid container spacing={6} > */}
        <Grid item xs = {12} md = {4}>
        <Box
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              padding: 2,
              boxShadow: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          <Typography variant='h6' >Customizable</Typography>
          <Typography>Users can input specific topics or subjects, 
            and the AI can generate flashcards tailored to those inputs. </Typography>
            </Box>
        </Grid>
        {/* </Grid> */}
      
    </Stack>
    
   </Container>
  );
}
