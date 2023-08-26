"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

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
    <motion.div variants={image} initial="initial" animate="animate">
      <Swiper
        effect={"coverflow"}
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
        className="mySwiper !w-[800px] h-auto flex justify-center items-center rounded mt-20"
        style={{
          // Adicione o estilo inline para alterar a cor da bolinha de paginação
          "--swiper-pagination-color": "#ff0048", // Troque "red" pela cor que você deseja
        }}
      >
        <SwiperSlide className="pb-10 !flex flex-col !justify-center !items-center">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full rounded"
          />
          <div className="bg-light/20 backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2">
            <p className="text-center text-light text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eum voluptatem sapiente veniam rerum aspernatur.{" "}
            </p>

            <motion.a
              href="#"
              variants={image}
              initial="initial"
              animate="animate"
              class="relative w-[25%] px-6 py-2 group text-center"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
              <span class="relative text-black group-hover:text-white font-bold">
                {" "}
                Visite
              </span>
            </motion.a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10 !flex flex-col !justify-center !items-center">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full rounded"
          />
          <div className="bg-light/20 backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2">
            <p className="text-center text-light text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eum voluptatem sapiente veniam rerum aspernatur.{" "}
            </p>
            <motion.a
              href="#"
              variants={image}
              initial="initial"
              animate="animate"
              class="relative w-[25%]  px-6 py-2 group text-center"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
              <span class="relative text-black group-hover:text-white font-bold">
                {" "}
                Visite
              </span>
            </motion.a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10 !flex flex-col !justify-center !items-center">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full rounded"
          />
          <div className="bg-light/20 backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2">
            <p className="text-center text-light text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eum voluptatem sapiente veniam rerum aspernatur.{" "}
            </p>
            <motion.a
              href="#"
              variants={image}
              initial="initial"
              animate="animate"
              class="relative w-[25%] px-6 py-2 grou text-center"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
              <span className="relative text-black group-hover:text-white font-bold">
                {" "}
                Visite
              </span>
            </motion.a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10 !flex flex-col !justify-center !items-center">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full rounded"
          />
          <div className="bg-light/20 backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2">
            <p className="text-center text-light text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eum voluptatem sapiente veniam rerum aspernatur.{" "}
            </p>
            <motion.a
              href="#"
              variants={image}
              initial="initial"
              animate="animate"
              class="relative w-[25%] px-6 py-2 group text-center"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
              <span class="relative text-black group-hover:text-white font-bold">
                {" "}
                Visite
              </span>
            </motion.a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10 !flex flex-col !justify-center !items-center">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full rounded"
          />
          <div className="bg-light/20 backdrop-blur-md rounded-lg flex flex-col justify-center items-center absolute bottom-10 pb-2">
            <p className="text-center text-light text-sm p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              eum voluptatem sapiente veniam rerum aspernatur.{" "}
            </p>
            <motion.a
              href="#"
              variants={image}
              initial="initial"
              animate="animate"
              class="relative w-[25%] px-6 py-2 group text-center"
            >
              <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
              <span class="relative text-black group-hover:text-white font-bold">
                {" "}
                Visite
              </span>
            </motion.a>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
