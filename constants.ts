import {BioBox, DailyEssential, Experience, HeroContent, NavLink, Project, SkillIcon, SocialLink, StatsBox} from './types';

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
import {VscVscode} from "react-icons/vsc";


export const NAV_LINKS: NavLink[] = [
  { id: 1, path: '#home', text: 'Home' },
  { id: 2, path: '#about', text: 'About' },
  { id: 3, path: '#skills', text: 'Skills' },
  { id: 4, path: '#projects', text: 'Projects' },
  { id: 5, path: '#contact', text: 'Contact' },
];

export const HERO_CONTENT: HeroContent = {
  badge: 'Available for freelance projects',
  name: 'DejvCodes',
  role: 'Medior Front-end Developer',
  description: 'I design and build websites, web apps and interfaces that turn ideas into clean, high-performing experiences with sharp UI and real-world usability.',
  viewWorkButton: 'View My Work',
  skillsButton: 'My Skills'
};

const yearOfExperience: number = new Date().getFullYear() - 2023;

export const BIO_BOX: BioBox = {
  title: 'Building Philosophy',
  paragraphs: [
    'DejvCodes is my personal brand focused on building modern, custom websites and web apps with clean, well-structured code. I create fast, responsive experiences that look great, feel smooth and are optimized for performance and SEO.',
    `${yearOfExperience}+ years of front-end experience - clean code, sharp UI, real-world results.`
  ]
}

const age: number = new Date().getFullYear() - 2002;

export const STATS_BOX: StatsBox = {
  location: 'Pardubice, Czechia',
  name: 'David Kalmus',
  age: `${age} years`,
  timezone: 'CET (UTC+1)'
};

export const DAILY_ESSENTIALS: DailyEssential[] = [
  { icon: 'Brain', label: 'Mindset', value: 'growth', percentage: 85 },
  { icon: 'Coffee', label: 'Coffee', value: '2-3 cups', percentage: 45 },
  { icon: 'Code', label: 'Coding', value: 'daily', percentage: 95 },
  { icon: 'Dumbbell', label: 'Gym', value: 'regular', percentage: 85 },
  { icon: 'Plane', label: 'Travel', value: 'passion', percentage: 70 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Freelance Web Developer',
    company: 'DejvCodes',
    period: '2026 - Present',
    description: 'Building custom websites with clean code, detail-focused UI, responsive layouts, on-page SEO and performance optimization using TypeScript, Next.js, and Tailwind CSS.'
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
  { icon: SiJavascript, language:  "JavaScript" },
  { icon: SiTypescript, language:  "TypeScript" },
  { icon: SiReact, language: "React" },
  { icon: SiNextdotjs, language: "Next.js" },
  { icon: SiVuedotjs, language:  "Vue 3" },
  { icon: SiNuxtdotjs, language: "Nuxt 3" },
  { icon: SiTailwindcss, language: "Tailwind" },
  { icon:  SiVite, language: "Vite" },
  { icon: SiGitlab, language: "Gitlab" },
  { icon: VscVscode, language: "VS Code" },
  { icon:  SiFigma, language: "Figma" },
  { icon: SiCypress, language: "Cypress" },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DejvCodes',
    link: 'https://dejvcodes.com',
    image: '/DejvCodes-project-1.webp',
  },
  {    
    id: '2',
    title: 'Nexa Yonder',
    link: 'https://nexa-yonder.netlify.app/',
    image: '/Nexa-Yonder-project-2.webp',
  }
];

export const CONTACT_CONTENT = {
  heading: 'Interested in working together?',
  description: "Available for new projects - let’s build something great.",
  buttonText: 'Get in touch',
  buttonLink: 'mailto:info@dejvcodes.com'
};

// Icons
import {FaGithub} from "react-icons/fa6"
import {FaLinkedin} from "react-icons/fa6"
import {FaEnvelope} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://www.instagram.com/dejvcodes/', icon: FaInstagram, width: 8, height: 8 },
  { name: 'GitHub', url: 'https://github.com/DejvCodes', icon: FaGithub, width: 8, height: 8 },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/dejvcodes-david-kalmus/', icon: FaLinkedin, width: 8, height: 8 },
  { name: 'Email', url: 'mailto:info@dejvcodes.com', icon: FaEnvelope, width: 8, height: 8 },
];

export const FOOTER_CONTENT = {
  name: 'David Kalmus',
  role: 'Medior Front-end Developer',
  location: 'Pardubice, Czech Republic',
  ico: 'IČO: 24078140',
  copyright: 'DejvCodes. All rights reserved.',
  privacyLink: '/privacy-policy',
  privacyText: 'Privacy Policy',
  badge: 'Built with Next.js & TypeScript',
  year: new Date().getFullYear()
};

// <div className="max-w-6xl mx-auto mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800/50">
//   {[
//     { label: 'Years Experience', value: '4+' },
//     { label: 'Completed Projects', value: '24+' },
//     { label: 'Happy Clients', value: '18+' },
//     { label: 'Lines of Code', value: '500k+' },
//   ].map((stat) => (
//     <div key={stat.label} className="space-y-1">
//       <div className="text-3xl font-bold text-white">{stat.value}</div>
//       <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</div>
//     </div>
//   ))}
// </div>