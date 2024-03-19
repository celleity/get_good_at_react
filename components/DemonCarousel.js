
import {useDemonImages} from './useDemonImages';
import Typography from '@mui/material/Typography';
import react,{ useState, useEffect, useMemo } from "react";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import { buildUrl } from 'cloudinary-build-url';
import { Image } from 'mui-image'
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const  DemonCarousel  = ({ index }) => { 

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [isLoading, setIsLoading] = useState(true);

// index as prop, sent in by dialog
const demonImages = useDemonImages();

const demonArray = []; 
let imageURL = 'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/';

 demonImages.map((o) => (
 
  demonArray.push({name: o.demonName, image: imageURL + o.image, summary: o.demonDescription, number: o.demonNumber  } )
 )
 
 );
 
 

 //const actualDemonName = (demonName === undefined) ? demonNumber.number + "." :  demonNumber.number + ". "+  demonName;
const [activeIndex, setActiveIndex] = useState(index);
let test = "";
const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === demonArray.length - 1 ? 1 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    
    setActiveIndex((prevIndex) =>
      prevIndex === 1 ? demonArray.length - 1 : prevIndex - 1
    );
  };

return (
    <div className={styles.carousel} >
         <ThemeProvider theme={theme}>
      <Typography variant="h3" className={styles.demonTitle} sx={{padding: "10px", textAlign: "center", fontSize: {sm:'8vw', lg: '4vw'} }}> 
      {demonArray[activeIndex-1]?.name === undefined ? "This demon is still unknown" : demonArray[activeIndex-1].name }
      </Typography>
      </ThemeProvider>
      <Button onClick={prevSlide} className={styles.carousel__btnPrev} sx={{position: "absolute"}}>
        &lt;
      </Button>
      <div className={styles.demonContent}> 
      <Image
        src={demonArray[activeIndex-1]?.image === undefined ? "black.jpg" :  demonArray[activeIndex-1].image }
        alt={`Slide ${activeIndex}`}
        className={styles.carousel__img }
        width={{sm: 250, lg: 600}}
        sx={{ maxHeight: "80%",  objectFit: "contain !important",  display: { sm: 'none', lg: 'flex' }, width: {sm: '75vw', lg: '600px'}}}
        

      />
        <ThemeProvider theme={theme}>
          <Typography className={styles.demonText} align="center" variant="body1" sx={{width: { lg: '35vw}'}, fontSize: {sm: '1rem' }}}   >
  
          {demonArray[activeIndex-1]?.summary === undefined ? "" :  demonArray[activeIndex-1].summary }
   </Typography > 
   </ThemeProvider>
   </div>
      <Button onClick={nextSlide} className={styles.carousel__btnNext} sx={{position: "absolute"}}>
        &gt;
      </Button>
    </div>
  );
};

export default DemonCarousel;