"use client";
import { delay, motion } from "framer-motion";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function ItensPagina() {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col justify-center items-center fixed w-9 left-10 bottom-10 z-10 gap-5">
        <div className="w-px h-16 bg-light/70  left-4 bottom-24" />
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="#">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-light hover:text-primary h-7"
            />
          </Link>
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-light hover:text-primary h-7"
            />
          </Link>
        </motion.a>
        <motion.a
          href="/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-light hover:text-primary h-7"
            />
          </Link>
        </motion.a>
      </div>
    </div>
  );
}
