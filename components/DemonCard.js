import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function DemonCard({demonNumber, demonSummary, demonImage}) {

  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={demonImage}
          alt={demonSummary.summary}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {demonNumber.number}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {demonSummary.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}