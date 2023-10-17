import React from 'react'

export default function ProductSizebox({size , isAvailable }) {
  return (
    <div style={{
        textTransform:"uppercase",
        border:"2px solid gray",
        borderRadius:"12px",
        color: isAvailable ? "white" : "gray",
        backgroundColor: isAvailable ? "black" : "white",
        }}>
      {size}
    </div>
  )
}
