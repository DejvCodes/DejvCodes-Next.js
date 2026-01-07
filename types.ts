export interface NavLink {
  id: number;
  path: string;
  text: string;
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface HeroContent {
  badge: string;
  name: string;
  role: string;
  description: string;
  viewWorkButton: string;
  skillsButton: string;
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
  icon: string;
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

// export interface SkillData {
//   subject: string;
//   A: number;
//   fullMark: number;
// }