import React from 'react'
import { Grid, Typography } from '@mui/material'

export default function Singlecartitem() {
  return (
    <div>
      <Grid container justifyContent={'space-around'}>
         <Grid item>
            <img  style={{width:"150px",borderRadius:"10px"}}
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRLVXKBAN4fOVSC0cuongelMnZKrHkswwmA&usqp=CAU'/>
            </Grid>
         <Grid item>
           <Typography>Product 03-SKU:sk-211</Typography>
           <Typography>This is the sample product description</Typography>
           <Typography>Product type FROCK</Typography>
           <Typography>Product Price LKR.8400.00</Typography>
            </Grid>
         <Grid item>order details</Grid>
         <Grid item>remove button</Grid>

      </Grid>
    </div>
  )
}
