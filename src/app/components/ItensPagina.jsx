"use client";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedinIcon } from "./Icons";

export default function ItensPagina() {
  return (
    <div className="md:hidden">
      <div className="flex flex-col justify-center items-center fixed w-9 left-32  bottom-10 z-10 gap-5">
        <div className="w-px h-16 bg-light/70  left-4 bottom-24" />
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GitHubIcon
            className="!w-8 fill-light/75 hover:fill-primary transition ease-in-out duration-300 "
            aria-label="github"
          />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedinIcon
            className="!w-8 fill-light/75 hover:fill-light z-50"
            aria-label="github"
          />
        </motion.a>
      </div>

      <div className="flex flex-col justify-center items-center fixed w-9 right-32  bottom-10 z-10 gap-5">
        <div className="w-px h-16 bg-light/70  left-4 bottom-24" />
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GitHubIcon
            className="!w-8 fill-light/75 hover:fill-primary transition ease-in-out duration-300 "
            aria-label="github"
          />
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedinIcon
            className="!w-8 fill-light/75 hover:fill-light z-50"
            aria-label="github"
          />
        </motion.a>
      </div>
    </div>
  );
}
