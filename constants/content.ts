import {AboutContent, BioBox, ContactContent, DailyEssential, Experience, FooterContent, HeaderContent, HeroContent, NavLink, NotFoundContent, PrivacyPolicyContent, ProjectsContent, SkillIcon, SkillsContent, SocialLink, StatsBox} from '../types/types';

import {
	ArrowDown,
	ArrowRight,
	ArrowUpRight,
	Brain,
	Briefcase,
	Coffee,
	Code,
	Code2,
	Dumbbell,
	Globe,
	Plane,
	Sparkles,
	Terminal
} from 'lucide-react';
import {
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiVuedotjs,
	SiNuxtdotjs,
	SiTailwindcss,
	SiVite,
	SiGitlab,
	SiFigma,
	SiCypress
} from 'react-icons/si';
import {VscVscode} from 'react-icons/vsc';
import {FaCheck, FaEnvelope} from 'react-icons/fa';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa6';

export const NAV_LINKS: NavLink[] = [
	{ id: 1, path: '#home', text: 'Home' },
	{ id: 2, path: '#about', text: 'About' },
	{ id: 3, path: '#skills', text: 'Skills' },
	{ id: 4, path: '#projects', text: 'Projects' },
	{ id: 5, path: '#contact', text: 'Contact' },
];

export const HEADER_CONTENT: HeaderContent = {
	brandPrimary: 'Dejv',
	brandAccent: 'Codes',
	dotSymbol: '.',
	logoIcon: Code2
};

export const HERO_CONTENT: HeroContent = {
	badge: 'Available for freelance projects',
	introPrefix: "Hi, I'm",
	name: 'DejvCodes',
	role: 'Medior Front-end Developer',
	description: 'I design and build websites, web apps and interfaces that turn ideas into clean, high-performing experiences with sharp UI and real-world usability.',
	viewWorkButton: 'View My Work',
	skillsButton: 'My Skills',
	primaryButtonIcon: ArrowRight,
	secondaryButtonIcon: ArrowDown
};

export const ABOUT_CONTENT: AboutContent = {
	title: 'About',
	titleAccent: 'Me',
	bioIcon: Terminal,
	statsIcon: Globe,
	dailyEssentialsIcon: Sparkles,
	workHistoryIcon: Briefcase,
	basedInLabel: 'Based in',
	nameLabel: 'Name',
	ageLabel: 'Age',
	timezoneLabel: 'Timezone',
	dailyEssentialsTitle: 'Daily Essentials',
	workHistoryTitle: 'Work History'
};

const yearOfExperience: number = new Date().getFullYear() - 2023;

export const BIO_BOX: BioBox = {
	title: 'Building Philosophy',
	paragraphs: [
		'DejvCodes is my personal brand focused on building modern, custom websites and web apps with clean, well-structured code. I create fast, responsive experiences that look great, feel smooth and are optimized for performance and SEO.',
		`${yearOfExperience}+ years of front-end experience - clean code, sharp UI, real-world results.`
	]
}

const birthDate = new Date('2002-07-17T00:00:00');
const today = new Date();
const age: number = today.getFullYear() - birthDate.getFullYear() - (
	today.getMonth() < birthDate.getMonth() ||
	(today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()) ? 1 : 0
);

export const STATS_BOX: StatsBox = {
	location: 'Pardubice, Czechia',
	name: 'David Kalmus',
	age: `${age} years`,
	timezone: 'CET (UTC+1)'
};

export const DAILY_ESSENTIALS: DailyEssential[] = [
	{ icon: Brain, label: 'Mindset', value: 'growth', percentage: 85 },
	{ icon: Coffee, label: 'Coffee', value: '2-3 cups', percentage: 45 },
	{ icon: Code, label: 'Coding', value: 'daily', percentage: 95 },
	{ icon: Dumbbell, label: 'Gym', value: 'regular', percentage: 85 },
	{ icon: Plane, label: 'Travel', value: 'passion', percentage: 70 },
];

export const EXPERIENCE: Experience[] = [
	{
		id: '1',
		role: 'Freelance Web Developer',
		company: 'DejvCodes',
		period: '2026 - Present',
		description: 'Building custom websites with clean code, detail-focused UI, responsive layouts, on-page SEO and performance optimization using TypeScript, Next.js and Tailwind CSS.'
	},
	{
		id: '2',
		role: 'Front-end Developer',
		company: 'Conviu s.r.o.',
		period: '2025 - Present',
		description: 'Building an e-commerce web app for e-shops with Vue 3, Nuxt 3, TypeScript and Tailwind CSS. Refactoring and optimizing the codebase, shipping features, integrating GraphQL via Apollo and collaborating on UI/UX.'
	},
	{
		id: '3',
		role: 'Electromechanic',
		company: 'Ignitech s.r.o.',
		period: '2023 - 2025',
		description: 'Building and testing motorcycle electronics (ignition systems, connectors, wiring harnesses), tuning ignition settings and performing final functional checks.'
	}
];

export const SKILLS_ICONS: SkillIcon[] = [
	{ icon: SiJavascript, language: 'JavaScript' },
	{ icon: SiTypescript, language: 'TypeScript' },
	{ icon: SiReact, language: 'React' },
	{ icon: SiNextdotjs, language: 'Next.js' },
	{ icon: SiVuedotjs, language: 'Vue 3' },
	{ icon: SiNuxtdotjs, language: 'Nuxt 3' },
	{ icon: SiTailwindcss, language: 'Tailwind' },
	{ icon: SiVite, language: 'Vite' },
	{ icon: SiGitlab, language: 'Gitlab' },
	{ icon: VscVscode, language: 'VS Code' },
	{ icon: SiFigma, language: 'Figma' },
	{ icon: SiCypress, language: 'Cypress' },
];

export const SKILLS_CONTENT: SkillsContent = {
	title: 'Skills &',
	titleAccent: 'Experience',
	description:' I build production-ready web apps with Next.js and React, writing type-safe code with TypeScript and creating responsive UI with Tailwind CSS. I also work daily with Vue 3 and Nuxt 3 on an e-commerce app.',
	summary: 'Every project is optimized for performance, SEO and real-world usability - delivering fast, accessible experiences that work flawlessly across all devices.',
	projectsButton: 'View Projects'
};

export const PROJECTS_CONTENT: ProjectsContent = {
	title: 'Selected',
	titleAccent: 'Works',
	externalLinkIcon: ArrowUpRight,
	items: [
		{
			id: '1',
			title: 'DejvCodes',
			link: 'https://dejvcodes.com',
			image: '/dejvcodes-project.webp',
		},
		{
			id: '2',
			title: 'Nexa Yonder',
			link: 'https://nexa-yonder.netlify.app/',
			image: '/nexa-yonder-project.webp',
		}
	]
};

export const SOCIAL_LINKS: SocialLink[] = [
	{ name: 'Instagram', url: 'https://www.instagram.com/dejvcodes/', icon: FaInstagram, width: 8, height: 8 },
	{ name: 'GitHub', url: 'https://github.com/DejvCodes', icon: FaGithub, width: 8, height: 8 },
	{ name: 'LinkedIn', url: 'https://www.linkedin.com/company/dejvcodes-david-kalmus/', icon: FaLinkedin, width: 8, height: 8 },
	{ name: 'Email', url: 'mailto:info@dejvcodes.com', icon: FaEnvelope, width: 8, height: 8 },
];

export const FOOTER_CONTENT: FooterContent = {
	name: 'David Kalmus',
	role: 'Medior Front-end Developer',
	location: 'Pardubice, Czech Republic',
	ico: 'Brand ID: DejvCodes', // IČO: 24078140',
	copyright: 'DejvCodes. All rights reserved.',
	privacyLink: '/privacy-policy',
	privacyText: 'Privacy Policy',
	badge: 'Built with Next.js & TypeScript',
	year: new Date().getFullYear()
};

export const CONTACT_CONTENT: ContactContent = {
	heading: 'Interested in working together?',
	description: "Available for new projects - let's build something great.",
	form: {
		nameLabel: 'Name',
		emailLabel: 'Email',
		subjectLabel: 'Subject',
		privacyLink: '/privacy-policy',
		privacyConsentPrefix: 'I agree with the',
		privacyLinkText: 'Privacy Policy',
		messageLabel: 'Your Message...',
		submitButton: 'Send Message',
		submitButtonLoading: 'Sending...',
		successMessage: 'Thanks! Your message has been sent.',
		errorMessage: 'Something went wrong. Please try again later.',
		checkIcon: FaCheck,
		emailIcon: FaEnvelope
	},
	email: 'info@dejvcodes.com'
};

export const NOT_FOUND_CONTENT: NotFoundContent = {
	code: '404',
	title: 'Page Not Found',
	description: 'Sorry, but the page you are looking for does not exist.',
	backHomeText: 'Back to Home'
};

export const PRIVACY_POLICY_CONTENT: PrivacyPolicyContent = {
	badge: 'Updated Privacy Policy',
	title: 'Privacy Policy',
	backHomeText: 'Back to Home',
	email: 'info@dejvcodes.com',
	controller: {
		title: 'Data Controller',
		name: 'David Kalmus',
		location: 'Pardubice, Czech Republic',
		emailLabel: 'Email:'
	},
	dataProcessing: {
		title: 'What Data I Process and Why?',
		purposeLabel: 'Purpose:',
		legalBasisLabel: 'Legal basis:',
		retentionLabel: 'Retention:',
		sections: [
			{
				title: '1. Contact Form / Email Communication',
				intro: 'If you contact me via the website form or email, I process the data you provide, typically:',
				list: ['name', 'email', 'subject of the message', 'message content (and phone number if you include it)'],
				purpose: 'handling your inquiry/quote and follow-up communication.',
				legalBasis: 'steps toward a contract at your request (Art. 6(1)(b) GDPR) and/or legitimate interest in handling inquiries (Art. 6(1)(f) GDPR).',
				retention: 'for as long as needed to address your request, but no longer than 12 months from the last communication unless a contract or another legal reason requires longer storage.'
			},
			{
				title: '2. Technical Data and Server Logs',
				intro: 'When you visit the website, basic technical data may be stored automatically in hosting server logs (e.g., IP address, date and time of access, requested page, browser/device information).',
				purpose: 'security, abuse prevention, and technical operation of the website.',
				legalBasis: 'legitimate interest (Art. 6(1)(f) GDPR).',
				retention: 'up to 12 months (or according to hosting settings).'
			}
		]
	},
	cookies: {
		title: 'Cookies',
		intro: 'This website does not use analytics or marketing cookies and does not measure traffic or track user behavior.',
		description: 'The site uses only essential technical cookies related to securing the contact form (session cookie), specifically for:',
		list: ['protection against form abuse', 'verification of a security token (CSRF)'],
		outro: 'These cookies are necessary for secure operation and do not require consent. You can delete or block cookies in your browser settings at any time.'
	},
	security: {
		title: 'Security',
		description: 'Communication with the website uses HTTPS encryption. Additional security mechanisms protect the contact form (e.g., CSRF protection and request limiting).'
	},
	recipients: {
		title: 'Recipients of Personal Data',
		intro: 'Personal data may be accessed only to the necessary extent by:',
		list: ['the web hosting and related service provider (server logs)', 'the email service provider (message delivery)'],
		outro: 'Data is not shared with third parties for marketing purposes.'
	},
	rights: {
		title: 'Your Rights',
		intro: 'You have the right to:',
		list: ['request access to your personal data', 'request rectification or erasure', 'request restriction of processing'],
		outro: 'For questions, contact me at'
	}
};

// <div className='max-w-6xl mx-auto mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800/50'>
//   {[
//     { label: 'Years Experience', value: '4+' },
//     { label: 'Completed Projects', value: '24+' },
//     { label: 'Happy Clients', value: '18+' },
//     { label: 'Lines of Code', value: '500k+' },
//   ].map((stat) => (
//     <div key={stat.label} className='space-y-1'>
//       <div className='text-3xl font-bold text-white'>{stat.value}</div>
//       <div className='text-xs uppercase tracking-widest text-slate-500 font-semibold'>{stat.label}</div>
//     </div>
//   ))}
// </div>
