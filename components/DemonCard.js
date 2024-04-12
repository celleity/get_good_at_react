import{ useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import styles from '../styles/Home.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { buildUrl } from 'cloudinary-build-url';
import  DemonCarousel from './DemonCarousel';

export default function DemonCard({demonNumber, demonSummary, demonImageURL, demonName, sortBy, setSortBy, index}) {
  const urlThumb = buildUrl('Ink_Demons/'+ demonImageURL, {
    cloud: {
      cloudName: 'inkdemons',
    },
    transformations: {
      resize: {
        type: "thumb",
        width: 250,
        height: 250,
      },
    }
});


const urlBigger =  buildUrl('Ink_Demons/'+ demonImageURL, {
  cloud: {
    cloudName: 'inkdemons',
  },
  transformations: {
    resize: {
      type: "scale",
      //width: 600,
      height: 400,
    },
  }
});
   
const [isOpen, setIsOpen] = useState(false)
const [isShown, setIsShown] = useState(false);



const handleClose = () => {

  setIsOpen(false)
}

const handleEnter = () => {
 
  setIsShown(true)

 
}
const handleLeave = () => {
 
  setIsShown(false)


}




const actualDemonName = (demonName === undefined) ? demonNumber.number + "." :  demonNumber.number + ". "+  demonName;
let tryThis = "/Ink_Demons/" + demonImageURL
let CDNUrl = 'https://res.cloudinary.com/inkdemons/image/upload/c_thumb,g_auto,h_250,w_250/v1706288233/Ink_Demons/' + demonImageURL


  return (
    <Card square={true}>
      
      <CardActionArea onClick={() => setIsOpen(true)}  onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}>
        {
        isShown && ( <div className={styles.demonNumber}>
          {actualDemonName}
          

        </div>) }
       

        <CardMedia
          component="img"
          height="200"
         
          image={urlThumb}
          alt={demonSummary.summary}
          sx={isShown ? { opacity: "50%" } : {opacity: "100%"}}
        />
      </CardActionArea>
      <Dialog   

        maxWidth='lg'
        fullWidth='true'
        fullScreen={false}
        open={isOpen}
        onClose={() => handleClose}
        sx={{height: {lg: '80%'}}}
       
     
        >  
        
        <CloseIcon   onClick={handleClose} sx={{ cursor: "pointer", paddingTop: "20px", paddingRight: "24px", alignSelf: "flex-end"}}/>  
        <div className="dialogImg" style={{ display: {lg: 'flex'}, flexDirection: 'row', overflowY: 'clip' }} >
     
   
  
          
           <DialogContent   sx={{
        display: 'flex',
        flexDirection: 'column',
        height:'80%'
        
       
      }}>

       <DemonCarousel index={index} sortBy={sortBy} setSortBy={setSortBy} /> 
            
         
          </DialogContent>
       
           
         
           </div>
      </Dialog>
    </Card>
  );
}