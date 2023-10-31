import React from 'react'
import { Grid } from '@mui/material';
import { 
  ProductNamecomponent, 
  Ratingcomponent,
  Pricesection,
  Description,
  Sizeselect,
  AddtoCart
 } from "../../../component/productdetails/productdetails2/Productdetail"
import Qtyselect from './Poductdetails/Qtyselect';

export default function Productdetails2({product}) {
  const { productName,productType,price, size,  availbleqty,description} =product;
  return (
    <div style={{padding:"10px"}}>
    <ProductNamecomponent name={productName} type={productType} isInStock={ availbleqty>1}/>
    <div style={{float:"left"}}>
    <Ratingcomponent/>
    </div>
    <br/> <br/>
    <div  style={{float:"left"}} >
    <Pricesection value={price}/>
    </div>
    <br/><br/>
    <div style={{marginTop:"12px",float:"left"}}>
      <Description description = {description}/>
    </div>
    <br/><br/>
    <div style={{marginTop:"12px",float:"left"}}>
      <Sizeselect size= {size}/>
    </div>
    <br/><br/><br/>
    <hr/>
    <br/><br/>
    <Qtyselect productprize={price}/>
    <div style={{marginTop:"15px"}}>
      <Grid container justifyContent={"flex-end"} >
        <Grid item>
        <AddtoCart productName={productName}/>
        </Grid>

      </Grid>
   
    </div>
    
    </div>
  )
}
