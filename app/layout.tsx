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
	description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer, Pardubice.',
	keywords: ['DejvCodes', 'David Kalmus', 'Tvorba webových stránek', 'Weby na míru', 'Pardubice', 'Front-end Developer', 'Web Developer', 'Web Design', 'Web Development', 'Portfolio', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML', 'CSS', 'Web Performance', 'SEO', 'Responsive Design', 'Weby Pardubice'],
	authors: [{ name: 'David Kalmus', url: 'https://dejvcodes.com' }],
	creator: 'David Kalmus',
	publisher: 'David Kalmus',
	openGraph: {
		title: 'DejvCodes - David Kalmus',
		description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer.',
		siteName: 'DejvCodes',
		url: 'https://dejvcodes.com',
		type: 'website',
		images: [
			{
				url: '/logo-1024x1024.webp',
				width: 1024,
				height: 1024,
				alt: 'DejvCodes - David Kalmus',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'DejvCodes - David Kalmus',
		description: 'DejvCodes je značka zaměřená na tvorbu moderních webových stránek na míru pomocí čistého kódu. Stavím rychlé, responzivní a přehledné weby, které vypadají skvěle a zároveň jsou optimalizované pro výkon a SEO. Od návrhu až po realizaci dotahuju detaily, které posouvají web na vyšší level. David Kalmus - Medior Front-end Developer.',
		images: ['/logo-1024x1024.webp'],
	}
}

const RootLayout: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return <html lang='en' data-scroll-behavior='smooth'>
		<head>
			<link rel='icon' href='/favicon-32.png' sizes='32x32' type='image/png' />
			<link rel='icon' href='/favicon-48.png' sizes='48x48' type='image/png' />
			<link rel='shortcut icon' href='/favicon.svg' type='image/svg+xml' />
		</head>
		<body className={`${inter.variable} antialiased`}>
			{children}
		</body>
	</html>
};

export default RootLayout;
