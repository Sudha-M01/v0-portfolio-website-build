import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Sudha Mareeswaran | Frontend Developer Portfolio',
  description: 'Crafting modern, responsive, and performance-driven web experiences with clean code and creative design.',
  keywords: ['Frontend Developer', 'React', 'JavaScript', 'Web Development', 'Portfolio', 'Sudha Mareeswaran'],
  authors: [{ name: 'Sudha Mareeswaran' }],
  openGraph: {
    title: 'Sudha Mareeswaran | Frontend Developer Portfolio',
    description: 'Crafting modern, responsive, and performance-driven web experiences with clean code and creative design.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${_geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
