import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import DemonCard from './DemonCard';
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

const PhotoGrid = () => {



  const supabase = createClient("https://mtlhlvwncdtbgxcbovei.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bGhsdnduY2R0Ymd4Y2JvdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTQzMDQsImV4cCI6MjAxNjc3MDMwNH0.3IlU9ziCnnPsGriA9axHtA2aG4IyLox07po4okFprP8");
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const [isLoading, setIsLoading] = useState(true);
  const [demons, setDemons] = useState([]);
  const s3url = "https://mydemonbucket.s3.amazonaws.com/";
 
  async function getDemonData() {

    
  const { data} = await supabase
    .from('demons')
    .select('*')
    .order('id', { ascending: true })
    setDemons(data)
    setIsLoading(false);
   

}
const hundredDemons = useMemo(() => {
  let newDemons = []
  console.log(demons.image)
    if(demons.length <= 100 && !isLoading){
     
      const blackImg = [];
     
      for(let count = demons.length + 1; count <= 100; count++){
      blackImg.push({id: count,  demonName: undefined, demonDescription: "this demon has not yet been immortalized", image: "black.jpg"})
        
      }
      newDemons = [...demons, ...blackImg]
     
    }
    return newDemons

}, [demons])

  useEffect(() => {
   
    getDemonData()
  
  }
  , []);


return (

    <Grid container  columns={{ xs: 20  }} spacing={0} sx={{backgroundColor: "black"}}  >
      
    {hundredDemons.map((o) => (
      <Grid xs={2} sm={4} md={4} key={o.id}> 
        <DemonCard demonNumber={{number:o.id}} demonSummary={{summary: o.demonDescription}} demonImageURL={o.image} demonName={o.demonName}/>
        
      </Grid>
    ))}
      

    </Grid>
);

}

export default PhotoGrid;
