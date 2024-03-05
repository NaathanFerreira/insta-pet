import type { Metadata } from 'next'
import './globals.css'
import { TypeSecond } from '@/functions/fonts'

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
      <body className={TypeSecond.variable}>{children}</body>
    </html>
  )
}
