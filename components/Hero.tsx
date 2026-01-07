'use client';
import Link from 'next/link';
import {HERO_CONTENT} from '../constants';
import {ArrowRight, ArrowDown} from 'lucide-react';

const Hero: React.FC = () => {
  return <section 
    id="home" 
    className="relative min-h-dvh flex items-center justify-center bg-linear-to-b from-black via-slate-960 to-slate-950 overflow-hidden pt-7"
  >
    <div className="relative max-w-7xl text-center mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <div className="inline-block mb-3 sm:mb-6 px-4 py-1.5 rounded-full bg-slate-900/10 backdrop-blur-sm animate-fade-in-down">
        <span className="text-sm sm:text-xl xl:text-base font-medium bg-linear-to-r from-light-blue to-purple-500 bg-clip-text text-transparent">
          {HERO_CONTENT.badge}
        </span>
      </div>
    
      <h1 
        className="text-3.5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-8 text-white animate-fade-in-up!" 
        style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
      > 
        Hi, I'm <span className="text-light-blue">{HERO_CONTENT.name}</span>.
        <br />
        <span className="text-slate-400">{HERO_CONTENT.role}</span>
      </h1>
        
      <p 
        className="max-w-2xl mx-auto text-sm md:text-xl text-slate-300 mb-6 sm:mb-10 leading-relaxed animate-fade-in-up" 
        style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
      >
        {HERO_CONTENT.description}
      </p>
        
      <div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" 
        style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}
      >
        <Link
          href="#projects" 
          className="w-60! flex items-center justify-center sm:w-auto px-8 py-3 bg-light-blue text-slate-950 font-semibold rounded-xl hover:bg-slate-200 transition-all gap-2 group"
        >
          {HERO_CONTENT.viewWorkButton}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="#skills" 
          className="w-60! flex items-center justify-center sm:w-auto px-8 py-3 bg-slate-900/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 transition-all gap-2"
        >
          <ArrowDown className="w-4 h-4" />
          {HERO_CONTENT.skillsButton}
        </Link>
      </div>
    </div>

    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-1.5 bg-light-blue rounded-full"></div>
      </div>
    </div>
  </section>
}

export default Hero