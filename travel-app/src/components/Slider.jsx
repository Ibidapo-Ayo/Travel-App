import React, {useState} from 'react';
import './styles/slider.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { CategoryImg } from './data/CategoryImg';


function Slider() {

    return (
        <>
        <div className="container mt-5 mb-5">
        <h1 className="categories mb-5 mobile-none">Categories</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {
            CategoryImg.map((imgUrl, index) =>(
            <SwiperSlide key={index} className='mobile-none'>
          <div className="col-md-9 scale-1">
            <img src={imgUrl.imgUrl} alt=""/>
            </div>
          </SwiperSlide>
            ))}
        
        </Swiper>
        </div>
       
      </>
    )
}

export default Slider
