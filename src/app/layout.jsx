
import ItensPagina from './components/ItensPagina'
import NavBar from './components/NavBar'
import './globals.css'
import { Lobster, Montserrat,} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })
const lobster = Lobster({ subsets: ['latin'], weight: '400', variable: '--font-lob' })

export const metadata = {
  title: 'Rodrigo Menezes',
  description: 'Portifólio Rodrigo Menezes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
     <body className={`${montserrat.variable} ${lobster.variable} bg-degrade2 bg-no-repeat w-full min-h-screen`}>
     
      <NavBar/>
      <ItensPagina/>
      
      {children}
      </body>
    </html>
  )
}
