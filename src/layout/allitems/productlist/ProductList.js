import React from 'react'
import { Grid } from '@mui/material'
import SingleProduct from '../../../component/productList/SingleProduct'

const products = [
  {
    productName : "product 0",
    productType :"dress5",
    price:"8400",
    size:["xs","sm","L"],
    images:[0,2],
    description:"This is the description of above product",
    availbleqty:1000,
    sku : "SKU001",
  },
 
];

export default function ProductList() {
  return (
    <div>
      
      <Grid container>
        {products.map((val,key)=>{
          return(
            <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
         <SingleProduct product={val}/>
          </Grid>
          );
        })}
        
       
      </Grid>
    </div>
  )
}
