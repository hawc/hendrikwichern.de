import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import '@/app/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'hendrikwichern.de',
  description: 'Hendrik Wichern | Web Developer',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-screen-xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
