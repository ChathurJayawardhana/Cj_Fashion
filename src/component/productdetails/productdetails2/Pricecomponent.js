import React from 'react'
import { priceValuFormat } from '../../../util/util'

export default function Pricecomponent({value,isBlack}) {
  return (
    <p style={{
      color:isBlack ? "Black" : "red",
      fontSize:"25px",
      fontWeight:"bold"
    }}>
   {priceValuFormat(value)}
    </p>
  )
}
