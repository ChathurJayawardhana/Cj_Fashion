import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SingleImage from '../../../component/productdetails/imageslider/SingleImage';
import { useMediaQuery } from '@mui/material';



export default function ImageSlider({images}) {

  const maxwidth1336 = useMediaQuery("(max-width:1336)");
  return (
    <div>
       <Swiper
     modules={[ Pagination]}
      spaceBetween={maxwidth1336 ? 25 : 20}
      slidesPerView={1}
      pagination={{ clickable: true }}
    > 
    {images.map((val,key) => {
      return(
        <SwiperSlide 
        style={{width: maxwidth1336 ? "450px" : "400px",
        height:"450px"}} key={key} >
        <SingleImage smallImage={val} largeImage={val}/>
     </SwiperSlide>
      );
    })}
      
    </Swiper>
    </div>
  )
}
