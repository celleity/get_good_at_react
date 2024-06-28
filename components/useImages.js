import react,{ useState, useEffect, useMemo } from "react";
import { createClient } from "@supabase/supabase-js";

export function useImages (sortBy) {

const supabase = createClient("https://mtlhlvwncdtbgxcbovei.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10bGhsdnduY2R0Ymd4Y2JvdmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTQzMDQsImV4cCI6MjAxNjc3MDMwNH0.3IlU9ziCnnPsGriA9axHtA2aG4IyLox07po4okFprP8");
  let CDNUrl = 'https://res.cloudinary.com/inkdemons/image/upload/c_thumb,g_auto,h_250,w_250/v1706288233'
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

 // add prop for sorting
  async function getImageData() {
  
  
  const { data} = await supabase
    .from('demons')
    .select('*')
    setImages(data)
    setIsLoading(false);
   

}

  useEffect(() => {
   
    getImageData()
  
  }
  , []);


  return images;
}

