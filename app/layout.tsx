import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'
import TextToSpeech from '../components/TextToSpeech';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enable-Ed',
  description: 'Developed by Ahmed Nadeem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          
          {children}
          {/* Add Text-to-Speech Button */}
          <TextToSpeech />
          
        </body>
      </html>
    </ClerkProvider>
  )
}
