import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Cartproductimage from '../../../../component/cart/cartitem/Cartproductimage'
import Cartproductdetails from '../../../../component/cart/cartitem/Cartproductdetails'
import Cartoderdetails from '../../../../component/cart/cartitem/Cartoderdetails'
import Removebutton from '../../../../component/cart/cartitem/Removebutton'

export default function Singlecartitem() {
  return (
    <div>
      <Grid container justifyContent={'space-between'}>
         <Grid item>
          <Cartproductimage/>
            </Grid>
         <Grid item>
           <Cartproductdetails/>
            </Grid>
         <Grid item>
          <Cartoderdetails/>
            </Grid>
         <Grid item>
           <Removebutton/>
         </Grid>

      </Grid>
    </div>
  )
}
