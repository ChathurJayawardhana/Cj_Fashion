import { Typography,Grid } from '@mui/material'
import React from 'react'


export default function ProductNamecomponent({name,type}) {
  return (
    <Grid container>
      <Grid item xs={10}>
      <Typography style={{fontWeight:"500", fontSize:'30px',textAlign:"left"}}>
      {name} <span> {type} </span>
     </Typography>
      </Grid>

      <Grid item xs={2}>

      </Grid>
    
    </Grid>
  )
}
