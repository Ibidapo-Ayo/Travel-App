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

function Slider() {
    return (
        <>
        <div className="container">
        <h1 className="categories">Categories</h1>
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
          <SwiperSlide>
              <img src="../../src/assets/images/categories/category_1.jpg" alt=""/>
          </SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_2.png" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_3.jpg" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_4.jpg" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_5.png" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_6.jpg" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_1.jpg" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_8.png" alt=""/></SwiperSlide>
          <SwiperSlide> <img src="../../src/assets/images/categories/category_9.png" alt=""/></SwiperSlide>
        </Swiper>
        </div>
       
      </>
    )
}

export default Slider
