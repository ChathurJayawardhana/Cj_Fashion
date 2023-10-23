import { Typography,Grid,Chip } from '@mui/material'
import React from 'react'


export default function ProductNamecomponent({name,type,isInStock}) {
  return (
    <Grid container>
      <Grid item xs={10}>
      <Typography style={{fontWeight:"500", fontSize:'30px',textAlign:"left",color:"teal"}}>
      {name} <span> {type} </span>
     </Typography>
      </Grid>

      <Grid item xs={2}>
         <Chip
         label = {isInStock ? "In-Stok" : "Out Stock"}
         style={{
          color:"white",
          backgroundColor: isInStock ? "green" : "red",
          fontWeight:"bold"
        }}
         />
      </Grid>
    
    </Grid>
  )
}
