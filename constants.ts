import {BioBox, DailyEssential, Experience, HeroContent, NavLink, StatsBox} from './types';

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
  description: 'I design and build websites, apps, and interfaces that turn ideas into clean, high-performing experiences with sharp UI and real-world usability.',
  viewWorkButton: 'View My Work',
  skillsButton: 'My Skills'
};

const yearOfExperience: number = new Date().getFullYear() - 2023;

export const BIO_BOX: BioBox = {
  title: 'Engineering Philosophy',
  paragraphs: [
    'DejvCodes is my personal brand focused on building modern, custom websites and web apps with clean, well-structured code. I create fast, responsive experiences that look great, feel smooth, and are optimized for performance and SEO.',
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
    period: '2025 - Present',
    description: 'Building custom websites with clean code, detail-focused UI, responsive layouts, on-page SEO and performance optimization using TypeScript, Next.js, and Tailwind CSS.'
  },
  {
    id: '2',
    role: 'Front-end Developer',
    company: '',
    period: '2025 - Present',
    description: 'Building an e-commerce web app for online stores with Vue 3, Nuxt 3 and TypeScript. Refactoring and optimizing the codebase, shipping features, integrating GraphQL via Apollo, writing Cypress tests and collaborating on UI/UX.'
  },
  {
    id: '3',
    role: 'Electromechanic',
    company: 'Ignitech s.r.o.',
    period: '2023 - 2025',
    description: 'Building and testing motorcycle electronics (ignition systems, connectors, wiring harnesses), tuning ignition settings and performing final functional checks.'
  }
];


// import SkillsChart from './SkillsChart';
// export const SKILLS_DATA: SkillData[] = [
//   { subject: 'JavaScript', A: 95, fullMark: 100 },
//   { subject: 'TypeScript', A: 95, fullMark: 100 },
//   { subject: 'React', A: 95, fullMark: 100 },
//   { subject: 'Next.js', A: 90, fullMark: 100 },
//   { subject: 'Vue 3', A: 90, fullMark: 100 },
//   { subject: 'Nuxt 3', A: 85, fullMark: 100 },
//   { subject: 'Tailwind', A: 95, fullMark: 100 },
//   { subject: 'Figma', A: 85, fullMark: 100 },
// ];

{/* Skills Chart Box */}
{/* <ScrollReveal delay={300} className='md:col-span-1'>
  <div className='bg-slate-950 border border-slate-800 rounded-3xl p-4 flex flex-col hover:border-slate-700 transition-colors h-full'>
  <div className='flex items-center gap-3 px-4 pt-4'>
      <Cpu className='w-6 h-6 text-brand-400' />
      <h3 className='text-xl font-bold text-white'>Technical Arsenal</h3>
  </div>
  <div className='flex-1 flex items-center justify-center'>
    <SkillsChart />
  </div>
  </div>
</ScrollReveal> */}