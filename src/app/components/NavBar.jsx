"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative text-light`}>
      {title}
      <span
        className={`h-px inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <Link
      href={href}
      className={`${className} group relative text-light mb-5`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-px inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative -mt-10">
      {/* menu web */}
      <motion.div
        initial={{ opacity: 0, y: 110 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full px-10 py-20 font-medium flex items-center justify-between absolute">
        <Link
          href="/"
          className="w-full md:flex justify-between items-center hidden "
        >
          <div className="w-28">
            <h1 className="text-light font-bold text-3xl">RM</h1>

            <h2 className="text-primary text-3xl font-bold">Dev</h2>
          </div>
          <nav>
            <CustomLink href="/" title="Início" className="mr-4 p-2" />
            <CustomLink href="/sobre" title="Sobre" className="mx-4 p-2" />
            <CustomLink href="/projetos" title="Projetos" className="mx-4 p-2" />
          </nav>
        </Link>
      </motion.div>

      {/* menu mobile */}
      <div className="flex justify-between items-center px-10 py-5">

        <button
          className="flex-col justify-center items-center flex  md:hidden"
          aria-label="botão de menu"
          onClick={handleClick}
        >
          <span
            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-primary block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
          ></span>
        </button>

        <div className="md:hidden block">
          <h1 className="text-light font-bold text-xl">RM</h1>

          <h2 className="text-primary text-xl font-bold">Dev</h2>
        </div>

      </div>
      {isOpen ? (
        <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-light/10 rounded-lg backdrop-blur-md py-32">
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              href="/"
              title="Inicio"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/sobre"
              title="Sobre"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projetos"
              title="Projetos"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center gap-2">
            <Link href='#'><FontAwesomeIcon icon={faInstagram} className="text-primary h-7" /></Link>
            <Link href='#'><FontAwesomeIcon icon={faGithub} className="text-primary h-7" /></Link>
            <Link href='#'><FontAwesomeIcon icon={faLinkedin} className="text-primary h-7" /></Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
