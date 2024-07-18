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
import ArtImageList from '../components/ArtImageList';
import { useImages } from '../components/useImages';
import { image } from '@cloudinary/url-gen/qualifiers/source';
import { Description } from '@mui/icons-material';

export default function art() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sortBy, setSortBy] = useState('oldest')
  const [subject, setSubject] = React.useState('all');
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
 let imageData = useImages();
const [images, setImages] = useState([]);


useEffect(() => {
 
  setImages(imageData)
  console.log('initial',images, imageData)
  setSortBy('oldest')
}, [imageData]); 


const sortMethods = {
    oldest: { method: (a, b) => (new Date (a.date)  - new Date (b.date)) },
    newest: { method: (a, b) => (new Date (b.date)  - new Date (a.date))   },
    saddest: { method: (a, b) => (b.sadRating - a.sadRating) },
    happiest: { method: (a, b) => (a.sadRating - b.sadRating) },
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
 
        sortedImages.push({title: o.title, image: o.image, description: o.description, sadRating: o.sadRating, kind: o.kind, date: o.date } )
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
    else if(word === "demons") {
      const filtered = imageData.filter(item=>item.kind === "demon");
      console.log('demon', filtered, )
    //  setImages(filtered)
      orderImages('oldest', filtered)
    }
    else if(word === "sketches") {
      const filtered = imageData.filter(item=>item.kind === "sketches");
      console.log('sketch', filtered, )
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
<Container className="verbHeaders" maxWidth='false' sx={{display: 'flex', flexWrap: 'wrap',  wordBreak: 'break-all', justifyContent: 'center', }}> 
        <Link href='/about' className="aboutVerb" id="aboutLink" style={{ textDecoration: 'none', color:'black', '&:hover': {color: 'red'}, }} > <Typography id='aboutVerb' className="aboutVerb" variant='h3'sx={{ fontFamily: "Helvetica",paddingRight: '1rem',  wordBreak: 'break-all',  textDecoration: 'none', color: 'black', '&:hover': {color: 'red'} }} >  is a person  </Typography></Link>
        <Typography variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
        <Typography id='artVerb' className="artVerb" variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', color: '#CA2DDF', '&:hover': {color: 'red'} }} > is making art </Typography> 
        <Typography  variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
        <Typography id='sewVerb'  className="sewVerb" variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem',  wordBreak: 'break-all', color: 'black', '&:hover': {color: 'red'}}}>  is sewing  </Typography>
      
      
        <Typography  variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
        <Typography id='experimentVerb' className="experimentVerb" variant='h3' sx={{ fontFamily: "Helvetica",paddingRight: '1rem', color: 'black', '&:hover': {color: 'red'}}}>  is experimenting  </Typography>
        <Typography  variant='h3' sx={{fontFamily: "Helvetica", paddingRight: '1rem', }} > and</Typography> 
        <Typography id='inpsiredVerb' className="inspiredVerb"  variant='h3' sx={{ fontFamily: "Helvetica",paddingRight: '1rem', color: 'black', '&:hover': {color: 'red'}}}>  is inspired  </Typography>
      
        
        </Container>
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
          <MenuItem value={'demons'}>demons</MenuItem>
          <MenuItem value={'sketches'}>sketches</MenuItem>
          <MenuItem value={'paintings'}>paintings</MenuItem>
          <MenuItem value={'photos'}>photos</MenuItem>
          <MenuItem value={'misc'}>misc</MenuItem>
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
          <MenuItem value={'happiest'}>happiest</MenuItem>
          <MenuItem value={'saddest'}>saddest</MenuItem>
        
        
        </Select>


        </Container>


    <ArtImageList imageArray={images} />

 </Layout>
 
    
         
    
      )
}
