import Image from 'next/image'
import bg2 from "../../public/bg2.jpg"
import ItensPagina from './components/ItensPagina'
import NavBar from './components/NavBar'
import './globals.css'
import { Lobster, Montserrat,} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })
const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lob' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
     <body className={`${montserrat.variable} ${lobster.variable} bg-degrade2 w-full min-h-screen`}>
      <NavBar/>
      <ItensPagina/>
      <Image src={bg2} alt="logo" className="opacity-10 -z-10  absolute w-screen h-screen top-0"/>
      {children}
      </body>
    </html>
  )
}
