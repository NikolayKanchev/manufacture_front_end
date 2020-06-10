import React, { useRef } from 'react';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    const {handleSelected, categories, label, variant, size} = props;
    
    let selectedCategory = useRef();
    let disabled = false;    

    if (categories === undefined && (label === "Sub Category" || label === "Product")){
        disabled = true;
    }

  return (
    <>
      {categories !== undefined ? 
        <Autocomplete
        id={label}
        options={categories}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
            if(value){
                if (selectedCategory.current !== value.id){                                  
                    handleSelected(value);
                    selectedCategory.current = value.id;
                }
            }
            
        }}
        getOptionSelected={(option, value) => option.id === value.id}
        style={{ minWidth: 180 }}
        disabled={disabled}
        renderInput={(params) => 
            <TextField
                variant={variant ? variant : "standard"}
                size={size ? size : "small"}
                {...params} 
                label={label} 
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
                {...params} 
                label={label}  
            />
        }
        /> 
    } 
    </>
  );
}
