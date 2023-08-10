"use client";

import AnimatedImage from "./components/AnimatedImage";

import Layout from "./components/Layoyt";
import { motion } from "framer-motion";
import TransitionEffect from "../app/components/TransitionEffect"




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
      delay: 0.5,
    },
    delay: 2,
  },
};

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center w-full p-10 pt-44 sm:pt-10 ">

   <TransitionEffect/>
      <div className="!p-0 md:p-32 flex flex-col justify-center items-center">
        <AnimatedImage className="drop-shadow-dark absolute" />
        <p className="text-white pt-10 font-bold">Maximize suas vendas com nossa landing page de alta conversão. Destaque-se e conquiste clientes agora!</p>

        <motion.a id="link" href="#" className="bg-light/5 shadow-lg shadow-black "
          variants={image}
          initial="initial"
          animate="animate"
        >
          <span id="spa"></span>
          <span id="spa"></span>
          <span id="spa"></span>
          <span id="spa"></span>
          Entre em Contato
        </motion.a>
      </div>

    </div>
  );
}
