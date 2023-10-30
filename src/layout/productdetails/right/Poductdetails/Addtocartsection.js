import { Grid, Typography } from '@mui/material'
import React from 'react'
import Qtyselectsection from '../../../../component/productdetails/productdetails2/qtyselect/Qtyselectsection'

export default function Addtocartsection() {
  return (
    <div style={{marginTop:"-50px"}}>
     <Typography style={{float:"left"}}>QTY Of the selected Style</Typography>
    <Grid container>
        <Grid item xs={12} md={6}> 
           <Qtyselectsection/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Grid container justifyContent={"flex-end"} >
                <Grid item>Rs 14440.00</Grid>
            </Grid>
          
        </Grid>

    </Grid>
    </div>
  )
}
