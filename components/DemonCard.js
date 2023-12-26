import{ useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import DemonImage from './DemonImage';
import CardHeader from '@mui/material/CardHeader';
import styles from '../styles/Home.module.css';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function DemonCard({demonNumber, demonSummary, demonImageURL, demonName}) {



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

const actualDemonName = (demonName === undefined) ? demonNumber.number :  demonNumber.number + " "+  demonName;

  return (
    <Card >
      
      <CardActionArea onClick={() => setIsOpen(true)}  onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}>
        {
        isShown && ( <div className={styles.demonNumber}>
          {actualDemonName}
          

        </div>) }
       

        <CardMedia
          component="img"
          height="200"
          image={demonImageURL}
          alt={demonSummary.summary}
          sx={isShown ? { opacity: "50%" } : {opacity: "100%"}}
        />
      </CardActionArea>
      <Dialog   
     
        maxWidth="md"
        open={isOpen}
        onClose={() => handleClose}
        
        >
        <div style={{ display: 'flex', flexDirection: 'row', }} >
          
             <img src={demonImageURL}  alt={demonSummary.summary} style={{ width: '500px', border: "double white" }} />
            <DialogContent   sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px'
      }}>
       <DialogTitle  sx={{
       paddingLeft: '0px'
      }}> 
        {demonName}
       </DialogTitle>
         <DialogContentText>
  
         {demonSummary.summary}
          </DialogContentText>        
         
          </DialogContent>
          <IconButton
             
             color="inherit"
             onClick={handleClose}
             aria-label="close"
             sx={{alignItems: 'flex-end',
             flexDirection: 'row',
             flexWrap: 'wrap',
             alignContent: 'flex-start'}}>
             <CloseIcon/>
           </IconButton>
           </div>
      </Dialog>
    </Card>
  );
}