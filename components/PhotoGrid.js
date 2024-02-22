import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DemonCard from './DemonCard';
import {useDemonImages} from './useDemonImages';




const PhotoGrid = () => {


const demonImages = useDemonImages();
return (

    <Grid container  justify="center" columns={ {xs: 1, sm: 5, md: 20}} spacing={0} sx={{backgroundColor: "black"}}  >
      
    {demonImages.map((o) => (
      <Grid xs={1} sm={1} md={4} key={o.id}> 
        <DemonCard demonNumber={{number:o.id}} demonSummary={{summary: o.demonDescription}} demonImageURL={o.image} demonName={o.demonName}/>
  
      </Grid>
    ))}
    </Grid>
);

}

export default PhotoGrid;
