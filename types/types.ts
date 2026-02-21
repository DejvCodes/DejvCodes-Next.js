import {IconType} from 'react-icons';
import {LucideIcon} from 'lucide-react';

export interface NavLink {
	id: number;
	path: string;
	text: string;
}

export interface HeaderContent {
	brandPrimary: string;
	brandAccent: string;
	dotSymbol: string;
	logoIcon: LucideIcon;
}

export interface HeroContent {
	badge: string;
	introPrefix: string;
	name: string;
	role: string;
	description: string;
	viewWorkButton: string;
	skillsButton: string;
	primaryButtonIcon: LucideIcon;
	secondaryButtonIcon: LucideIcon;
}

export interface BioBox {
	title: string;
	paragraphs: string[];
}

export interface StatsBox {
	location: string;
	name: string;
	age: string;
	timezone: string;
}

export interface DailyEssential {
	icon: LucideIcon;
	label: string;
	value: string;
	percentage: number;
}

export interface Experience {
	id: string;
	role: string;
	company: string;
	period: string;
	description: string;
}

export interface AboutContent {
	title: string;
	titleAccent: string;
	bioIcon: LucideIcon;
	statsIcon: LucideIcon;
	dailyEssentialsIcon: LucideIcon;
	workHistoryIcon: LucideIcon;
	basedInLabel: string;
	nameLabel: string;
	ageLabel: string;
	timezoneLabel: string;
	dailyEssentialsTitle: string;
	workHistoryTitle: string;
}

export interface SkillIcon {
	icon: IconType;
	language: string;
}

export interface SkillsContent {
	title: string;
	titleAccent: string;
	description: string;
	summary: string;
	projectsButton: string;
	highlightedTech: string[];
}

export interface Project {
	id: string;
	title: string;
	image: string;
	link: string;
}

export interface ProjectsContent {
	title: string;
	titleAccent: string;
	externalLinkIcon: LucideIcon;
	items: Project[];
}

export interface SocialLink {
	name: string;
	url: string;
	icon: IconType;
	width: number;
	height: number;
}

export interface ContactContent {
	heading: string;
	description: string;
	form: {
		nameLabel: string;
		emailLabel: string;
		subjectLabel: string;
		messageLabel: string;
		privacyLink: string;
		privacyConsentPrefix: string;
		privacyLinkText: string;
		submitButton: string;
		submitButtonLoading: string;
		successMessage: string;
		errorMessage: string;
		checkIcon: IconType;
		emailIcon: IconType;
	};
	email: string;
}

export interface FooterContent {
	name: string;
	role: string;
	location: string;
	ico: string;
	copyright: string;
	privacyLink: string;
	privacyText: string;
	badge: string;
	year: number;
}

export interface NotFoundContent {
	code: string;
	title: string;
	description: string;
	backHomeText: string;
}

export interface PrivacyPolicySection {
	title: string;
	intro: string;
	list?: string[];
	purpose: string;
	legalBasis: string;
	retention: string;
}

export interface PrivacyPolicyContent {
	badge: string;
	title: string;
	backHomeText: string;
	email: string;
	controller: {
		title: string;
		name: string;
		location: string;
		emailLabel: string;
	};
	dataProcessing: {
		title: string;
		purposeLabel: string;
		legalBasisLabel: string;
		retentionLabel: string;
		sections: PrivacyPolicySection[];
	};
	cookies: {
		title: string;
		intro: string;
		description: string;
		list: string[];
		outro: string;
	};
	security: {
		title: string;
		description: string;
	};
	recipients: {
		title: string;
		intro: string;
		list: string[];
		outro: string;
	};
	rights: {
		title: string;
		intro: string;
		list: string[];
		outro: string;
	};
}

export interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
	privacyAccepted: boolean;
	website: string;
}

export enum FormStatus {
	IDLE = 'idle',
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}
