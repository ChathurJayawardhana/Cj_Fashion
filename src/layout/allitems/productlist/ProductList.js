import React from 'react'
import { Grid } from '@mui/material'
import SingleProduct from '../../../component/productList/SingleProduct'

export default function ProductList() {
  return (
    <div>
      
      <Grid container>
        <Grid item xs={12} sm={6} md={4} lg={3}>
         <SingleProduct/>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleProduct/>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleProduct/>
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
        <SingleProduct/>
          </Grid>

      </Grid>
    </div>
  )
}
