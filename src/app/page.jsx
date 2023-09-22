"use client";

import AnimatedImage from "./components/AnimatedImage";
import { motion } from "framer-motion";
import AnimatedText from "./components/AnimatedText";


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
    delay: 2,
  },
};

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full md:p- md:pt-10 h-[500px] md:h-screen">
      
      <div className="flex flex-col justify-center items-center">
        <AnimatedImage className="drop-shadow-dark absolute" />
        <AnimatedText text="Sou um desenvolvedor apaixonado que cria experiências incríveis tanto no frontend quanto no backend, transformando ideias em realidade digital."
        className="text-xs w-96"
        />
        <motion.a
          href="https://wa.me/5535988253492"
          target="_blank"
          variants={image}
          initial="initial"
          animate="animate"
          class="relative px-6 py-2 group mt-20 md:mt-10 md:mb-10 text-center border hover:border-primary "
        >
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0 border"></span>
          <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
          <span class="relative text-black group-hover:text-white font-bold">
            {" "}
            Entre em contato
          </span>
        </motion.a>
      </div>
    </div>
  );
}
