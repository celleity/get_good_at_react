import Head from 'next/head';
import styles from '../styles/art.module.css';
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
import Container from '@mui/material/Container';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import SewingImageList from '../components/SewingImageList';
import { useSewing } from '../components/useSewing';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { Description } from '@mui/icons-material';

export default function sewing({linkSubject}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortBy, setSortBy] = useState('oldest')

  let initialSubject; 
  if  (linkSubject != null) {
    console.log('is not null')
    initialSubject = linkSubject
  } 
  else {
  initialSubject = 'all'
  }
  const [subject, setSubject] = React.useState(initialSubject);
  console.log(subject)
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const url = 'https://res.cloudinary.com/inkdemons/image/upload/c_thumb,w_200,g_face/v1719083574/images/'

  
const theme = createTheme({
  palette: {
    grey: {
      main: '#212121',
    },
    secondary: purple,
  },
});

// create hook to get images 
 let imageData = useSewing();
const [images, setImages] = useState([]);


useEffect(() => {
 
  setImages(imageData)
  console.log('initial sewing data',images, imageData)
  setSortBy('oldest')
}, [imageData]); 

// add weird sort?
const sortMethods = {
    oldest: { method: (a, b) => (new Date (a.date)  - new Date (b.date)) },
    newest: { method: (a, b) => (new Date (b.date)  - new Date (a.date))   },
    colour: { method: (a, b) => (b.colour - a.colour) },
    neutral: { method: (a, b) => (a.colour - b.colour) },
  };



  function srcset(image, width, height, rows = 1, cols = 3) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
const orderImages = (order, imageArray) => {
    let sortedImages = []; 
    imageArray.sort(sortMethods[order].method).map((o) => (
 
        sortedImages.push({title: o.title, image: o.image, description: o.description, pattern: o.pattern, kind: o.kind, date: o.date, collection: o.collection, colour: o.colour } )
       ));
       
      
    setImages(sortedImages)
    console.log('sortedImages', sortedImages, 'sortBy', order, 'images', images )
}

  const handleChange = (event) => {
    
    setSubject(event.target.value);
    setSortBy('oldest')
    console.log('changed', subject, )
    let word=event.target.value;
     
    if(word === "all"){
      orderImages('oldest', imageData)
      console.log('all ', images, )

      
    }
    else if(word === "tops") {
      const filtered = imageData.filter(item=>item.kind === "tops");
 
      orderImages('oldest', filtered)
    }
    else if(word === "bottoms") {
      const filtered = imageData.filter(item=>item.kind === "bottoms");
   
      setImages(filtered)
      orderImages('oldest', filtered)
    }
    else if(word === "dresses") {
        const filtered = imageData.filter(item=>item.kind === "dresses");
     
        setImages(filtered)
        orderImages('oldest', filtered)
      }
      else if(word === "accessories") {
        const filtered = imageData.filter(item=>item.kind === "accessories");
     
        setImages(filtered)
        orderImages('oldest', filtered)
      }
      else if(word === "NB") {
        const filtered = imageData.filter(item=>item.collection === "NB");
     
        setImages(filtered)
        orderImages('oldest', filtered)
      }
  

  };




  const handleSort = (event) => {

  
    setSortBy(event.target.value)
    orderImages(event.target.value, images);
    console.log('sortBy',event.target.value, images )

 /*   let sortedImages = []; 
    images.sort(sortMethods[event.target.value].method).map((o) => (
 
        sortedImages.push({title: o.title, image: o.image, description: o.description, sadRating: o.sadRating, kind: o.kind, date: o.date } )
       ));
       
      
    setImages(sortedImages) */ 
  
  }

  useEffect(() => {
    console.log('its effecting', sortBy, images)
    orderImages(sortBy, images)
  }, [sortBy]);



  return (
  
  <Layout> 

     { /* <Stack direction="row" spacing={3} sx={{padding: '4px'}}>
      <Chip label="All" onClick={handleClick} />
      <Chip label="Demons" onClick={handleClick} />
      <Chip label="Sketches" onClick={handleClick} />
      <Chip label="Paintings" onClick={handleClick} />
      <Chip label="Photography" onClick={handleClick} />
      <Chip label="Misc" onClick={handleClick} />
    </Stack>
    */ 
  } <Container  maxWidth='false' sx={{display: 'flex', flexWrap: 'wrap',  wordBreak: 'break-all', justifyContent: 'flex-start', }}> 
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="filter"
          onChange={handleChange}
          sx={{position: 'relative',  marginLeft: '1rem', marginTop: '1rem'}}
          className='right'
        >
          <MenuItem value={'all'}>all</MenuItem>
          <MenuItem value={'tops'}>tops</MenuItem>
          <MenuItem value={'bottoms'}>bottoms</MenuItem>
          <MenuItem value={'dresses'}>dresses</MenuItem>
          <MenuItem value={'accessories'}>Accessories</MenuItem>
          <MenuItem value={'NB'}>NB Collection</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-2"
          value={sortBy}
          label="filter"
          onChange={handleSort}
          sx={{position: 'relative', marginLeft: '1rem', marginTop: '1rem'}}
          className='right'
        >
          <MenuItem value={'oldest'}>oldest</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
          <MenuItem value={'colour'}>colour</MenuItem>
          <MenuItem value={'neutral'}>neutral</MenuItem>
        
        
        
        </Select>


        </Container>


    <SewingImageList imageArray={images} />

 </Layout>
 
    
         
    
      )
}
