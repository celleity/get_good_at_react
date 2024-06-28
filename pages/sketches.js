import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SketchGrid from '../components/SketchGrid'
import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProjectGrid from '../components/ProjectGrid';

export default function Sketches() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortBy, setSortBy] = useState(null)
  
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  
const theme = createTheme({
  palette: {
    grey: {
      main: '#212121',
    },
    secondary: purple,
  },
});
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




  return (
  
  <Layout> 
   
 <SketchGrid/> 

 </Layout>
 
    
         
    
      )
}
