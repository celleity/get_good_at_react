import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useImages } from '../components/useImages';
import Typography from '@mui/material/Typography';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import{ useState, useEffect } from 'react';
import { CardActionArea, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import styles from '../styles/Home.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ArtDialog from './ArtDialog';


const ArtImageList = ({imageArray}) => {
// add sorting here? 
// const [isOpen, setIsOpen] = useState(false)
let dialogImage = '';
const url = 'https://res.cloudinary.com/inkdemons/image/upload/w_450,q_35/v1719083574/images/'
   /* if (imageArray.length === 0) {
        let defaultImages = useImages();
        imageArray = defaultImages; 
        console.log('arrary is empty', imageArray)
    } */


    const handleClick = (image) => {
        dialogImage = image;
      // setIsOpen(!isOpen)

    }

return (

    <ImageList
    sx={{
     // width: 250,
     // height: 250,
      // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
      transform: 'translateZ(0)',
      overflow: 'hidden'
    }}
    cols={4}
   // rowHeight={250}
    gap={6}
  > 
 
    {imageArray.map((item) => {
    
      return (
       
        <ImageListItem key={item.img} cols={1} rows={1} sx={{ 
            "&:hover": {
            cursor: "pointer",
            opacity: 1,
                ".title": {
           
                position:'absolute',
                display:'block',
                marginTop: '25%',
                marginLeft: '30%',
                
              },
            }
         
         
          }} >
     
          
     
          <img
            src={url + item.image}
            alt={item.title}
            loading="lazy"
            className='MuiImageListItem-img'
            onClick={() => handleClick(item.image)} 
           
          /> 
          <ArtDialog isOpened={false} image={dialogImage}  /> 
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



)

} 
export default ArtImageList;