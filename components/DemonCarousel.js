
import {useDemonImages} from './useDemonImages';
import Typography from '@mui/material/Typography';
import react,{ useState, useEffect, useMemo } from "react";
import { buildUrl } from 'cloudinary-build-url';
import { Image } from 'mui-image'
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

const  DemonCarousel  = ({ index }) => { 


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

const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === demonArray.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? demonArray.length - 1 : prevIndex - 1
    );
  };

  console.log(index, demonArray[index-1])
return (
    <div className={styles.carousel} >
      <Typography variant="h3" className={styles.demonTitle} sx={{padding: "10px", textAlign: "center"}}> 
      {demonArray[activeIndex-1]?.name === undefined ? "unknown for know" : demonArray[activeIndex-1].name }
      </Typography>
      <Button onClick={prevSlide} className={styles.carousel__btnPrev}>
        &lt;
      </Button>
      <Image
        src={demonArray[activeIndex-1]?.image === undefined ? "test" :  demonArray[activeIndex-1].image }
        alt={`Slide ${activeIndex}`}
        className={styles.carousel__img }
        sx={{ maxHeight: "100%",  objectFit: "contain !important",  display: { sm: 'none', lg: 'flex' }, width: {sm: '75vw', lg: '50vw'}}}
        

      />
          <Typography className={styles.demonText} align="center" variant="body1" sx={{width: { lg: '35vw}'}}}   >
  
          {demonArray[activeIndex-1]?.summary === undefined ? "" :  demonArray[activeIndex-1].summary }
   </Typography > 
      <Button onClick={nextSlide} className={styles.carousel__btnNext}>
        &gt;
      </Button>
    </div>
  );
};

export default DemonCarousel;