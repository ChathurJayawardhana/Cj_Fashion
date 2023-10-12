import React from 'react'
import Commonlayout from '../common/Commonlayout'
import { Grid } from '@mui/material'
import ProductList from './productlist/ProductList'

export default function AllItemLayout() {
  return (
    <Commonlayout>
      <Grid container>
          <Grid item xs={12} md={2}>
             Filter
          </Grid>
          <Grid item xs={12} md={10}>
            <ProductList/>
          </Grid>
      </Grid>

    </Commonlayout>
   
  )
}
