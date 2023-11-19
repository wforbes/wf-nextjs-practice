import type { Metadata } from 'next'
import ThemeRegistry from '@/app/components/ThemeRegistry/ThemeRegistry';
import Navbar from '@/app/components/Layout/Navbar';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WF Next.js Practice',
  description: 'Next.js app created to practice web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <Navbar />
          <main>
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  )
}
