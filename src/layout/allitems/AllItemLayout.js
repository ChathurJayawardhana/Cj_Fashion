import React from 'react';

import axios from 'axios';
import Commonlayout from '../common/Commonlayout';
import { Grid } from '@mui/material';
import ProductList from './productlist/ProductList';
//import { getProductType } from '../../util/util';
import { useDispatch, useSelector } from 'react-redux';
//import { fetchProductList, fetchProductListBegin } from '../../store/actions/productAction';

export default function AllItemLayout() {
 
 const dispatch = useDispatch();

 const productState = useSelector((store)=>store.productReducer);
 const{productListLoadingStatus,ProductList}=productState;
 
 
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


  /*
  React.useEffect(()=>{
    let tempProductlist = [];


    for(let i=0;i<100;i++){
      let image1 = Math.floor(Math.random()* 5 + 1);
      let randType1 = Math.round(Math.random()*100)%5;
      let randType2 = Math.round(Math.random()*100)%5;
      let randType3 = Math.round(Math.random()*100)%5;

      let tempProduct = {
         productName : `Product ${i+1}`,
         images : [image1, image1+100],
         productType : getProductType(image1),
         description:`This is the description ${i+1} of above product`,
         price : Math.floor(Math.randam* 96 )+5*100,
         size :
          randType1 === 0
          ? randType2 === 0 
          ? ['xs']
          : randType3 === 1
          ? ['xs','s']
          : randType3 === 2
          ? ['xs','s','m']
          : randType3 === 3
          ? ['xs','s','m','l']
          :['xs','s','m','l','xl']
        :randType1 == 1
        ?randType3 ===1 
         ? ['s']
         : randType3 === 2
         ? ['s','m']
         : randType3 === 3
         ? ['s','m','l']
         : ['s','m','l','xl']
        :randType1 === 2
        ?randType3 == 2 
          ? ['m']
          :randType3 === 3
          ? ['m','l']
          : [ 'm','l','xl']
        :randType1 === 3 
        ?randType3 === 3
          ?['l']
          : ['l','xl']
         :['xl'],   
        
         availbleqty: Math.round(Math.random()*100),
         sku :`SKU ${i+1}`,
      };
     tempProductlist.push(tempProduct);
    }
    setItemList(tempProductlist);
  },[])
  */
/* React.useEffect(()=>{
   dispatch(fetchProductListBegin());
   dispatch(fetchProductList());
 },[]);*/

  return (
    <Commonlayout>
      <Grid container>
          <Grid item xs={12} md={2}>
             Filter
          </Grid>
          <Grid item xs={12} md={10}>
          {productListLoadingStatus === "loading" ? (
           <div>Loading...</div>
          ):productListLoadingStatus === "completed" ? (
            <ProductList itemlist={ProductList}/>
          ) :productListLoadingStatus === "failuer"?(
            <div>Error</div>
          ): (
            ""
          )
        }
           
          </Grid>
      </Grid>
 
    </Commonlayout>
   
  )
}


