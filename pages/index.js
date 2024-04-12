import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import React, { useEffect, useRef, useState } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProjectGrid from '../components/ProjectGrid';

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  //create or edit clicks to hide grids by document.getElementById('dip').hidden = true
  //or make this an accordian menu thing
  const options = [
    'making art',
    'sewing clothes',
    'who?',
    'experimenting',
    'inspired'
  ];
  const ids = [
    'art',
    'sew',
    'who',
    'experiment',
    'inspired'
  ];
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

  };

  const handleMenuItemClick = (event, index) => {
 /*   const divs = document.querySelectorAll('#grids'); // add wild card to get all grids
    divs.forEach(div => { //if # = current selected, hidden = false. otherwise, true
      console.log(div)
      
    }) */
    setSelectedIndex(index);
   // console.log(divs)

   // document.getElementsByClassName(options[index]).hidden = false
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


useEffect(() => {
  
   const divs = document.querySelectorAll('.grids'); // add wild card to get all grids
   let gridItems = Array.from(divs, (div) => div.childNodes);

// console.log(gridItems)
   
   let i = 0;
    divs.forEach(div => { //if # = current selected, hidden = false. otherwise, true
     
      
      if(div.className.includes( ids[selectedIndex]) ) {
      
      div.hidden = false
      for (let i = 0; i < div.childElementCount; i++) {

      div.childNodes[i].hidden = false;

     
      }
      } 
  
       else {
        
        div.hidden = true
        for (let i = 0; i < div.childElementCount; i++) {
         
          div.childNodes[i].hidden = true;
      
        }
       // gridItems.forEach((item) => console.log('hidden', item))
   
       }
    }) 


   

}, ( [selectedIndex]))


  const handleSort = (event) => {

  
    setSorted(event.target.value)
   
  
  }


const image = 'https://res.cloudinary.com/inkdemons/image/upload/c_scale,h_400,w_600,q_auto,f_auto/Ink_Demons/love.jpg'

  return (
  
  
    <Box sx={{    display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      //media query for mobile -> flex dir column,align items-stretch
      }}>
      <Typography variant='h1'> Celine Perley is</Typography>
 
      <Button
         id="demo-customized-button"
         aria-controls={open ? 'demo-customized-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         variant="contained"
         disableElevation
         onClick={handleClick}
         endIcon={<KeyboardArrowDownIcon />}
        sx={{marginLeft: '2rem', marginBottom: '2rem'}}
> {options[selectedIndex]}
  </Button>
  <Menu  anchorEl={anchorEl}
        open={open}
        onClose={handleClose}> 
  {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            value={option}
          >
            {option}
          </MenuItem>
        ))}
  </Menu>

 <ProjectGrid/> 

    </Box>
 
    
         
    
      )
}
