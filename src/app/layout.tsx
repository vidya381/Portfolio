import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vidya Desu | Software Engineer',
    template: '%s | Vidya Desu',
  },
  description:
    'Software engineer with 4 years of experience building scalable systems. Specialized in Spring Boot, FastAPI, and full-stack development.',
  keywords: [
    'Software Engineer',
    'Backend Engineer',
    'Full Stack Developer',
    'Spring Boot',
    'FastAPI',
    'Java',
    'Python',
    'React',
    'Next.js',
    'PostgreSQL',
  ],
  authors: [{ name: 'Vidya Desu' }],
  creator: 'Vidya Desu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-domain.vercel.app',
    title: 'Vidya Desu | Software Engineer',
    description:
      'Software engineer with 4 years of experience building scalable systems. Specialized in Spring Boot, FastAPI, and full-stack development.',
    siteName: 'Vidya Desu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vidya Desu | Software Engineer',
    description:
      'Software engineer with 4 years of experience building scalable systems.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
