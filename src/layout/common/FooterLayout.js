import React from 'react'
import {  isBrowser, isMobile } from 'react-device-detect';
import Needdailog from '../../component/common/footer/Needdailog';

export default function FooterLayout() {
  return (
    <div 
    style={{
      backgroundColor:"teal" , 
      display:"flex" ,
      justifyContent:"space-between",
      alignContent:"center",
      alignItems:"center",
      marginTop:"20px",
      position:"fixed",
      width:"100%",
      bottom:0,
      
     
      }}>
 
       <div style={{display:"flex",justifyContent:"space-between"}}>
       <small>copyright {new Date().getFullYear()} chathura</small>
        {isMobile ? 
        ( 
         <div style={{display:"flex",flexDirection:"row",fontSize:"10px"}}>
          <span>Photo by_</span>
          <a
          style={{color:"white",textDecoration:"none"}}
          href='#'>Kalani Samandika</a>
      </div>
      ) 

        : ("")
        } 

        {isBrowser && (
          <div style={{display:"flex",flexDirection:"row",fontSize:"10px"}}>
          <span>Photo by_</span>
          <a
          style={{color:"white",textDecoration:"none"}}
          href='#'>Kalani Samandika</a>
      </div>
        )}

      <div>
      <button variant="contained"
         style={{
          borderRadius:"20px"
         }}
      ><Needdailog/></button>
      </div>
     
    </div>
    </div>
  )
}
