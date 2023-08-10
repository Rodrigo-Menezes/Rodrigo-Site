"use client";

import AnimatedImage from "./components/AnimatedImage";

import Layout from "./components/Layoyt";
import { motion } from "framer-motion";
import TransitionEffect from "../app/components/TransitionEffect";

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
    <div className=" flex flex-col justify-center items-center w-full p-1 pt-44 sm:pt-10 ">
      <TransitionEffect />
      <div className=" flex flex-col justify-center items-center">
        <AnimatedImage className="drop-shadow-dark absolute" />
        <p className="text-white pt-10 text-center font-bold md:text-sm md:my-10">
          Maximize suas vendas com nossa landing page de alta conversão.
          Destaque-se e conquiste clientes agora!
        </p>

        <motion.a
          href="#"
          variants={image}
          initial="initial"
          animate="animate"
          class="relative px-6 py-2 group m-20 md:mb-20"
        >
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-light border-2 border-black group-hover:bg-primary"></span>
          <span class="relative text-black group-hover:text-white font-bold">
            {" "}
            Entre em contato
          </span>
        </motion.a>
      </div>
    </div>
  );
}
