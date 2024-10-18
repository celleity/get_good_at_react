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
                src={item.img}
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
        img: 'https://res.cloudinary.com/inkdemons/image/upload/v1713398894/images/20231103_104707_ehmaot.jpg',
        title: 'about',
        link: '/about'
  
      },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/v1706288233/images/love.jpg',
      title: 'Demons',
      link: '/art#demons'

    },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/v1713398897/images/20231215_113736_vaftdf.jpg',
      title: 'Sketches',
      link: '/art#sketches'
    
    },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/v1713398905/images/candiedoranges.jpg',
      title: 'Paintings',
      link: '/art#paintings'
    
    },
    {
      img: 'https://res.cloudinary.com/inkdemons/image/upload/v1719083573/images/DSC_0284_2_-min_ie1w13.jpg',
      title: 'Photos',
      link: '/art#photos'
   
    },
    {
        img: 'https://res.cloudinary.com/inkdemons/image/upload/v1719083570/images/bike.jpg',
        title: 'Sewing',
        link: '/sewing'
     
      },

      {
        img: 'https://res.cloudinary.com/inkdemons/image/upload/v1719083574/images/scotland1.jpg',
        title: 'Experiments',
        link: '/experiment'
     
      },
      {
        img: 'https://res.cloudinary.com/inkdemons/image/upload/v1706288225/images/coverletters.jpg',
        title: 'Lists',
        link: '/inspo'
     
      },
     
  ];