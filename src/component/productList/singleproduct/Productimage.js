import React from 'react'
import img01 from '../../../images/productimages/img 01.jpg';
import img02 from '../../../images/productimages/img 02.jpg';
import img101 from '../../../images/productimages/img 101.jpg';
import img102 from '../../../images/productimages/img 102.jpg';

const imageArray = [img01,img02,img101,img102];

export default function Productimage({images}) {
    const [imgSrc,setImgSrc] = React.useState(img01);
  return (
    <div style={{width:"100%",textAlign:"center"}}>
      <img src={imgSrc}
      style={{width:"100%",height:"auto",borderRadius:"25px",objectFit:"contain",padding:"20px"}}
      onMouseOver={()=>setImgSrc(img01)}
      onMouseOut={()=>setImgSrc(img101)}
      />
      
    </div>
  )
}
