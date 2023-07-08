import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Providers from '../../Redux/Providers/Providers';
import Script from 'next/script';

export const metadata = {
  title: 'Pkkard Merchant',
  description: 'pkkard ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
 
    </head>
      <body  >
        <Providers>
        {children}
        </Providers>  
        <Script src='https://kit.fontawesome.com/fbadad80a0.js' /> 
        </body>
    </html>
  )
}
