/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    const {handleSelectCategory, categories, label} = props;
    let category = "";

    const handleSelect = (value) => {
        if (category !== value.value){
            handleSelectCategory(value.value)
            category = value.value;
        }
    }

  return (
    <Autocomplete
      id={label}
      options={categories}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField onChange={handleSelect({...params.inputProps})} {...params} label={label} variant="outlined" />}
    />
  );
}
