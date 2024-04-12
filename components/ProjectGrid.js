import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DemonCard from './DemonCard';
import {useDemonImages} from './useDemonImages';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from '../styles/Home.module.css';
import  Image   from 'mui-image';
import Typography from '@mui/material/Typography';



const ProjectGrid = ( ) => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
     
     }, ( []))

    return (

<div>  {domLoaded && (<div> 
<Grid id='art' className='grids art ' container spacing={2} sx={{padding: '3rem'}}> 
  <Grid className='art'  xs={6}>
 
    <Image src='https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/acne.jpg'/>
      Test1
  </Grid>
  <Grid className='art'  xs={6}>
      <Image src='https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/aging.jpg' />
      Test2
  </Grid>

  </Grid>
  <Grid id='sew' className='grids sew' container spacing={2}> 
  <Grid className='sew'  xs={6}>
 
    <Image src='https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/love.jpg'/>
    
  </Grid>
  <Grid className='sew'  xs={6}>
      <Image src='https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/black.jpg' />
      
  </Grid>

  </Grid>
</div>
 )
 }    </div>
    )
} 

export default ProjectGrid;