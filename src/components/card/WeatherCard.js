import React from 'react';

import '../../components/card/WeatherCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 245,
    marginTop: 100,
    marginLeft: "45%"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ title }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <h2>{title}</h2>
      <CardActionArea>
        icon
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            -- Details --
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            
           hhhhhhhhh

          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            kjjjjjjjjjjjjjjjjjjjj
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
           jjjjjjjjjjjjjjjjjjjj
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            jjjjjjjjjj
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}