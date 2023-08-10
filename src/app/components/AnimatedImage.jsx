"use client";
import Image from "next/image";
import logo from "../../../public/logo.png";
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

export default function AnimatedImage() {
  return (
    <motion.div
      className="w-[80%] md:w-full drop-shadow-dark"
      variants={image}
      initial="initial"
      animate="animate"
    >
      <Image src={logo} className="w-full" alt="Logo da pagina RM desenvolvedor web"
        priority
        sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,50vw"
      />
    </motion.div>
  );
}
