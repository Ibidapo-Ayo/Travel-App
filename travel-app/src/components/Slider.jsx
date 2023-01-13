import React from 'react';
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
        <h1 className="categories mb-5">Categories</h1>
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
            <SwiperSlide key={index}>
              <img src={imgUrl.imgUrl} alt=""/>
          </SwiperSlide>
            ))}
        
        </Swiper>
        </div>
       
      </>
    )
}

export default Slider
