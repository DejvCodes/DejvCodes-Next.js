import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  metadataBase: new URL('https://dejvcodes.com'),
  title: 'DejvCodes - David Kalmus',
  description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer.',
  // icons: {
  //   icon: [
  //     { url: '/favicon.ico', sizes: '256x256' },
  //     { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
  //     { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
  //     { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' }
  //   ],
  //   shortcut: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  openGraph: {
    title: 'DejvCodes - David Kalmus',
    description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer.',
    siteName: 'DejvCodes',
    url: 'https://dejvcodes.com',
    type: 'website',
    images: [
      {
        url: '/dejvcodes-logo.png',
        width: 1200,
        height: 630,
        alt: 'DejvCodes - David Kalmus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DejvCodes - David Kalmus',
    description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer.',
    images: ['/dejvcodes-logo.png'],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        {/* <link rel='icon' href='/favicon.ico' sizes='256x256' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' /> */}
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
        {/* <link rel='icon' type='image/png' href='/icon-96x96.png' sizes='96x96' /> */}
        {/* <link rel='icon' type='image/png' href='/icon-192x192.png' sizes='192x192' />
        <link rel='icon' type='image/png' href='/icon-300x300.png' sizes='300x300' />
        <link rel='icon' type='image/png' href='/icon-512x512.png' sizes='512x512' /> */}
        {/* <link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180' /> */}
        {/* <meta name='apple-mobile-web-app-title' content='DejvCodes' />
        <link rel='manifest' href='/site.webmanifest' /> */}
        <link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}