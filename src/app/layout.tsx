import type { Metadata } from 'next'
import './globals.css'
import { TypeSecond } from '@/functions/fonts'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Insta Pet',
  description: 'Social Network for pets',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={TypeSecond.variable}>
        <div className="App">
          <Header />
          <main className="AppBody">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
