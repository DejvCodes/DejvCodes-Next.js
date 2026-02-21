import './globals.css';
import {Inter} from 'next/font/google';
import type {Metadata, Viewport} from 'next';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' }
	]
}

export const metadata: Metadata = {
	metadataBase: new URL('https://dejvcodes.com'),
	alternates: { canonical: 'https://dejvcodes.com/' },
	title: 'David Kalmus | DejvCodes',
	description: 'DejvCodes je brand zaměřený na moderní weby na míru s čistým a dobře strukturovaným kódem. Vytvářím rychlé, responzivní a přehledné weby, které skvěle vypadají a zároveň jsou optimalizované pro výkon i SEO. Od návrhu až po realizaci dotahuji detaily, které posouvají váš web na vyšší level.',
	keywords: ['DejvCodes', 'David Kalmus', 'Tvorba webových stránek', 'Weby na míru', 'Pardubice', 'Front-end Developer', 'Web Developer', 'Web Design', 'Web Development', 'Portfolio', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'Web Performance', 'SEO', 'Responsive Design', 'Weby Pardubice'],
	authors: [{ name: 'David Kalmus', url: 'https://dejvcodes.com' }],
	creator: 'David Kalmus',
	publisher: 'David Kalmus',
	manifest: '/site.webmanifest',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	icons: {
		icon: [
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
			{ url: '/logo-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/logo-192x192.png', sizes: '192x192', type: 'image/png' }
		],
		apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
		shortcut: ['/favicon-32x32.png']
	},
	openGraph: {
		title: 'David Kalmus | DejvCodes',
		description: 'DejvCodes je brand zaměřený na moderní weby na míru s čistým a dobře strukturovaným kódem. Vytvářím rychlé, responzivní a přehledné weby, které skvěle vypadají a zároveň jsou optimalizované pro výkon i SEO. Od návrhu až po realizaci dotahuji detaily, které posouvají váš web na vyšší level.',
		siteName: 'DejvCodes',
		url: 'https://dejvcodes.com',
		type: 'website',
		locale: 'cs_CZ',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'David Kalmus | DejvCodes',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'David Kalmus | DejvCodes',
		description: 'DejvCodes je brand zaměřený na moderní weby na míru s čistým a dobře strukturovaným kódem. Vytvářím rychlé, responzivní a přehledné weby, které skvěle vypadají a zároveň jsou optimalizované pro výkon i SEO. Od návrhu až po realizaci dotahuji detaily, které posouvají váš web na vyšší level.',
		images: ['/og-image.png'],
	}
}

const RootLayout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return <html
		lang='cs-CZ'
		data-scroll-behavior='smooth'
	>
		<head>
			<link rel='icon' href='/favicon-16x16.png' sizes='16x16' type='image/png' />
			<link rel='icon' href='/favicon-32x32.png' sizes='32x32' type='image/png' />
			<link rel='icon' href='/favicon-48x48.png' sizes='48x48' type='image/png' />
			<link rel='icon' href='/logo-96x96.png' sizes='96x96' type='image/png' />
			<link rel='icon' href='/logo-192x192.png' sizes='192x192' type='image/png' />
			<link rel='apple-touch-icon' href='/apple-touch-icon.png' sizes='180x180' type='image/png' />
		</head>
		<body className={`${inter.variable} antialiased`}>
			{children}
		</body>
	</html>
};

export default RootLayout;
