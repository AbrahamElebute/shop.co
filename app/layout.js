import './globals.css'
import { Footer, Nav } from '../components'
// 

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Showp.co',
  description: 'FIND CLOTHES THAT MATCHES YOUR STYLE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
         {children}
        <Footer />
      </body>
    </html>
  )
}
