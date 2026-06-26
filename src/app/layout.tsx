import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'كأس العالم 2026 - مسابقة التوقعات',
  description: 'توقع نتائج كأس العالم وتنافس مع أصدقائك',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
