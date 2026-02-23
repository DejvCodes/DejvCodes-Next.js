import Script from 'next/script';

const organizationSchema = {
	'@context': 'https://schema.org',
	'@type': 'Organization',
	'@id': 'https://dejvcodes.com/#organization',
	name: 'DejvCodes',
	url: 'https://dejvcodes.com',
	logo: 'https://dejvcodes.com/logo-1024x1024.png',
	image: 'https://dejvcodes.com/logo-1024x1024.png',
	email: 'info@dejvcodes.com',
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Pardubice',
		addressCountry: 'CZ'
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: 50.0343,
		longitude: 15.7812
	},
	sameAs: [
		'https://www.instagram.com/dejvcodes/',
		'https://github.com/DejvCodes',
		'https://www.linkedin.com/company/dejvcodes-david-kalmus/'
	]
};

const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	'@id': 'https://dejvcodes.com/#website',
	url: 'https://dejvcodes.com',
	name: 'DejvCodes',
	description: 'DejvCodes je brand zaměřený na moderní weby na míru s čistým a dobře strukturovaným kódem. Vytvářím rychlé, responzivní a přehledné weby, které skvěle vypadají a zároveň jsou optimalizované pro výkon i SEO. Od návrhu až po realizaci dotahuji detaily, které posouvají váš web na vyšší level.',
	publisher: {
		'@id': 'https://dejvcodes.com/#organization'
	}
};

const StructuredData = () => {
	return <>
		<Script
			id='organization-schema'
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
		/>
		<Script
			id='website-schema'
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
		/>
	</>;
};

export default StructuredData;
