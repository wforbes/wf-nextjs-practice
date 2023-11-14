import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/app/components/ThemeRegistry/ThemeRegistry';

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
          <main>
            {children}
          </main>
        </ThemeRegistry>
      </body>
    </html>
  )
}
