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

export default function Carrossel() {
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
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 190,
          depth: 145,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper !w-[1000px] h-auto flex justify-center items-center rounded-xl py-10 "
        style={{
          // Adicione o estilo inline para alterar a cor da bolinha de paginação
          "--swiper-pagination-color": "#ff0048", // Troque "red" pela cor que você deseja
        }}
      >

        <SwiperSlide className='pb-10 !flex flex-col !justify-center !items-center'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full rounded-xl' />
          <div className='bg-dark/30 flex flex-col justify-center items-center absolute bottom-10 pb-2'>
            <p className='text-center text-light text-sm p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptatem sapiente veniam rerum aspernatur. </p>
            <button className='bg-dark hover:bg-primary rounded-md transition ease-in-out duration-300 shadow-md text-light font-bold mt-5   shadow-black px-5 py-2'>Visite o Site</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pb-10 !flex flex-col !justify-center !items-center'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full rounded-xl' />
          <div className='bg-dark/30 flex flex-col justify-center items-center absolute bottom-10 pb-2'>
            <p className='text-center text-light text-sm p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptatem sapiente veniam rerum aspernatur. </p>
            <button className='bg-dark hover:bg-primary rounded-md transition ease-in-out duration-300 shadow-md text-light font-bold mt-5   shadow-black px-5 py-2'>Visite o Site</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pb-10 !flex flex-col !justify-center !items-center'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full rounded-xl' />
          <div className='bg-dark/30 flex flex-col justify-center items-center absolute bottom-10 pb-2'>
            <p className='text-center text-light text-sm p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptatem sapiente veniam rerum aspernatur. </p>
            <button className='bg-dark hover:bg-primary rounded-md transition ease-in-out duration-300 shadow-md text-light font-bold mt-5   shadow-black px-5 py-2'>Visite o Site</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pb-10 !flex flex-col !justify-center !items-center'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full rounded-xl' />
          <div className='bg-dark/30 flex flex-col justify-center items-center absolute bottom-10 pb-2'>
            <p className='text-center text-light text-sm p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptatem sapiente veniam rerum aspernatur. </p>
            <button className='bg-dark hover:bg-primary rounded-md transition ease-in-out duration-300 shadow-md text-light font-bold mt-5   shadow-black px-5 py-2'>Visite o Site</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='pb-10 !flex flex-col !justify-center !items-center'>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" className='w-full rounded-xl' />
          <div className='bg-dark/30 flex flex-col justify-center items-center absolute bottom-10 pb-2'>
            <p className='text-center text-light text-sm p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eum voluptatem sapiente veniam rerum aspernatur. </p>
            <button className='bg-dark hover:bg-primary rounded-md transition ease-in-out duration-300 shadow-md text-light font-bold mt-5   shadow-black px-5 py-2'>Visite o Site</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
