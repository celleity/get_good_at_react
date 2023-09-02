import react,{ useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DemonCard from './DemonCard';

const PhotoGrid = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

// get demon data here? from db? and go through all -> if no name, then black image  src === null ? black.jpg : src.name
return (
    <Grid container rows={{ xs: 20 }} columns={{ xs: 20  }} spacing={2}>
    {Array.from(Array(100)).map((_, index) => (
      <Grid xs={2} sm={4} md={4} key={index}>
        <DemonCard demonNumber={{number: '1'}} demonSummary={{summary: 'Demon Summary'}}/>
      </Grid>
    ))}
    </Grid>
);

}

export default PhotoGrid;
