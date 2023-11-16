import react,{ useState, useEffect } from "react";
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  const [objects, setObjects] = useState([]);
  const s3url = "https://mydemonbucket.s3.amazonaws.com/";
  let demonNum = 1;

  useEffect(() => {
    const client = new S3Client({
      region: "us-east-1",
      // Unless you have a public bucket, you'll need access to a private bucket.
      // One way to do this is to create an Amazon Cognito identity pool, attach a role to the pool,
      // and grant the role access to the 's3:GetObject' action.
      //
      // You'll also need to configure the CORS settings on the bucket to allow traffic from
      // this example site. Here's an example configuration that allows all origins. Don't
      // do this in production.s3clei
      //[
      //  {
      //    "AllowedHeaders": ["*"],
      //    "AllowedMethods": ["GET"],
      //    "AllowedOrigins": ["*"],
      //    "ExposeHeaders": [],
      //  },
      //]
      //
      credentials: {
        accessKeyId: "AKIA4RWJVKE3WQU6T3NN",
        secretAccessKey: "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",
      },});
    const command = new ListObjectsCommand({ Bucket: "mydemonbucket" });
    client.send(command).then(({ Contents }) => setObjects(Contents || []));
    console.log(objects)
  }, []);
// get demon data here? from db? and go through all -> if no name, then black image  src === null ? black.jpg : src.name
//add s3url + image? 
return (
    <Grid container rows={{ xs: 20 }} columns={{ xs: 20  }} spacing={2}>
      
    {objects.map((o) => (
      
      <Grid xs={2} sm={4} md={4} key={o.ETag}> 
        <DemonCard demonNumber={{number:demonNum++}} demonSummary={{summary: "My Other People"}} demonImage={s3url + o.Key}/>
        
      </Grid>
    ))}
    </Grid>
);

}

export default PhotoGrid;
