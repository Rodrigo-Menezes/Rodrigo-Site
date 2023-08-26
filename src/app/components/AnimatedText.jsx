"use client";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  whileInView: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y:50
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AnimatedText({
  text,
  className = "",
  targetWord,
  targetColor,
}) {
  return (
    <div className="mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-light  font-black capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        whileInView="whileInView"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className={`inline-block ${word === targetWord ? targetColor : ""}`}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}