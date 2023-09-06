import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import {Providers} from "./providers";

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
      <html lang="es" className='dark'> 
        <head>
          <title>Furbo</title>
        </head>
        <body className={`bg-green-600 ${font.className}`}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  )
}
