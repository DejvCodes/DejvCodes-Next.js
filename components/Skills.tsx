'use client';
import Link from 'next/link';
import {SKILLS_ICONS} from '@/constants';
import ScrollReveal from './ScrollReveal';

const Skills: React.FC = () => {
  return <section
    id='skills'
    className='relative bg-slate-900/40 py-17 sm:py-24 overflow-hidden'
  >
    <div className='max-w-7xl grid lg:grid-cols-2 items-start mx-auto px-4 sm:px-6 lg:px-8 gap-8 sm:gap-12 z-10'>
      <ScrollReveal delay={100}>
        <div className='space-y-3 sm:space-y-4'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white'>
            Skills & <br />
            <span className='text-light-blue'>Experience</span>
          </h2>

          <p className='text-slate-300 md:text-lg leading-relaxed lg:max-w-xl'>
            I specialize in building production-ready apps with{' '}
            <span className='text-light-blue font-semibold'>Next.js</span> and{' '}
            <span className='text-light-blue font-semibold'>React</span>,
            crafting type-safe code with{' '}
            <span className='text-light-blue font-semibold'>TypeScript</span>,
            and creating responsive UIs with{' '}
            <span className='text-light-blue font-semibold'>Tailwind CSS</span>.
            Currently working with{' '}
            <span className='text-light-blue font-semibold'>Vue 3</span> and{' '}
            <span className='text-light-blue font-semibold'>Nuxt 3</span> on
            e-commerce solutions.
          </p>

          <p className='text-sm md:text-base text-slate-500 leading-relaxed'>
            Every project is optimized for performance, SEO and real-world
            usability - delivering fast, accessible experiences that work
            flawlessly across all devices.
          </p>

          <Link
            href='#projects'
            scroll={false}
            className='w-50! sm:w-60! flex items-center justify-center bg-slate-900/50 text-white font-semibold rounded-xl border border-slate-700 hover:bg-slate-800 transition-all px-8 py-3'
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              history.replaceState(null, '', '#projects'); // Update URL without reloading
            }}
          >
            View Projects
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <div className='flex flex-wrap lg:justify-end items-center gap-3 sm:gap-7'>
          {SKILLS_ICONS.map((icon, index) => {
            return (
              <div
                key={index}
                className='w-25 h-25 sm:w-30 sm:h-30 flex flex-col items-center justify-center text-sm text-slate-300 bg-slate-950 border border-slate-800 rounded-2xl transition-all duration-200 ease-linear py-6 px-3 hover:border-slate-700 hover:bg-slate-900/50'
              >
                <i className={`${icon.icon} text-4xl sm:text-5xl mb-2`}></i>
                <h4 className='font-medium text-center'>{icon.language}</h4>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </div>
  </section>
}

export default Skills