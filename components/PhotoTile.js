import react,{ useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';



function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const PhotoTile = () => {

    


return (
// change sizes here
  <ImageList  cols={6} rowHeight={700}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}> 
      <img
        src={`${item.img}?w=300&h=300&auto=format`}
        srcSet={`${item.img}?w=300&h=300&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
    );
  }
  
const itemData = [
 
    {
      img: 'barMontreal.jpg',
      title: 'Montreal',
     
    },
    {
      img: 'fire.jpg',
      title: 'Fire',
    },
    {
      img: 'graystone.jpg',
      title: 'Graystone',

    },

    {
      img: 'museperson.jpg',
      title: 'Sitting at the muse',

    },
    {
      img: 'susies.jpg',
      title: 'Susies',
    },
    {
      img: 'winterOdell.jpg',
      title: 'Odell',
    },

  ];

  export default PhotoTile;