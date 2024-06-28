import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { CardActionArea, CardContent, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import react,{ useState, useEffect, useMemo } from "react";
import Link from 'next/link';
import Typography from '@mui/material/Typography';



function srcset(image, width, height, rows = 1, cols = 3) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


  export default function CustomImageList() {
    return (
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
      <ImageList
        sx={{
         // width: 250,
         // height: 250,
          // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
          transform: 'translateZ(0)',
          overflow: 'hidden'
        }}
        cols={3}
       // rowHeight={250}
        gap={6}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
  
          return (
           
            <ImageListItem key={item.img} cols={cols} rows={rows} sx={{ 
                "&:hover": {
                cursor: "pointer",
                opacity: 1,
                    ".title": {
               
                    position:'absolute',
                    display:'block',
                    marginTop: '25%',
                    marginLeft: '40%',
                    
                  },
                }
             
             
              }} >
         
               <a href={item.link} > 
         
              <img
                {...srcset(item.img, 200, 250, rows, cols)}
                alt={item.title}
                loading="lazy"
                className='MuiImageListItem-img'
               
              /> </a>
                  <Typography
                  className='title'
                  variant='h2'
                  align='center'
                sx={{
                    display: 'none',
                    opacity:1
               
                   
                  
                }}
         
               
              >{item.title}
                </Typography>

         
            </ImageListItem> 
          );
        })}
      </ImageList>
        
      </div>
    );
  }

  const itemData = [
    {
        img: 'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/acne.jpg',
        title: 'about',
        link: '/about'
  
      },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/acne.jpg',
      title: 'Demons',
      link: '/art#demons'

    },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/aging.jpg',
      title: 'Sketches',
      link: '/art#sketches'
    
    },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/v1713398909/Sketches/basinhead.jpg',
      title: 'Paintings',
      link: '/art#paintings'
    
    },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/v1713398886/Sketches/cafe_loka.jpg',
      title: 'Photos',
      link: '/art#photos'
   
    },
    {
        img: 'https://res.cloudinary.com/inkdemons/image/upload/v1713398897/Sketches/20231215_113949_zn9di7.jpg',
        title: 'Sewing',
        link: '/sewing'
     
      },

      {
        img: ' https://res.cloudinary.com/inkdemons/image/upload/v1719083574/Photos/scotland1.jpg',
        title: 'Experiments',
        link: '/experiment'
     
      },
      {
        img: ' https://res.cloudinary.com/inkdemons/image/upload/v1719083574/Photos/scotland1.jpg',
        title: 'Lists',
        link: '/inspo'
     
      },
     
  ];