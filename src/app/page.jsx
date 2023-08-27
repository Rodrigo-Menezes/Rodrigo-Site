"use client";

import AnimatedImage from "./components/AnimatedImage";
import { motion } from "framer-motion";
import TransitionEffect from "../app/components/TransitionEffect";
import AnimatedText from "./components/AnimatedText";
import Image from "next/image";
import cara from "../../public/h.jpg"
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
    <div className="flex justify-center items-center w-full md:p- md:pt-10 h-screen">
      
      <div className="flex flex-col justify-center items-center">
        <AnimatedImage className="drop-shadow-dark absolute" />

        <AnimatedText className="text-white text-center font-bold text-xl md:text-sm md:my-10"
          text="Maximize suas vendas com nossa landing page de alta conversão.
        Destaque-se e conquiste clientes agora!"
        />

        <motion.a
          href="#"
          variants={image}
          initial="initial"
          animate="animate"
          class="relative px-6 py-2 group mt-20 md:mt-10 md:mb-10 text-center"
        >
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
          <span class="relative text-black group-hover:text-white font-bold">
            {" "}
            Entre em contato
          </span>
        </motion.a>
      </div>
      <div className=" w-1/2 h-screen -mt-10 ">
        <Image src={cara} alt="Foto de perfil de Rodrigo Menezes" className="opacity-70 absolute -z-10 right-0 w-1/2 h-screen drop-shadow-dark2"/>
      </div>
    </div>
  );
}
