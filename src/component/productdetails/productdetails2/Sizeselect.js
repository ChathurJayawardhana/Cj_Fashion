import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Sizebox from './selectsize/Sizebox';

export default function Sizeselect({size}) {
  return (
    <FormControl>
      <FormLabel style={{float:"left"}} >Availbale Size</FormLabel>
      <RadioGroup  row  >
        {size.map((val,key)=>{
          return(
            <FormControlLabel key={key} value={val} control={<Radio />}
            label={<Sizebox value={val}/>}
             />
          )
        })};
      
   
      </RadioGroup>
    </FormControl>
  );
}
