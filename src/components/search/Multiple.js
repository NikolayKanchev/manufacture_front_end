import React, { useRef } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Search.css'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     '& > * + *': {
//       marginTop: theme.spacing(3),
//     },
//   },
// }));

export default function Tags(props) {
  const {handleSelected, multiOptions, label, variant, size, width} = props;
  // const classes = useStyles();
  const chosenOptions = useRef([]);

  const handleChangeMultiple = (obj) => {
    const length = Object.keys(obj).length;
    const entries = Object.entries(obj);

    if (chosenOptions.current.length > length){
        chosenOptions.current = [];
        for (const [key, val] of entries){
            if (chosenOptions.current[key] !== val.props.label){
                chosenOptions.current.push(val.props.label);
            }             
        }
        handleSelected(chosenOptions);
    } else if (length > 0){
        for (const [key, val] of entries){
            if (chosenOptions.current[key] !== val.props.label){
                chosenOptions.current.push(val.props.label);
                handleSelected(chosenOptions);
            }             
        }
    }
  };

  return (
    // <div className={classes.root}>
    <div>
    <Autocomplete
        multiple
        id={label}
        style={width}
        options={multiOptions}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        className="multiple-width"
        renderInput={(params) => (
          <TextField
            {...params}
            variant={variant ? variant : "standard"}
            size={size ? size : "small"}
            label={label}
            placeholder={label}
            onChange={handleChangeMultiple({...params.InputProps.startAdornment})}
          />
        )}
      />
    </div>
  );
}
