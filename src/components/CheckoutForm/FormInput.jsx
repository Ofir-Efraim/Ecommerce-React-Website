import React from 'react';
import { TextField, Grid} from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
 
const FormInput = ({ name, label, text}) => {
    const { control } = useFormContext();
  return(
    <Grid item xs={12} sm={6} >
        <Controller
         render={({ field }) => <TextField {...field} 
         name={name}
         control={control}
         label={label}
         fullWidth
         required
         value={text}
       />}
        />    
    </Grid>

  )
};

export default FormInput;
