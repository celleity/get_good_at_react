import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DemonCard from './DemonCard';



const PhotoGrid = () => {

  const supabase = createClient("https://mtlhlvwncdtbgxcbovei.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bGhsdnduY2R0Ymd4Y2JvdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTQzMDQsImV4cCI6MjAxNjc3MDMwNH0.3IlU9ziCnnPsGriA9axHtA2aG4IyLox07po4okFprP8");
  
  const [isLoading, setIsLoading] = useState(true);
  const [demons, setDemons] = useState([]);

 
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

  https://res.cloudinary.com/inkdemons/image/upload/v1706288220/Ink_Demons/Acne_tvbiuc.jpg
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
