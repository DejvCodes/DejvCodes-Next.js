import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  metadataBase: new URL('https://dejvcodes.com'),
  title: 'DejvCodes - David Kalmus',
  description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='256x256' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icon-192-192.png' />
        <link rel='icon' type='image/png' sizes='256x256' href='/icon-256x256.png' />
        <link rel='icon' type='image/png' sizes='300x300' href='/icon-300x300.png' />
        <link rel='stylesheet' type='text/css' href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css' />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}