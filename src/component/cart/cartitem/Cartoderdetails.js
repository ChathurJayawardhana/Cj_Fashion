
import React from 'react'
import { Typography } from '@mui/material'
import { priceValuFormat } from '../../../util/util'

export default function Cartoderdetails({size,qty,price}) {
  return (
    <div style={{textAlign:"left"}}>
       <Typography>Order Details</Typography>
           <Typography>Size:{size}</Typography>
           <Typography>QTY:{qty}</Typography>
           <Typography>{priceValuFormat(qty*price)}</Typography>
    </div>
  )
}
