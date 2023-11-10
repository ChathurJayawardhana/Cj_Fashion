import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import Cartproductimage from '../../../../component/cart/cartitem/Cartproductimage'
import Cartproductdetails from '../../../../component/cart/cartitem/Cartproductdetails'
import Cartoderdetails from '../../../../component/cart/cartitem/Cartoderdetails'
import Removebutton from '../../../../component/cart/cartitem/Removebutton'

export default function Singlecartitem({cartItem}) {

  const {product,order } = cartItem
  const {productName ,productType, price, description, availbleqty,sku} = product;
  const {size,qty} = order;
  return (
    <div>
      <Grid container justifyContent={'space-between'}>
         <Grid item>
          <Cartproductimage/>
            </Grid>
         <Grid item>
           <Cartproductdetails 
           name={productName} 
           sku={sku}
           description={description}
           type={productType}
           price = {price}
        
           />
            </Grid>
         <Grid item>
          <Cartoderdetails size = {size} qty= {qty} price={price}/>
            </Grid>
         <Grid item>
           <Removebutton/>
         </Grid>

      </Grid>
      <hr/>
    </div>
  )
}
