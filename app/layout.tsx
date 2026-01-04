import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dejvcodes.com'),
  title: 'DejvCodes - David Kalmus',
  description:
    'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'DejvCodes - David Kalmus',
    description:
      'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO.',
    siteName: 'DejvCodes',
    url: 'https://dejvcodes.com',
    type: 'website',
    images: [
      {
        url: '/og.png', // dej do public/og.png
        width: 1200,
        height: 630,
        alt: 'DejvCodes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DejvCodes - David Kalmus',
    description:
      'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}