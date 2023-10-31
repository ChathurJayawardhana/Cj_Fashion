import { Grid, Typography } from '@mui/material'
import React from 'react'
import Qtyselectsection from '../../../../component/productdetails/productdetails2/qtyselect/Qtyselectsection'
import Pricecomponent from '../../../../component/productdetails/productdetails2/Pricecomponent';

export default function Qtyselect({productprize}) {
  const [qty,setQty] = React.useState(1);
  return (
    <div style={{marginTop:"-50px"}}>
     <Typography style={{float:"left"}}>QTY Of the selected Style</Typography>
    <Grid container>
        <Grid item xs={12} md={6}> 
           <Qtyselectsection qty={qty} setQty={setQty}/>
        </Grid>
        <Grid item xs={12} md={6}>
            <Grid container justifyContent={"flex-end"} >
                <Grid item>
                  <Pricecomponent value={qty*productprize} isBlack/></Grid>
            </Grid>
          
        </Grid>

    </Grid>
    </div>
  )
}
