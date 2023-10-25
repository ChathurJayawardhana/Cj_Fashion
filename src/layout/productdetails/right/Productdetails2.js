import React from 'react'
import { 
  ProductNamecomponent, 
  Ratingcomponent,
  Pricesection,
  Description,
  Sizeselect
 } from "../../../component/productdetails/productdetails2/Productdetail"

export default function Productdetails2() {
  return (
    <div style={{padding:"10px"}}>
    <ProductNamecomponent name={"product_0"} type={"Tshirt"} isInStock={1}/>
    <div style={{float:"left"}}>
    <Ratingcomponent/>
    </div>
    <br/> <br/>
    <div  style={{float:"left"}} >
    <Pricesection value={"1400"}/>
    </div>
    <br/><br/>
    <div style={{marginTop:"12px",float:"left"}}>
      <Description description = { "this is the moden T shirt design "}/>
    </div>
    <br/><br/>
    <div style={{marginTop:"12px",float:"left"}}>
      <Sizeselect/>
    </div>
    </div>
  )
}
