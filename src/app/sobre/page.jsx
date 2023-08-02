import Image from "next/image";
import logo from '../../../public/logo.png'
import Layout from "../components/Layoyt";

export default function Sobre() {
  return (
    <div className="px-36">
    
      <div className="flex items-start">
        <Layout className="text-light !w-1/2 bg-light/5 shadow-lg shadow-black rounded-xl p-10 mx-8">
        <h2 className="mb-4 text-lg font-bold uppercase text-light drop-shadow-dark ">Biografia</h2>
          <p className="font-medium text-light drop-shadow-dark"> Meu nome é <samp className="font-black text-primary">Rodrigo Menezes</samp> e sou natural de São Lourenço, Minas Gerais. Desde cedo, minha paixão por tecnologia me impulsionou a seguir uma carreira no mundo do desenvolvimento. Como desenvolvedor frontend, sou especializado em ReactJS e NextJS, duas tecnologias que me encantam pelas possibilidades que oferecem.</p><br/>

          <p className="font-medium text-light drop-shadow-dark ">A cada dia, sinto um entusiasmo renovado ao criar interfaces inovadoras e interativas, buscando sempre proporcionar a melhor experiência ao usuário. Acompanhar as tendências do setor é uma parte fundamental da minha jornada, pois acredito que o aprendizado constante é a chave para o sucesso.</p><br/>

          <p className="font-medium text-light">O desafio é o que me motiva a crescer profissionalmente, e estou sempre em busca de novos projetos para aprimorar minhas habilidades. O mundo da programação é vasto e em constante evolução, e essa dinâmica me inspira a explorar diferentes possibilidades e soluções criativas.</p><br/>

          <p className="font-medium text-light">Ser um desenvolvedor frontend me permite unir minha paixão pela tecnologia com a criatividade, e é algo que me faz sentir realizado. Estou animado para continuar trilhando meu caminho nessa área e contribuir para o desenvolvimento de projetos que tenham um impacto positivo na vida das pessoas.</p><br/>
        </Layout>
        <Image src={logo} alt="Minha foto de perfil" className="w-1/2 border rounded-xl border-light mr-8 p-5"/>
      </div>
    </div>
  )
}