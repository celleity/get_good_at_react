import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import  Image   from 'mui-image';
import {useSketchImages} from './useSketchImages';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from '../styles/Home.module.css';
import Typography from '@mui/material/Typography';

// add prop for sorting? 
const SketchGrid = (sortBy, setSortBy) => {
  const [anchorElMenu, setAnchorElMenu] = useState(null)
const [sorted, setSorted] = useState('oldest')
const openMenu = Boolean(anchorElMenu);
const [verb, setVerb] = useState('creating');
const options = {
    art: 'making art',
    sketch: 'sketching',
    sew: 'sewing clothes',
    who: 'someone',
    experiment: 'experimenting',
    inspired: 'inspired'
};




 const handleEnter = (event) => {
    let id = event.target.id;
    console.log(event.target)
    setVerb(options[id])
   
  
  }



const handleMenuClick = (event) => {
   
  setAnchorElMenu(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorElMenu(null)

}
//sort by demon numbers, asc to descending, with metadata

const sketchImages = useSketchImages();
// sort by options: saddest, happiest, newest, oldest, beauty, favourites,
// filter by :  demons, sketches, photos, paintings
const sortMethods = {
  oldest: { method: (a, b) => (new Date(a.date).getTime() - new Date(b.date).getTime()) },
  newest: { method: (a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime())  },

};
const handleSort = (event) => {

console.log(sketchImages.sort(sortMethods[sorted].method))
  setSorted(event.target.value)
 

}

const url = 'https://res.cloudinary.com/inkdemons/image/upload/v1713454153/Sketches/'
return (
  <div>
    <Typography variant='h1' sx={{display: 'flex', justifyContent: 'center'}}>  sketching </Typography>
<Select
   labelId="demo-simple-select-standard-label"
   id="demo-simple-select-standard"
   value={sorted}
   onChange={handleSort}
   label="Sort By"
   variant="standard"
   className={styles.selectButton}
>
  <MenuItem value={'oldest'} >Oldest</MenuItem>
  <MenuItem value={'newest'}>Newest</MenuItem>

</Select>

    <Grid container  justify="center" columns={ {xs: 1, sm: 5, md: 20}} spacing={0} sx={{backgroundColor: "black"}}  >
      
    {sketchImages.sort(sortMethods[sorted].method).map((o) => (
      <Grid xs={1} sm={1} md={4} key={o.id}> 
        <Image src={url + o.image}/>
  
      </Grid>
    ))}
    </Grid>
    </div>
);

}

export default SketchGrid;
