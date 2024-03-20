import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

export function useDemonImages (sortBy) {

const supabase = createClient("https://mtlhlvwncdtbgxcbovei.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bGhsdnduY2R0Ymd4Y2JvdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTQzMDQsImV4cCI6MjAxNjc3MDMwNH0.3IlU9ziCnnPsGriA9axHtA2aG4IyLox07po4okFprP8");
  let CDNUrl = 'https://res.cloudinary.com/inkdemons/image/upload/c_thumb,g_auto,h_250,w_250/v1706288233'
  const [isLoading, setIsLoading] = useState(true);
  const [demons, setDemons] = useState([]);

 // add prop for sorting
  async function getDemonData() {
  
  const sort = sortBy === 'sad' ? 'sad' : 'demonNumber';
  const ascending = sortBy === 'false' ? false : true
  console.log('this getDemons is called again, with asc', ascending)
  const { data} = await supabase
    .from('demons')
    .select('*')
    .order('demonNumber', { ascending: true })
    setDemons(data)
    setIsLoading(false);
   

}
const hundredDemons = useMemo(() => {
  let newDemons = []
    if(demons.length <= 100 && !isLoading){

      const blackImg = [];
     
      for(let count = demons.length + 1; count <= 100; count++){
      blackImg.push({id: count+1,  demonName: "Unknown Demon", demonDescription: "this demon has not yet been immortalized", image: 'black.jpg', demonNumber: count})
        
      }
      newDemons = [...demons, ...blackImg]
     
    }
    return newDemons

}, [demons])
console.log(hundredDemons)
  useEffect(() => {
   
    getDemonData()
  
  }
  , []);


  return hundredDemons;
}

