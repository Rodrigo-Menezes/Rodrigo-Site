"use client";

import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const Card = ({ text, title, className }) => {
  return (
    <motion.div
      className={`bg-light/5 rounded p-5 text-light w-full h-auto mt-10 shadow-md shadow-black ${className}`}
      initial={{
        opacity: 1,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      }}
    >
      <h2 className="font-bold uppercase text-primary">{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
};

export default function Tecnologias() {
  return (
    <div className="pt-28">
      <AnimatedText text="Tecnologias que utilizo" className="w-[700px]"/>
      <div className="flex flex-wrap justify-center items-center">
        <Card
          title="HTML"
          text="  HTML é uma linguagem usada para criar páginas na internet. Ela usa tags para organizar e estruturar o conteúdo da página, como parágrafos, imagens e links. Com HTML, você pode criar textos, imagens e links na web para que todos possam ver. É a base de qualquer site que você visita!"
        />
        <Card
          title="css"
          text="  CSS é a linguagem usada para dar estilo e aparência bonita às páginas da web. Ele define cores, fontes, espaçamento e posicionamento dos elementos. Enquanto o HTML organiza o conteúdo, o CSS o torna visualmente atraente e bem apresentado. É como a maquiagem que deixa a página mais bonita!"
        />
        <Card
          title="javascript"
          text=" JavaScript é uma linguagem de programação usada para tornar as páginas da web interativas e dinâmicas. Com JavaScript, você pode adicionar animações, fazer formulários responder em tempo real, criar botões que executam ações e muito mais.

Basicamente, o JavaScript permite que você torne seu site mais do que apenas um conjunto de informações estáticas, dando vida a ele e possibilitando a interação do usuário com a página. É como a mágica por trás dos sites que respondem aos seus cliques e comandos!"
        />
        <Card
          title="tailwind"
          text=" Tailwind CSS é um conjunto de estilos pré-definidos que você pode usar para criar rapidamente a aparência do seu site. Em vez de escrever seu próprio CSS, você usa classes prontas para aplicar estilos aos elementos do seu site. Isso facilita e agiliza a criação de um design personalizado para suas páginas web."
        />
        <Card
          title="framermotion"
          text="  Framer Motion é uma biblioteca JavaScript usada para criar animações e transições suaves em elementos da web. Ele é especialmente popular em projetos React, mas também pode ser usado com outras bibliotecas e frameworks."
        />
        <Card
          title="reactjs"
          text="  ReactJS é uma biblioteca JavaScript para criar páginas web interativas e reativas. Ele permite dividir a interface em componentes reutilizáveis e atualiza apenas as partes necessárias da página, tornando-o rápido e eficiente. É amplamente usado no desenvolvimento web moderno."
        />
        <Card
          title="nextjs"
          text="Next.js é um framework JavaScript para criar aplicativos web rápidos e eficientes com React. Ele oferece recursos como renderização no servidor, roteamento automático e suporte a TypeScript, tornando o desenvolvimento mais simples e rápido. É uma ótima escolha para projetos modernos e com bom desempenho."
        />
      </div>
    </div>
  );
}
