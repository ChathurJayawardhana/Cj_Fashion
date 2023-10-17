import React from 'react'
import img01 from '../../../images/productimages/img 01.jpg';
import img02 from '../../../images/productimages/img 02.jpg';

export default function Productimage({images}) {
    const [imgSrc,setImgSrc] = React.useState(images[0]);
  return (
    <div style={{width:"100%",textAlign:"center"}}>
      <img src={img01} 
      style={{width:"100%",height:"auto",borderRadius:"25px",objectFit:"contain",padding:"20px"}}
      onMouseOver={()=>setImgSrc(images[1])}
      onMouseOut={()=>setImgSrc(images[0])}
      />
      
    </div>
  )
}
