import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SingleImage from '../../../component/productdetails/imageslider/SingleImage';
import img01 from "../../../images/productimages/img 01.jpg";
import img011 from "../../../images/productimages/img 011.jpg";


export default function ImageSlider() {
  return (
    <div>
       <Swiper
     modules={[ Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
         <SingleImage smallImage={img01} largeImage={img01}/>
      </SwiperSlide>
      <SwiperSlide>
      <SingleImage smallImage={img011} largeImage={img011}/>
      </SwiperSlide>
     
    </Swiper>
    </div>
  )
}
