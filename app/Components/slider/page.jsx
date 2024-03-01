"use client"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../card/page';

const Slider= () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='swiper'
    >
      <SwiperSlide className='slide'>
        <Card/>
      </SwiperSlide>
      <SwiperSlide className='slide'>
        <Card/>
      </SwiperSlide>
      <SwiperSlide className='slide'>
        <Card/>
      </SwiperSlide>
      <SwiperSlide className='slide'>
        <Card/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider
