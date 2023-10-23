import React from 'react'
import { isMobile } from 'react-device-detect'
import HeaderLayout from './HeaderLayout'
import FooterLayout from './FooterLayout'

export default function Commonlayout({children,isFromHome}) {
  return (
    <div>
      <HeaderLayout/>
      <div style={{padding: isFromHome ? "" : isMobile ? "0 4%" :"0 8%"}}>{children}</div>
      <div style={{paddingTop:"50px"}}></div>
      <FooterLayout/>
    </div>
  )
}
 
