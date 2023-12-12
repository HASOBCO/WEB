import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hasob - Development of the Arab world',
  description: 'Leading innovation and progress in the Arab region through technology and expertise.',
  keywords: 'حاسوب, HASOB CO, تطوير العالم العربي, Arab world development, مبرمجين عرب, Arab programmers, تقنية, technology, برمجة, programming, ابتكار, innovation, تطور, progress, حاسوب للمستقبل, future of Hasob, برمجة عربية, Arab programming, تكنولوجيا المعلومات, information technology, الثورة التكنولوجية, technological revolution, حلول تكنولوجية, technological solutions, حاسوب وبرمجة, Hasob in programming, البرمجة في العالم العربي, programming in the Arab world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
