import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/Components/layout/Header'
import Footer from  '@/Components/layout/Footer'


const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
       <main className='px-8'>
        
        {children}
        <Footer />
       </main>
        
      {/*Homepage*/}
     
      
</body>

    </html>
  )
}