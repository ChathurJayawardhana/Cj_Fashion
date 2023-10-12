import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLink({text,link}) {
  return (
    <div>
       <Link to={link} style={{color:"white",textDecoration:"none"}}>
               {text.toUpperCase()}
            </Link>
    </div>
  )
}
