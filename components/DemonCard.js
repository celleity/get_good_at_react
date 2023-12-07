import{ useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container,Dialog  } from '@mui/material';
import DemonImage from './DemonImage';


export default function DemonCard({demonNumber, demonSummary, demonImageURL, demonName}) {

const [isOpen, setIsOpen] = useState(false)
const handleClose = () => {
  setIsOpen(false)
}

  return (
    <Card >
      <CardActionArea onClick={() => setIsOpen(true)}>
        <CardMedia
          component="img"
          height="200"
          image={demonImageURL}
          alt={demonSummary.summary}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {demonNumber.number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <Dialog   
    fullScreen
    open={isOpen}
    onClose={() => handleClose}>
           { console.log("is it close?", handleClose)}
      <img src={demonImageURL}  alt={demonSummary.summary} >
   
        </img>
      </Dialog>
    </Card>
  );
}