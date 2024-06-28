import react,{ useState, useEffect, useMemo } from "react";
import Link from 'next/link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import styles from '../styles/ProjectGrid.module.css';

import  Image   from 'mui-image';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardContent, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import { useTheme } from "@emotion/react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';



const ProjectGrid = ( ) => {
    const [domLoaded, setDomLoaded] = useState(false);
    const [verb, setVerb] = useState('creating');
    const [variantText, setvariantText] = useState('h3')
    const options = {
        art: 'making art',
        sketch: 'sketching',
        sew: 'sewing clothes',
        who: 'someone',
        experiment: 'experimenting',
        inspired: 'inspired'
    };


    useEffect(() => {
        setDomLoaded(true);
     
     }, ( []))

  

     


     const handleEnter = (event) => {
      // set is active for id + verb
        let id = event.target.id + 'Verb';
       // console.log(event.target, event)
        setvariantText('on')
     
        setVerb(options[id])
      const div = document.getElementById(id); // add wild card to get all grids

   //   if(div !== null){
        console.log(div, event.target)
     //  div.className = styles.on
     // }
   
    }

    const handleLeave = (event) => {
      // set is active for id + verb
        let id = event.target.id + 'Verb';
        setvariantText('off')
console.log("leave", id, event.target, )
        setVerb(options[id])
      const div = document.getElementById(id); // add wild card to get all grids
  
   //   if(div !== null)
     // div.className = styles.off
    
   
    }


    return (

    
// probably map this out? 
<div> 
  <Container className="verbHeaders" maxWidth='false' sx={{display: 'flex', flexWrap: 'wrap',  wordBreak: 'break-all', justifyContent: 'center', }}> 
  <Link href='/about' className="aboutVerb" id="aboutLink" style={{ textDecoration: 'none', color:'turquoise', '&:hover': {color: 'red'}, }} > <Typography id='aboutVerb' className="aboutVerb" variant='h3'sx={{ fontFamily: "Helvetica",paddingRight: '1rem',  wordBreak: 'break-all',  textDecoration: 'none', color: '#2AB9C0', '&:hover': {color: 'red'} }} >  is a person  </Typography></Link>
  <Typography variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
  <Typography id='artVerb' className="artVerb" variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', color: '#CA2DDF', '&:hover': {color: 'red'} }} > is making art </Typography> 
  <Typography  variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
  <Typography id='sewVerb'  className="sewVerb" variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem',  wordBreak: 'break-all', color: '#F1681E', '&:hover': {color: 'red'}}}>  is sewing  </Typography>


  <Typography  variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
  <Typography id='experimentVerb' className="experimentVerb" variant='h3' sx={{ fontFamily: "Helvetica",paddingRight: '1rem', color: '#EE169C', '&:hover': {color: 'red'}}}>  is experimenting  </Typography>
  <Typography  variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
  <Typography id='inpsiredVerb' className="inspiredVerb"  variant='h3' sx={{ fontFamily: "Helvetica",paddingRight: '1rem', color: '#EECA16', '&:hover': {color: 'red'}}}>  is inspired  </Typography>

  
  </Container>

     { 
     domLoaded && (<div> 
    { 
    <Container maxWidth='false'  sx={{ display: 'flex', justifyContent: 'center', paddingTop: '3rem', maxWidth: '95vw'}}> 
    <Card square={true}    sx={{ height: 600 , width: 800, }}>
    <Link href='/demons'  >
    <CardActionArea >
    <CardContent sx={{position: 'absolute'}}> 
      <Typography  variant="h5" component="div" color="text.secondary" >
      One! Hundred! Demons!
    </Typography>
      
        <Typography variant="body2" color="text.secondary">
          One hundred everyday demons rendered in ink
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
       
        sx={{ height: 600 , width: 800, }}
        image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/acne.jpg'}
       
      />  
      
    </CardActionArea>
    </Link>
    
  </Card>     <Card square={true}>
  <Link href='/sketches'  >
      <CardActionArea >
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
        Sketches
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Watercolour and ink sketches
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
         
          sx={{ height: 450, width: 400 }}
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/aging.jpg'}
         
        />
      </CardActionArea>
    </Link>
    </Card>
    <Card square={true}>
      
      <CardActionArea  id='sew' className="sewVerb" onMouseEnter={(event) => handleEnter(event)}  onMouseLeave={(event) => handleLeave(event)}  >
       
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
       Paintings
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Various Mediums
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
         
          sx={{ height: 450, width: 400 }}
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/love.jpg'}
         
        />
      </CardActionArea>
    
    </Card><Card square={true}>
      
      <CardActionArea >
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
        Photography
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Digital and 
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ height: 450, width: 400 }}
         
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/fat.jpg'}
         
        />
      </CardActionArea>
    
    </Card>

    <Card square={true}>
      
      <CardActionArea >
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
        Photography
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Digital and 
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ height: 450, width: 400 }}
         
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/fat.jpg'}
         
        />
      </CardActionArea>
    
    </Card>
  </Container>
    
    
    /*
<Grid  className='grids art' container spacing={2} sx={{paddingTop: '15vh'}} columns={16}> 
  <Grid id='about'className="aboutVerb"   s={4}>
  <Card square={true}>
      <Link href='/demons'  >
      <CardActionArea >
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" color="text.secondary" >
        One! Hundred! Demons!
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            One hundred everyday demons rendered in ink
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
         
          sx={{ height: 450, width: 400 }}
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/acne.jpg'}
         
        />  
        
      </CardActionArea>
      </Link>
    </Card>
 
   
     
  </Grid>
  
 
  <Grid  id='art' xs={4} className="artVerb" >
  <Card square={true}>
  <Link href='/sketches'  >
      <CardActionArea >
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
        Sketches
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Watercolour and ink sketches
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
         
          sx={{ height: 450, width: 400 }}
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/aging.jpg'}
         
        />
      </CardActionArea>
    </Link>
    </Card>
     
  </Grid>

  
  <Grid  className='grids sew'   xs={4} > 
 
 
  <Card square={true}>
      
      <CardActionArea  id='sew' className="sewVerb" onMouseEnter={(event) => handleEnter(event)}  onMouseLeave={(event) => handleLeave(event)}  >
       
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
       Paintings
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Various Mediums
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
         
          sx={{ height: 450, width: 400 }}
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/love.jpg'}
         
        />
      </CardActionArea>
    
    </Card>
    
  </Grid>
  <Grid className='experiementVerb' id="experiment" onMouseEnter={(event) => handleEnter(event)}  onMouseLeave={(event) => handleLeave(event)} xs={4} >
  <Card square={true}>
      
      <CardActionArea >
      <CardContent sx={{position: 'absolute'}}> 
        <Typography  variant="h5" component="div" >
        Photography
      </Typography>
        
          <Typography variant="body2" color="text.secondary">
            Digital and 
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          sx={{ height: 450, width: 400 }}
         
          image={'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/fat.jpg'}
         
        />
      </CardActionArea>
    
    </Card>
      
  </Grid>

    </Grid> */ }
</div>
 )
 }    </div>
    )
} 

export default ProjectGrid;