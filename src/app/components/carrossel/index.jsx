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
import Image from "next/image";
import cafedavinci from "../../../../public/cafe-davinci.png";
import marcioartesanatos from "../../../../public/marcio-artesanatos.png";
import lavanderiamundial from "../../../../public/lavanderia-mundial.png";

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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper !w-[1200px] h-auto flex justify-center items-center rounded mt-20"
        style={{
          // Adicione o estilo inline para alterar a cor da bolinha de paginação
          "--swiper-pagination-color": "#ff0048", // Troque "red" pela cor que você deseja
        }}
      >
        <SwiperSlide className="pb-10 !flex flex-col !justify-center !items-center">
          <Image
            src={cafedavinci}
            className="w-[700px] h-96 rounded"
          />
          <div className="bg-black/40 backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2 w-full">
            <p className="text-center text-white font-bold text-base p-5 drop-shadow-dark">
            Site desenvolvido em Nextjs e Tailwind.CSS para cafeteria Da Vinci.{" "}
            </p>

            <motion.a
              href="https://construcao-hazel.vercel.app/"
              target="_blank"
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
          <Image
            src={marcioartesanatos}
            className="rounded w-[700px] h-96"
          />
          <div className="bg-black/40 backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2">
          <p className="text-center text-white font-bold text-base p-5 drop-shadow-dark">
              E-commerce de uma loja de brinquedos artesanais, desenvolvido em Next.js e Tailwind.CSS .{" "}
            </p>

            <motion.a
              href="https://construction-bay.vercel.app/"
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
          <Image
            src={lavanderiamundial}
            className="w-[700px] h-96 rounded"
          />
          <div className="bg-black/40 w-full backdrop-blur-md rounded flex flex-col justify-center items-center absolute bottom-10 pb-2">
          <p className="text-center text-white font-bold text-base p-5 drop-shadow-dark">
             Landing Pagem para um lanvandeira, desenvolvido em Next.js e Tailwind.CSS{" "}
            </p>

            <motion.a
              href="https://site-sage-chi.vercel.app/"
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
