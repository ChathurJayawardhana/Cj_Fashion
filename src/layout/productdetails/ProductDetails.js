import React from 'react'
import Commonlayout from '../common/Commonlayout'
import { Grid, Typography } from '@mui/material'
import ImageSlider from './left/ImageSlider'
import img01 from "../../images/productimages/img 01.jpg";
import img101 from "../../images/productimages/img 101.jpg";
import Productdetails2 from './right/Productdetails2';
import { useSelector } from 'react-redux';

const product = {
  productName : "product 0",
  productType :"dress5",
  price:"8400",
  size:["xs","sm","L"], 
  images:[0,2],
  description:"This is the description of above product",
  availbleqty:1000,

 
}

export default function ProductDetails() {

   const productState = useSelector((state) => state.productReducer);

   const {selectedProduct} = productState;

   console.log(selectedProduct);


  return (
    <div>
      <Commonlayout>
        <div style={{
          border:"4px solid teal",
          marginTop:"20px",
          borderRadius:"8px",
          marginLeft:"20px",
          marginRight:"20px",
          padding:"20px"
          }}>
            <Grid container spacing={3} alignContent='center'>
                <Grid item xs={12} md={6} lg={4}>
                 <ImageSlider images = {[img01,img101]}/>
                </Grid>

                <Grid item xs={12} md={6} lg={8}>
                         <Productdetails2 product={selectedProduct}/>
                         <hr style={{marginTop:"-5px"}}/>
                         <Typography style={{color:"gray",textAlign:"left",}}>
                          Note:This is the product 0 if you want this pls add to cart
                         </Typography>
                   </Grid>
            </Grid>
        </div>
      </Commonlayout>
    </div>
  )
}
