import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import {Providers} from "./providers";
import { Navigation } from './components/navigation/Navigation';

const font = Roboto({
  weight: ['300', '700'],
  subsets: ['latin'] // variable: '--font-grotesk', por ejemplo. Esto hace que podamos usarlo en css. Pero hay que poner la clase "font.variable"
})

export const metadata = {
  title: 'Furbo',
  description: 'Equipos de furbo',
}

export default function RootLayout({ children }) {
  return (
      <html lang="es"> 
        <head>
          <title>Furbo</title>
        </head>
        <body className={`${font.className}`}>
          <Providers>
          <Navigation />
            <div className='lg:ml-[19%] bg-yellow-400 h-full min-h-screen'>
                {children}
            </div>
          </Providers>
        </body>
      </html>
  )
}
