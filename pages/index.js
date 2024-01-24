import Head from 'next/head';
import styles from '../styles/Home.module.css';
import QuantumImage from '../components/QuantumImage';
import DemonImage from '../components/DemonImage';
import PhotoTile from '../components/PhotoTile';
import PhotoGrid from '../components/PhotoGrid';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import React, { useRef, useState } from 'react';
import Popover from '@mui/material/Popover';
import { CardActionArea, Container,Dialog, DialogContent, DialogContentText, DialogTitle  } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <div className={styles.container}>

<main >
<div  > 
  <div className={styles.about} onClick={handleClick}> What the hell is this?</div>
  <br/>
  <div className={styles.contact} onClick={handlePopoverClick}>  Contact </div>
  <Popover
  open={open}
  onClose={handlePopoverClose}
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
 <p className={styles.contactInfo}> Please don't </p>
</Popover>
  <Dialog   
     
     maxWidth="md"
     open={isOpen}
     onClose={() => handleClose}
    
     
     >
   
       
         <DialogContent   sx={{
     display: 'flex',
     flexDirection: 'row',
     maxWidth: '500px'
   }}>
  
      <DialogContentText >

      This is a project I started in 2011 after reading “One! Hundred! Demons!” by Lynda Barry. I was unemployed and frequented the library since it was free and picked up the book on a whim. More than 10 years later, I am still working towards 100 demons. I go through seasons of painting these demons. Sometimes I don’t paint them for a few years, other times I paint them every day. They are what I consider minor demons; demons of the mundane. Nothing supernatural, but maybe that is what makes them even worse. I realize that others could have more terrible demons, but these are my own personal ones which occupy my mind.
       </DialogContentText>        
      
     

        <CloseIcon   onClick={handleClose} sx={{ cursor: "pointer"}}/>
        </DialogContent>
   </Dialog>

 
</div>
      <Stack  direction="column"
  justifyContent="left"
  alignItems="stretch" spacing="12" className={styles.demons} >
      <a className={styles.demonHeader1} onClick={() => document.getElementById("header-2").scrollIntoView(({ behavior: 'smooth', block: "center", inline: "center" }))} id="header-1"> ONE!</a>
      <div className={styles.demonHeader2} id="header-2" onClick={() => document.getElementById("header-3").scrollIntoView(({ behavior: 'smooth', block: "center", inline: "center" }))}> HUNDRED!</div>
      <div className={styles.demonHeader3} id="header-3"  onClick={() => document.getElementById("demons").scrollIntoView(({ behavior: 'smooth', block: "start", inline: "start" }))}> DEMONS!</div>
      </Stack>
    <div id="demons"/> 
      <PhotoGrid />
     </main>

     

    </div>
  )
}
