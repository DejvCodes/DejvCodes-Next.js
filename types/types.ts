import {IconType} from 'react-icons';

export interface NavLink {
  id: number;
  path: string;
  text: string;
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

export interface SkillIcon {
  icon: IconType;
  language: string;
} 

export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
  width: number;
  height: number;
}

export interface ContactContent {
  heading: string;
  subheading: string;
  buttonText: string;
  email: string;
}