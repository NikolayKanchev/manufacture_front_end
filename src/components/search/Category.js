/* eslint-disable no-use-before-define */
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    const {handleSelected, categories, label} = props;
    let selectedCategory = "";
    let disabled = false;

    if (categories === undefined && label === "Sub Category"){
        disabled = true;
    }

    const handleSelect = (value) => {
        if (categories === undefined){
            return
        }
        if (selectedCategory !== value.value){          
            handleSelected(value.value);
            selectedCategory = value.value;
        }
    }

  return (
    <>
      {categories !== undefined ? 
        <Autocomplete
        id={label}
        options={categories}
        getOptionLabel={(option) => option.title}
        style={{ width: 180 }}
        disabled={disabled}
        renderInput={(params) => 
            <TextField 
                size="small"
                onChange={handleSelect({...params.inputProps})} {...params} label={label} 
                variant="standard" 
            />
        }
        />:
        <Autocomplete
        id={label}
        options={[]}
        style={{ width: 180 }}
        disabled={disabled}
        renderInput={(params) => 
            <TextField 
                size="small"
                onChange={handleSelect({...params.inputProps})} {...params} label={label} 
                variant="standard" 
            />
        }
        /> 
    } 
    </>
  );
}
