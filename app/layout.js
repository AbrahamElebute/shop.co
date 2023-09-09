import '../styles/globals.css'

import { Footer, Nav } from '../components'


export const metadata = {
  title: 'Shop.co',
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
