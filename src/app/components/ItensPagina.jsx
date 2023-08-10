"use client";
import { motion } from "framer-motion";
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

export default function ItensPagina() {
  return (
    <div className="md:hidden">
      <div className="flex flex-col justify-center items-center fixed w-9 left-32 bottom-10 z-10 gap-5">
        <div className="w-px h-16 bg-light/70  left-4 bottom-24" />
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='#'><FontAwesomeIcon icon={faGithub} className="text-light hover:text-primary h-7"/></Link>
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
         <Link href='#'><FontAwesomeIcon icon={faLinkedin} className="text-light hover:text-primary h-7"/></Link>
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href='#'><FontAwesomeIcon icon={faInstagram} className="text-light hover:text-primary h-7"/></Link>
        </motion.a>
      </div>
      <Link href='#' className="bg-primary text-light hover:text-primary hover:bg-light transition-all duration-300 font-bold fixed right-0 bottom-[50%] p-5 ">
        R i x x e r
      </Link>
      
    </div>
  );
}
