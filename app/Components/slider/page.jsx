"use client"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectCoverflow } from 'swiper/modules';

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
      modules={[EffectCoverflow,Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      effect={'coverflow'}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
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
