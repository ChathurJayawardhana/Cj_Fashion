import React from 'react'
import { Typography } from '@mui/material'
import { priceValuFormat } from '../../../util/util'

export default function Cartproductdetails({name,sku,description, type,price}) {
  return (
    <div style={{textAlign:"left"}}>
        <Typography>
            <span style={{fontWeight:"bold",fontSize:"25px"}}>
          {name}
            </span>
             -SKU:{sku}</Typography>
           <Typography>
            {description}
           </Typography>
           <Typography>Product type: {type} </Typography>
           <Typography>Product Price:{priceValuFormat(price)}</Typography>
    </div>
  )
}
