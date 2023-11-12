import React from 'react'
import Commonlayout from '../common/Commonlayout'
import { Grid } from '@mui/material'
import ProductList from './productlist/ProductList'

export default function AllItemLayout() {
  const [productlist,setProductlist] = React.useState([]);
/*
  {
    productName : "product 0",
    productType :"dress5",
    price:"8400",
    size:["xs","sm","L"],
    images:[0,2],
    description:"This is the description of above product",
    availbleqty:1000,
    sku : "SKU001",
  },*/

  React.useEffect(()=>{
    let tempProductlist = [];


    for(let i=0;i<100;i++){
      
      let randType1 = Math.round(Math.random()*100)%5;
      let randType2 = Math.round(Math.random()*100)%5;
      let randType3 = Math.round(Math.random()*100)%5;

      let tempProduct = {
         productName : `Product ${i+1}`,
         description:`This is the description ${i+1} of above product`,
         price : (Math.floor(Math.randam()*(100-4))+5)*100,
      };
      console.log(tempProduct);
    }
  },[])
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
