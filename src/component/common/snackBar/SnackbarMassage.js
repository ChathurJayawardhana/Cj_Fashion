import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({changed,message}) {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(()=>{
    if (changed>0){
      handleClickVariant("success");
    }else{
      
    }
 
  },[changed]);

  const handleClickVariant = (variant)  => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant });
  };

  return (
    <React.Fragment>
    
    </React.Fragment>
  );
}

export default function SnackbarMassage({changed,message}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp changed={changed} message={message}/>
    </SnackbarProvider>
  );
}
