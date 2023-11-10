import React from 'react'
import Singlecartitem from './cartitemlist/Singlecartitem'

const cartItemData = {
  product : {
    productName : "product 0",
    productType :"dress5",
    price:"8400",
    size:["xs","sm","L"],
    images:[0,2],
    description:"This is the description of above product",
    availbleqty:1000,
    sku : "SKU001",
  },
  order:{
    qty:10,
    size:"M",
  },
} ;

export default function Cartitemlist() {
  return (
    <div>
      <Singlecartitem cartItem={cartItemData}/>
    </div>
  )
}
