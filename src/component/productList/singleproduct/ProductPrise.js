import React from 'react'
import { priceValuFormat } from '../../../util/util'

export default function ProductPrise({value}) {
  return (
   <p style={{fontWeight:"bold"}}>
   {
   priceValuFormat(value)
   }
   </p>
      
  )
}
