import React from 'react'
import { priceValuFormat } from '../../../util/util'

export default function Pricecomponent({value}) {
  return (
    <p style={{
      color:"red",
      fontSize:"25px",
      fontWeight:"bold"
    }}>
   {priceValuFormat(value)}
    </p>
  )
}
