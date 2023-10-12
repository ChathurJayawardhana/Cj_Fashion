import React from 'react'
import HeaderLayout from './HeaderLayout'
import FooterLayout from './FooterLayout'

export default function Commonlayout({children}) {
  return (
    <div>
      <HeaderLayout/>
      {children}
      <FooterLayout/>
    </div>
  )
}

