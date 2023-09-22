"use client";
import TransitionEffect from "../components/TransitionEffect";
import Carrossel from "../components/carrossel";
import Image from "next/image";
import cafedavinci from "../../../public/cafe-davinci.png";
import marcioartesanatos from "../../../public/marcio-artesanatos.png";
import lavanderiamundial from "../../../public/lavanderia-mundial.png";
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

export default function Projetos() {
  return (
    <div className="flex justify-center items-center md:h-screen">
      <TransitionEffect />
      <div className="hidden md:block">
        <Carrossel />
      </div>

      <div className="md:hidden"> 
        <div className="flex flex-col justify-center items-center">
          <Image src={cafedavinci} className="w-auto h-44 rounded" />
          <div className=" rounded flex flex-col justify-center items-center     w-full">
            <p className="text-center text-white font-bold text-base p-5 drop-shadow-dark">
              Site desenvolvido em Nextjs e Tailwind.CSS para cafeteria Da
              Vinci.{" "}
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
        </div>
        <div className="flex flex-col justify-center items-center my-10">
          <Image src={marcioartesanatos} className="w-auto h-44 rounded" />
          <div className=" rounded flex flex-col justify-center items-center     w-full">
            <p className="text-center text-white font-bold text-base p-5 drop-shadow-dark">
              Site desenvolvido em Nextjs e Tailwind.CSS para Marcio Artesanatos.{" "}
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
        </div>
        <div className="flex flex-col justify-center items-center pb-10">
          <Image src={lavanderiamundial} className="w-auto h-44 rounded" />
          <div className=" rounded flex flex-col justify-center items-center     w-full">
            <p className="text-center text-white font-bold text-base p-5 drop-shadow-dark">
              Site desenvolvido em Nextjs e Tailwind.CSS para Lavanderia Mundial.{" "}
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
        </div>
      </div>
    </div>
  );
}
