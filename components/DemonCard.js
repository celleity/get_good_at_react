import{ useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container,Dialog  } from '@mui/material';
import DemonImage from './DemonImage';
import CardHeader from '@mui/material/CardHeader';
import styles from '../styles/Home.module.css';


export default function DemonCard({demonNumber, demonSummary, demonImageURL, demonName}) {

const [isOpen, setIsOpen] = useState(false)
const handleClose = () => {
  setIsOpen(false)
}

  return (
    <Card  variant="outlined">
      <CardActionArea onClick={() => setIsOpen(true)}>
        <CardHeader  className={styles.cardHeader}       title={demonNumber.number}  />
       { /*<div className={styles.demonNumber}>
          {demonNumber.number}
  </div>*/ }
        <CardMedia
          component="img"
          height="200"
          image={demonImageURL}
          alt={demonSummary.summary}
        />
      </CardActionArea>
      <Dialog   
    fullScreen
    open={isOpen}
    onClose={() => handleClose}>
      <img src={demonImageURL}  alt={demonSummary.summary} >
   
        </img>
      </Dialog>
    </Card>
  );
}