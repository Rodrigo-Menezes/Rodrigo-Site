"use client"
import Image from "next/image";
import rodrigo from "../../../public/rodrigo.jpg";
import Layout from "../components/Layoyt";
import Tecnologias from "../components/Tecnologias";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedImage from "../components/AnimatedImage";
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
    delay: 2,
  },
};

export default function Sobre() {
  return (
    <div className="px-20 h-full pb-10 pt-44">
      <TransitionEffect />
      <div className="flex items-start">
        <Layout className="text-light !w-1/2 bg-light/5 shadow-lg shadow-black rounded !p-4 mr-5">
          <h2 className="mb-4 text-lg font-bold uppercase text-light drop-shadow-dark ">
            Biografia
          </h2>
          <p className="font-medium text-light drop-shadow-dark">
            {" "}
            <p class="text-lg mb-4">
              Olá! Sou Rodrigo Menezes, um entusiasta de tecnologia com 32 anos
              de idade, nascido em São Lourenço, MG. Tenho formação em Sistemas
              de Informação e sou apaixonado por criar experiências digitais
              incríveis como desenvolvedor Frontend especializado em React e
              Next.js.
            </p>
            <p class="text-lg mb-4">
              Atualmente, faço parte da equipe de desenvolvimento da Rixxer,
              onde tenho a oportunidade de contribuir para projetos emocionantes
              e desafiadores. Meu foco é aprimorar a interface do usuário e
              garantir que nossos produtos ofereçam a melhor experiência
              possível aos usuários.
            </p>
            <p class="text-lg mb-4">
              Além disso, estou sempre buscando aprimorar minhas habilidades e
              expandir meu conhecimento. No momento, estou dedicando meu tempo
              ao estudo da linguagem Go (Golang) como parte do meu objetivo de
              me tornar um desenvolvedor Backend mais completo.
            </p>
            <p class="text-lg">
              Estou animado com o que o futuro reserva e ansioso para continuar
              aprendendo e crescendo no mundo da tecnologia. Se você quiser
              saber mais sobre meu trabalho ou apenas bater um papo sobre
              desenvolvimento web, sinta-se à vontade para entrar em contato.
              Vamos criar algo incrível juntos!
            </p>
          </p>
          <br />
          <div className="flex flex-col justify-center items-center">
        <motion.a
          href="https://wa.me/5535988253492"
          target="_blank"
          variants={image}
          initial="initial"
          animate="animate"
          class="relative px-6 py-2 group mt-20 md:mt-10 md:mb-10 text-cente border"
        >
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0 border"></span>
          <span class="absolute inset-0 w-full h-full bg-light border-2 border-primary group-hover:bg-primary"></span>
          <span class="relative text-black group-hover:text-white font-bold">
            {" "}
            Entre em contato
          </span>
        </motion.a>
      </div>
        </Layout>
        <div className="flex justify-center items-center w-1/2">
          <Image
            src={rodrigo}
            alt="Minha foto de perfil"
            className=" rounded-full shadow-lg shadow-black h-[550px] w-auto"
            sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,50vw"
          />
        </div>
      </div>
      <Tecnologias />
    </div>
  );
}
