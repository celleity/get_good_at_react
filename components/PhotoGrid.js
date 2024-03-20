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


// add prop for sorting? 
const PhotoGrid = (sortBy, setSortBy) => {
  const [anchorElMenu, setAnchorElMenu] = useState(null)
const [sorted, setSorted] = useState('oldest')
const openMenu = Boolean(anchorElMenu);




const handleMenuClick = (event) => {
   
  setAnchorElMenu(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorElMenu(null)

}
//sort by demon numbers, asc to descending, with metadata

const demonImages = useDemonImages();


const sortMethods = {
  oldest: { method: (a, b) => (a.demonNumber - b.demonNumber) },
  newest: { method: (a, b) => (b.demonNumber - a.demonNumber)  },
  saddest: { method: (a, b) => (a.sad - b.sad) },
  happiest: { method: (a, b) => (b.sad - a.sad) },
};
const handleSort = (event) => {
  console.log('this is from photogrid', demonImages)

  setSorted(event.target.value)
 

}
return (
  <div>
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
  <MenuItem value={'saddest'} >Saddest</MenuItem>
  <MenuItem value={'happiest'} >Happiest</MenuItem>
</Select>
    <Grid container  justify="center" columns={ {xs: 1, sm: 5, md: 20}} spacing={0} sx={{backgroundColor: "black"}}  >
      
    {demonImages.sort(sortMethods[sorted].method).map((o) => (
      <Grid xs={1} sm={1} md={4} key={o.id}> 
        <DemonCard demonNumber={{number:o.demonNumber}} demonSummary={{summary: o.demonDescription}} demonImageURL={o.image} demonName={o.demonName} sortBy={sorted} setSortBy={setSorted} index={demonImages.indexOf(o)}/>
  
      </Grid>
    ))}
    </Grid>
    </div>
);

}

export default PhotoGrid;
