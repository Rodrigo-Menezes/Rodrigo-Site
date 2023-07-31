"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const image = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function App() {
  return (
    <motion.div
      variants={image}
      initial="initial"
      animate="animate"
    >

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[1200px] flex justify-center items-center rounded-xl py-10"
      >
        <SwiperSlide className=' w-full pb-10 relative'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full rounded-xl' />
          <p className='text-light text-center absolute bottom-16 bg-dark/25 text-sm p-2 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestiae dolore ratione dolores beatae fuga aliquid ipsa eius. Optio ipsam quam dolorem laborum aut ut consequatur facilis earum blanditiis expedita?</p>
          <button className='flex justify-center items-center px-5 bg-primary mt-5 ml-[42%] text-light rounded-sm font-bold'>Visite</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" className='w-full rounded-xl' />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
