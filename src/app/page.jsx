"use client";

import AnimatedImage from "./components/AnimatedImage";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layoyt";
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

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center w-full min-h-screen">
      <Layout className=" flex flex-col justify-center items-center pt-0 pb-0">
        {/*  <AnimatedText
          className="text-light/60 text-xl flex justify-start font-light w-96"
          text="Eu sou"
        /> 
        <AnimatedText
          className="drop-shadow-dark text-[300px] text-light"
          text="RM"
          targetColor="text-p"
          targetWord=""
        />
        <AnimatedText
          className="text-light text-5xl tracking-widest flex justify-center font-bold "
          text="Desenvolvedor Web"
          targetWord="Web"
          targetColor="text-primary font-light bg-transparent client drop-shadow-dark"
        />
        <AnimatedText
          className="text-light/60 text-xl flex tracking-widest justify-center font-light w-96"
          text="React / Next"
        /> */}
        <AnimatedImage className="drop-shadow-dark bg-red-600" />
        <AnimatedText
          className="!w-[645px]  text-lg pt-10 text-light/75"
          text="Descubra a magia do desenvolvimento web com React.js e Next.js: Experiências de usuário incríveis e desempenho imbatível, tudo em uma só plataforma!"
          targetColor="text-p"
          targetWord=""
        />
        <motion.a id="link" href="#"
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
