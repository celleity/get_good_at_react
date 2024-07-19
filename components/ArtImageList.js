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
 const [isOpen, setIsOpen] = useState(false)
 const [bigImage, setBigImage] = useState({})
let dialogImageURL = '';
const url = 'https://res.cloudinary.com/inkdemons/image/upload/w_600,q_35/v1719083574/images/'
   /* if (imageArray.length === 0) {
        let defaultImages = useImages();
        imageArray = defaultImages; 
        console.log('arrary is empty', imageArray)
    } */


    const handleClick = (dialogImage, dialogTitle, dialogDescription) => {
    
      dialogImageURL = url + dialogImage;
      
      setBigImage({image: dialogImageURL, title: dialogTitle, description: dialogDescription})
      console.log(bigImage, isOpen)
      setIsOpen(true)
       

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
            onClick={() => handleClick(item.image, item.title, item.description)} 
          
          /> 
          <Dialog   

              maxWidth='lg'
              fullWidth='true'
              fullScreen={false}
              open={isOpen}
              onClose={() => setIsOpen(false)
              }
              sx={{overflowY: 'none',overflowX: 'none'}}


              >  

              <CloseIcon   onClick={() => setIsOpen(false)} sx={{ cursor: "pointer", paddingTop: "20px", paddingRight: "24px", alignSelf: "flex-end"}}/>  
              <div className="dialogImg" style={{ display: {lg: 'flex'}, flexDirection: 'row', overflowY: 'clip' }} >



                
                <DialogContent   sx={{
              display: 'flex',
              flexDirection: 'column',
              height:'80%'


              }}>  <DialogTitle  ><Typography  className='h3'
              variant='h3'
              align='center'
              sx={{paddingTop: '0px', paddingBottom: '2rem'}}> {bigImage.title}</Typography></DialogTitle>
                  <img
                        src={bigImage.image}
                        style={{width: '650px',alignSelf: 'center'}}
                        loading="lazy"
                        className='MuiImageListItem-img'
                        onClick={() => setIsOpen(true)}
                      
                      /> 
              
              <Typography
              className='h4'
              variant='h5'
              align='center'
            
     
           
          >{bigImage.description}
            </Typography>
                </DialogContent>
               
   
 
            </div>
      </Dialog>


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