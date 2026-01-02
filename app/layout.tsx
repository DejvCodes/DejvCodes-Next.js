import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'DejvCodes - David Kalmus',
  description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
