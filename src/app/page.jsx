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
    <div className=" flex flex-col justify-center items-center w-full">

   <TransitionEffect/>
      <Layout className=" flex flex-col justify-center items-center pt-0 pb-0">

        <AnimatedImage className="drop-shadow-dark absolute" />

        <motion.a id="link" href="#" className="shadow-lg shadow-black"
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
      </Layout>

    </div>
  );
}
