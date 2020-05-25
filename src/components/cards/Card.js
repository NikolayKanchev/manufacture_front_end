import React from 'react';
import { useReduxState } from '../../utils/State';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: "100%",
    width: "100%"
  },
  minHeight: {
    minHeight: 75
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const { card, type } = props;
  let [ state, dispatch ] = useReduxState();

  const handleSelected = (num) => {
    switch(type){
      case "manufacturer":
        dispatch({ type: "selectManufacturerPlan", ...state, manufacturerPlan: num});
        break
      case "endUser":
        dispatch({ type: "selectEndUserPlan", ...state, endUserPlan: num});
        break
      default:
        return
    }
    // dispatch({ type: "selectManufacturerPlan", ...state, selectedPlan: num});
  }

  return (
    <>
      <div className="plan-card" >
        <Card className={classes.card} onClick={() => handleSelected(card.id)}>
            { card.bestValue? (
            <>
              <div className="best-value">
                <Typography gutterBottom variant="overline" component="h5">
                    Best Value
                </Typography>
              </div>
            </>
            ) : null }
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {card.title}
              </Typography>
              <Typography gutterBottom variant="h4" component="h2">
                {card.price}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" component="p">
                {card.period}
              </Typography>
              <br/>
              <Divider variant="middle" />
              <div className="selected-plan-check">
                { (type === "manufacturer" && state.manufacturerPlan === card.id) || (type === "endUser" && state.endUserPlan === card.id) ? 
                  <>
                    <img className="check-img" alt="" width="40%" height="70px" src={require('../../images/check.png')} />
                  </>: null
                }
              </div>
              <Divider variant="middle" />
              <br/>
              <Typography className={classes.minHeight} variant="body2" color="textSecondary" component="p">
                {card.text}
              </Typography>
            </CardContent>
        </Card>
      </div>
    </>
  );
}