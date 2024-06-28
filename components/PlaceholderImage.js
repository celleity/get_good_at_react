import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css';
import { Skeleton } from '@mui/material';
import { Image } from 'mui-image'

const PlaceholderImage = ({ placeholderSrc, src, ...props }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";


  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
    
  }, [src]);



  return (
   
    
    <Image
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />  
  );
};
export default PlaceholderImage;