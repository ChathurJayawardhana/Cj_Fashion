import React from 'react'
import img01 from '../../../images/productimages/img 01.jpg';
import img02 from '../../../images/productimages/img 02.jpg';
import img011 from '../../../images/productimages/img 011.jpg';
import img022 from '../../../images/productimages/img 022.jpg';

const imageArray = [img01,img02,img011,img022];

export default function Productimage({images}) {
    const [imgSrc,setImgSrc] = React.useState(imageArray[images[0]]);
  return (
    <div style={{width:"100%",textAlign:"center"}}>
      <img src={imgSrc}
      style={{width:"100%",height:"auto",borderRadius:"25px",objectFit:"contain",padding:"20px"}}
      onMouseOver={()=>setImgSrc(imageArray[images[1]])}
      onMouseOut={()=>setImgSrc(imageArray[images[0]])}
      />
      
    </div>
  )
}
