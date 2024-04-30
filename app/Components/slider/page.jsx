"use client"
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card from '../card/page';
import { useEffect, useState } from 'react';
const Slider= () => {
  const [bannerinfo,setBannerInfo]=useState([])
  useEffect(() => {
    const spotlight=async()=>{
        let res=await fetch('http://localhost:3000/api/Banner')
        res=await res.json()
        console.log(res);
        setBannerInfo(res);
    }
  
    spotlight()

  }, [1==1])
  // console.log('API : ',process.env.NEXT_PUBLIC_API_URI);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      spaceBetween={70}
      slidesPerView={1}
      // effect={'coverflow'}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      // coverflowEffect={{
      //   rotate: 50,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 1,
      //   slideShadows: true,
      // }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      className='swiper'
    >
      
      {
        
        bannerinfo.map((info)=>{
          return <SwiperSlide key={info.bannerImage} className='slide'>
        <Card banner={info.bannerImage} description={info.description} title={info.title.native}/>
      </SwiperSlide>
      
      })
        
    }
  
      
      
     
    </Swiper>
  );
};

export default Slider
