import React from 'react'

export default function Sizebox({value}) {
  return (
    <div
         style={{
          border:"2px solid green",
          borderRadius:"7px",
          padding:"3px",
          width:"40px",
          backgroundColor:"#afd7af",
          textAlign:"center"
         }}
         >{value}</div>
  )
}
