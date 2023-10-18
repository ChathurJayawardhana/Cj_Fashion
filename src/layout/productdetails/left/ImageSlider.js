import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SingleImage from '../../../component/productdetails/imageslider/SingleImage';


export default function ImageSlider() {
  return (
    <div>
       <Swiper
     modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
         <SingleImage/>
      </SwiperSlide>
      <SwiperSlide>
      <SingleImage/>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}
