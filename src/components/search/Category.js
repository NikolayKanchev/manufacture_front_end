/* eslint-disable no-use-before-define */
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    const {handleSelected, categories, label, variant, size} = props;
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
        style={{ minWidth: 180 }}
        disabled={disabled}
        renderInput={(params) => 
            <TextField
                variant={variant ? variant : "standard"}
                size={size ? size : "small"}
                onChange={handleSelect({...params.inputProps})} {...params} label={label} 
            />
        }
        />:
        <Autocomplete
        id={label}
        options={[]}
        style={{ minWidth: 180 }}
        disabled={disabled}
        renderInput={(params) => 
            <TextField 
                variant={variant ? variant : "standard"}
                size={size ? size : "small"}
                onChange={handleSelect({...params.inputProps})} {...params} label={label} 
            />
        }
        /> 
    } 
    </>
  );
}
