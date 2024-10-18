//contact -> on initial click, says don't contact, after second time, lists contact info
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Image } from 'mui-image'
import React, { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Layout from '../components/Layout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ProjectGrid from '../components/ProjectGrid';
import ProjectPhotoList from '../components/ProjectPhotoList';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function About() {
// add buttons/images for contact, characteristics, art style, link to lists, random thing, location, 
const [contactCount, setContactCount] = useState(0)
const handleChange = () => {

  setContactCount(contactCount + 1)

};


  return (
  
    <Layout> 
<Container maxWidth='false' sx={{marginLeft: '0px', flexDirection: 'row', display: 'flex', justifyContent: 'space-around',
    
    flexWrap: 'nowrap',}}> 
        <Grid container spacing={0} sx={{  paddingTop: '2rem',  paddingLeft: '.5rem', justifyContent: 'space-between'
        }}>
          
        <Grid xs={6} md={6} spacing={0} sx={{alignContent: 'flex-start  '}}>
        <div>
      <Accordion sx={{backgroundColor: 'orange',}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>About Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Celine Perley is an East Coast Canadian artist with a resting sad face who sketches the mundane and wishes it was magical. 
          Three words to describe me are: Whimsical, thoughtful, creative. 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'orangered'}} onChange={() => handleChange()}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography> {/* if clicked mulitple times, then show actual contact info */ }
            {contactCount <= 1 ? "Please Don't" : "Fine. celineperley@gmail.com"}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'gold'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Background</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I grew up in middle of now where, catching fireflies and running in the woods. Then I went to school for art, then again for computers, and now I run in the woods.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'indianred'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Likes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I like warm beverages, trail running, ultimate frisbee, spooky things. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'thistle'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Favourites</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Books: The Memory Police, Kafka on the Shore, 100 years of Solitude, JPOD, Life After God, Master and Magarita, Slaughterhouse 5. 
          </Typography>
          <Typography>
          Movies:   Amelie, Eternal Sunshine of the Spotless Mind, Hunt for the Wilderpeople, Beginners, Submarine.   
          </Typography>
          <Typography> 
          Music: IDLES, TV Priest, Timbre Timber, 
          </Typography>
          <Typography> 
          Fictional Characters: Cadfael, Miss Marple, Tom Bombadil. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: 'mediumorchid'}}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>My ideal day</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sleep in a little, have a slow morning with coffee either painting, reading or surfing the internet. Have a small adventure planned, like a trail race or a bike tour trip. Have a day to decompress after that.   
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
     
          </Grid>
        
          <Grid xs={6} md={6} spacing={0} sx={{display: 'flex', alignContent: 'flex-start', justifyContent: 'center'}}>
            <img  
            src='https://res.cloudinary.com/inkdemons/image/upload/c_fill,w_300,h_300/v1722559489/me_vbzxs0.jpg'
           
            style={{width: '600px', maxWidth: '600px', maxHeight: '600px', objectFit: 'contain', paddingLeft: '1rem'}}
            loading="lazy"
            />
        
          { /*
            <Button variant='text'> 
            <Image  
            src='https://res.cloudinary.com/inkdemons/image/upload/c_fill,w_300,h_300/v1719083574/images/scotland1.jpg'
          
            loading="lazy"
            height={'40vh'} />
          </Button>
          <Button variant='text'> 
            <Image  
            src='https://res.cloudinary.com/inkdemons/image/upload/c_fill,w_300,h_300/v1719083574/images/wales.jpg'
          
            loading="lazy"
            height={'40vh'} />
          </Button>
       <Button variant='text'> 
            <Image  
            src='https://res.cloudinary.com/inkdemons/image/upload/c_fill,w_300,h_300/v1719083574/images/bike.jpg'
          
            loading="lazy"
            height={'40vh'} />
          </Button> */ }
        </Grid>
       
       
        </Grid>
    </Container>
    </Layout>
 
    
         
    
      )
}
