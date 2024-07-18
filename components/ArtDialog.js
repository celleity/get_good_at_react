import Typography from '@mui/material/Typography';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import{ useState, useEffect } from 'react';
import { CardActionArea, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import styles from '../styles/Home.module.css';
import CloseIcon from '@mui/icons-material/Close';


const ArtDialog = ({isOpened, image}) => {
    const test = isOpened
    const [isOpen, setIsOpen] = useState(test)
    const url = 'https://res.cloudinary.com/inkdemons/image/upload/w_450,q_35/v1719083574/images/'
console.log('its getting here', isOpened)


    const handleClose = () => {

        setIsOpen(false)

    }


    return (

        <Dialog   

        maxWidth='lg'
        fullWidth='true'
        fullScreen={true}
        open={isOpen}
        onClose={() => setIsOpen(false)
        }
        sx={{height: {lg: '80%'}}}
       
      
        >  
        
        <CloseIcon   onClick={() => setIsOpen(false)} sx={{ cursor: "pointer", paddingTop: "20px", paddingRight: "24px", alignSelf: "flex-end"}}/>  
        <div className="dialogImg" style={{ display: {lg: 'flex'}, flexDirection: 'row', overflowY: 'clip' }} >
      
      
      
          
           <DialogContent   sx={{
        display: 'flex',
        flexDirection: 'column',
        height:'80%'
        
       
      }}>
             <img
                  src={url + image}
                 
                  loading="lazy"
                  className='MuiImageListItem-img'
                  onClick={() => setIsOpen(true)}
                 
                /> 
         
          </DialogContent>
       
           
         
           </div>
      </Dialog>



    )
}

export default ArtDialog;