import React, { useEffect, useState } from 'react';
import { useReduxState } from '../../utils/State';

import CardsList from '../../components/cards/CardsList';
import Register from '../../components/manufacturer/Register';

import Typography from '@material-ui/core/Typography';
import { fetchPlansCards } from '../../utils/FetchData';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import history from '../../utils/History';
import './JoinAsManufacturer.css';

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

const JoinAsFactory = () => {
    const classes = useStyles();
    const [stepper, setStepper] = useState(1);
    const cards = fetchPlansCards("manufacturers");
    let [ state ] = useReduxState();

    useEffect(() => {
        window.scrollTo(0, 0);
    });    

    const handleClickStepper = (type) => {
        if (type === "next"){
            setStepper(stepper + 1)
        }

        if (type === "back"){
            setStepper(stepper - 1)
        }
    }

    const handleClickFinish = () => {
        history.push("/");
    }

    // const handleChosen = (num) => {
    //     console.log(num);

    // }

    return (
        <>
            <div className="flex-num">
                <Avatar className={ stepper === 1 ? classes.pink : "" }>1</Avatar>
                <div className="line"></div>
                <Avatar className={ stepper === 2 ? classes.pink : "" }>2</Avatar>
                <div className="line"></div>
                <Avatar className={ stepper === 3 ? classes.pink : "" }>3</Avatar>
            </div>
            { stepper === 1 ? 
                <>
                    <div className="mt-20">
                        <Typography gutterBottom variant="h6" component="h2">
                            Choose a plan that suits your needs
                        </Typography>
                    </div>
                    
                    <div className="card-list mt-minus-20">
                        <CardsList cards={cards} type="flex" planType="manufacturer"/> 
                    </div>

                </>: null
            }
            { stepper === 2 ? 
                <>
                    <div className="mt-20">
                        <Typography gutterBottom variant="h6" component="h2">
                            We need information about your company
                        </Typography>
                    </div>
                    
                    <div className="card-list mt-minus-20">
                        <Register />
                    </div>

                </>: null
            }
            { state.manufacturerPlan !== "" ?
                <>
                    { stepper <= 2 ? 
                    <div className="flex-company">
                        { stepper === 1 ? 
                            <div><Button disabled variant="outlined" color="primary" onClick={() => handleClickStepper("back")}>Back</Button></div>:
                            <div><Button variant="outlined" color="primary" onClick={() => handleClickStepper("back")}>Back</Button></div>
                        }
                        <div><Button variant="outlined" color="primary" onClick={() => handleClickStepper("next")}>Next</Button></div>
                    </div>:
                    <div><Button variant="outlined" color="primary" onClick={handleClickFinish}>Finish</Button></div>
                    }
                </>:null
            }
        </>
    )
}

export default JoinAsFactory;