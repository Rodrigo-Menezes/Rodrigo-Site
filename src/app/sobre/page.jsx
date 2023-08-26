import Image from "next/image";
import logo from '../../../public/logo.png';
import h from '../../../public/h.jpg';
import Layout from "../components/Layoyt";
import Tecnologias from "../components/Tecnologias";
import TransitionEffect from "../components/TransitionEffect";


export default function Sobre() {
  return (
    <div className="px-20 h-full pb-10 pt-44">
      <TransitionEffect />
      <div className="flex items-start">
        <Layout className="text-light !w-1/2 bg-light/5 shadow-lg shadow-black rounded !p-4 mr-5">
          <h2 className="mb-4 text-lg font-bold uppercase text-light drop-shadow-dark ">Biografia</h2>
          <p className="font-medium text-light drop-shadow-dark"> Meu nome é <samp className="font-black text-primary">Rodrigo Menezes</samp> e sou natural de São Lourenço, Minas Gerais. Desde cedo, minha paixão por tecnologia me impulsionou a seguir uma carreira no mundo do desenvolvimento. Como desenvolvedor frontend, sou especializado em ReactJS e NextJS, duas tecnologias que me encantam pelas possibilidades que oferecem.</p><br />

          <p className="font-medium text-light drop-shadow-dark"><span className="text-primary font-bold"> Formado em Sistemas de Informação,</span> tenho uma base sólida de conhecimento que complementa minha experiência prática. A cada dia, sinto um entusiasmo renovado ao criar interfaces inovadoras e interativas, buscando sempre proporcionar a melhor experiência ao usuário. Acompanhar as tendências do setor é uma parte fundamental da minha jornada, pois acredito que o aprendizado constante é a chave para o sucesso.</p><br />

          <p className="font-medium text-light drop-shadow-dark">O desafio é o que me motiva a crescer profissionalmente, e estou sempre em busca de novos projetos para aprimorar minhas habilidades. O mundo da programação é vasto e em constante evolução, e essa dinâmica me inspira a explorar diferentes possibilidades e soluções criativas.</p><br />

          <p className="font-medium text-light drop-shadow-dark">Ser um desenvolvedor frontend me permite unir minha paixão pela tecnologia com a criatividade, e é algo que me faz sentir realizado. Estou animado para continuar trilhando meu caminho nessa área e contribuir para o desenvolvimento de projetos que tenham um impacto positivo na vida das pessoas.</p><br />
        </Layout>
        <div className="w-1/2 flex justify-center items-center h-[450px] mt-36">
          <div className="w-44 h-44 flex justify-center items-center  rotate-45 gap-1 bg-primary rounded-full drop-shadow-dark1">
            <div className="space-y-1 flex flex-col justify-center items-end -ml-10 -mt-10">
              <div className="bg-dark flex justify-center items-center w-56 h-56   rounded">
                <Image src={h} alt="Minha foto de perfil" className="w-96 h-56 rounded border-4 border-solid border-dark" />
              </div>
              <div className="bg-dark flex justify-center items-center w-44 h-44 rounded p-5  ">
                <Image src={logo} alt="Minha foto de perfil" className="-rotate-45" />
              </div>
            </div>
            <div className="space-y-1 flex flex-col justify-center items-end mt-2">
              <div className="bg-dark flex justify-center items-center w-44 h-44 rounded p-5 ">
                <Image src={logo} alt="Minha foto de perfil" className="-rotate-45" />
              </div>
              <div className="bg-dark flex justify-center items-center w-44 h-44 rounded p-5 ">
                <Image src={logo} alt="Minha foto de perfil" className="-rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <Tecnologias />
    </div>
  )
}