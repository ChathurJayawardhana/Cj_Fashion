import React from 'react'
import { CarouselProvider, Slider, Slide, } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import ImageUrl1 from "../../images/home/carasoul/carasole1.jpg"
import ImageUrl2 from "../../images/home/carasoul/carasole2.webp"
import ImageUrl3 from "../../images/home/carasoul/carasole3.webp"
import ImageUrl4 from "../../images/home/carasoul/carasole4.webp"
import ImageUrl5 from "../../images/home/carasoul/carasole5.jpg"
import ImageUrl6 from "../../images/home/carasoul/carasole6.jpg"
import ImageUrl7 from "../../images/home/carasoul/carasole7.jpeg"
import SliderComponent from '../../component/home/carasoul/SliderComponent';


export default function CarasoulLaout() {
   
    const carasoleImages = [
        ImageUrl1,
        ImageUrl2,
        ImageUrl3,
        ImageUrl4,
        ImageUrl5,
        ImageUrl6,
        ImageUrl7 
    ];

  return (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={carasoleImages.length}
      >
        <Slider>
            {carasoleImages.map((val,key)=>{
                return(
                    <Slide index={key} key={key}>
                        <SliderComponent ImageUrl={val}/>
                        </Slide>
                )
            })}
          
          
        </Slider>
       
      </CarouselProvider>
  )
}
