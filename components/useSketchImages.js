import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

export function useSketchImages (sortBy) {

const supabase = createClient("https://mtlhlvwncdtbgxcbovei.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bGhsdnduY2R0Ymd4Y2JvdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTQzMDQsImV4cCI6MjAxNjc3MDMwNH0.3IlU9ziCnnPsGriA9axHtA2aG4IyLox07po4okFprP8");
 
  const [isLoading, setIsLoading] = useState(true);
  const [sketches, setSketches] = useState([]);

 // add prop for sorting
  async function getSketchData() {
  


  const { data} = await supabase
    .from('sketches')
    .select('*')
    .order('id', { ascending: true })
    setSketches(data)
    setIsLoading(false);
 

}


  useEffect(() => {
   
  getSketchData()
  console.log(sketches)
  }
  , []);


  return sketches;
}

