import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

const chosenIcon = (color, variant, className, text) => {

    if(variant === "add"){
      return (
      <Fab color={color} aria-label={variant} className={className}>
          <AddIcon /> 
      </Fab>
      )
    }else if(variant === "edit"){
      return (
        <Fab color={color} aria-label={variant} className={className}>
            <EditIcon />
        </Fab>
        )
    }else if(variant === "delete"){
      return (
        <Fab color={color} aria-label={variant} className={className}>
            <DeleteIcon />
        </Fab>
        )
    }else if(variant === "contained"){
      return (
        <Button variant="contained" color={color} className={className}>
          {text}
        </Button>
        )
    }else if(variant === "outlined"){
      return (
        <Button variant="outlined" color={color} className={className}>
          {text}
        </Button>
        )
    }

    
}

export default function FloatingActionButtons(props) {
  const classes = useStyles();
  const { color, variant, text } = props;
  
  return (
    <div>
        { chosenIcon(color, variant, classes.fab, text) }
    </div>
  );
}