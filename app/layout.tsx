import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import './globals.css'

const fontBody = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
const fontHeading = Sora({ subsets: ['latin'], variable: '--font-heading', display: 'swap' })

export const metadata: Metadata = {
  title: 'ZAIDOFFSHORING | Solutions maritimes et offshore',
  description: 'ZAIDOFFSHORING accompagne vos projets d’installation nautique et d’interventions sur les structures immergées.',
  generator: 'v0.app',
  openGraph: {
    title: 'ZAIDOFFSHORING | Solutions maritimes et offshore',
    description: 'Des solutions maritimes adaptées à vos projets nautiques et offshore.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
