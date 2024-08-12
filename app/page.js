import Image from "next/image";
import {Box,AppBar, Toolbar, Typography, Container, Button} from "@mui/material"

export default function Home() {
  return (
   <Box
   width="100wv"
   height="100hv"  >The requirements: Sign-in, sign-up, get started, learn more, features desription, pricing options
   <AppBar 
   position="static"
   >
    <Toolbar>
    <Typography
      variant='h3' fontFamily={'Segoe UI'} component="div" sx={{flexGrow:1}}
    >
      Flashcard SaaS
    </Typography>
    <Button
    color="inherit" href='\sign-in'> Sign In</Button>
    <Button
    color="inherit" href='\sign-up'> Sign Up</Button>
    </Toolbar>
   </AppBar>

   <Container
   maxWidth='md' sx={{mt:8}}
   >
    <Box
    textAlign="center" mb={4}>
      <Typography
      varuant="h3" gutterBottom></Typography>
    </Box>
   </Container>

   </Box>
  );
}
