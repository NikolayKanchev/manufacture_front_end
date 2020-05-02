import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 20
  },
}));

export default function ControlledOpenSelect(props) {
  const { chosenCountry ,optionsArr, title, selectCountry } = props;
  const classes = useStyles();
  const [age, setAge] = React.useState(chosenCountry);
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
    selectCountry(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <form autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">{title}</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
          }}
        >
          { optionsArr.map((option, index) => {
              return <MenuItem key={index} value={option}>{option}</MenuItem>
          })}
        </Select>
      </FormControl>
    </form>
  );
}