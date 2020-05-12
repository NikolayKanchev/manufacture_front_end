import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import Button from '../buttons/Button';

// import Typography from '@material-ui/core/Typography';
// import { Divider } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
// import { deepPink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    border: "1px solid #eeeeee",
    margin: 5,
  },
  minHeight: {
    minHeight: 75
  },
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    justifyContent: 'center'
  },
  pink: {
    color: theme.palette.getContrastText("#f50057"),
    backgroundColor: "#f50057",
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();
  const { card } = props;

  return (
    <Card className={classes.card}>
        
        <CardContent>
          <div className="card-title">
            {card.title}
          </div>
          <br/>

        { card.subCards? (
          <div className="sub-cards">
            { card.subCards.map((c,i) => 
              <div key={i} className="sub-card">
                { c.cardTitle ? 
                  <div className="sub-card-title">{c.cardTitle}</div> : null
                }
                <br></br>
                <img alt="" className="image" src={c.image} />
                <br></br>
                <br></br>
                <div className="text">{c.text}</div>
                <br></br>
                { card.hasSteps ?
                  <div className={classes.root}>
                    <Avatar className={classes.pink}>{i+1}</Avatar>
                  </div>:
                  null
                }
              </div>
            )}
          </div>
        ) : null }

      </CardContent>
    </Card>
  );
}