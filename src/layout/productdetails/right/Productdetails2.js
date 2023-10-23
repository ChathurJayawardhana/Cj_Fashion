import React from 'react'
import { 
  ProductNamecomponent, 
  Ratingcomponent,
  Pricesection,
  Description,
 } from "../../../component/productdetails/productdetails2/Productdetail"

export default function Productdetails2() {
  return (
    <div style={{padding:"10px"}}>
    <ProductNamecomponent name={"product_0"} type={"Tshirt"} isInStock={1}/>
    <div style={{float:"left"}}>
    <Ratingcomponent/>
    </div>
    <br/>
    <div>
    <Pricesection value={"1400"}/>
    </div>
    <div>
      <Description description = { "this is the moden T shirt design "}/>
    </div>
     
    </div>
  )
}
