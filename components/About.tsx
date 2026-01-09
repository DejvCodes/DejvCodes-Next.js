'use client';
import ScrollReveal from './ScrollReveal';
import {BIO_BOX, STATS_BOX, DAILY_ESSENTIALS, EXPERIENCE} from '../constants';
import {Briefcase, Terminal, Globe, Coffee, Code, Dumbbell, Plane, Brain, Sparkles} from 'lucide-react';

const iconMap = {
  Brain,
  Coffee,
  Code,
  Dumbbell,
  Plane,
};

const About: React.FC = () => {
  return <section id='about' className='bg-slate-900/30 py-20'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <ScrollReveal>
        <div className='mb-7'>
          <h2 className='text-white text-3xl md:text-4xl font-bold mb-2'>
            About <span className='text-light-blue'>Me</span>
          </h2>
          <div className='w-20 h-1.5 bg-light-blue rounded-full'></div>
        </div>
      </ScrollReveal>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
        {/* Bio Box */}
        <ScrollReveal delay={100} className='md:col-span-2'>
          <div className='h-full bg-slate-950 border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors p-7 md:p-8'>
            <div className='flex items-center gap-2 mb-4'>
              <Terminal className='w-6 h-6 text-light-blue' />
              <h3 className='text-xl font-bold text-white'>
                {BIO_BOX.title}
              </h3>
            </div>
            <p className='text-slate-300 leading-relaxed mb-3'>
              {BIO_BOX.paragraphs[0]}
            </p>
            <p className='text-slate-300 leading-relaxed'>
              {BIO_BOX.paragraphs[1]}
            </p>
          </div>
        </ScrollReveal>
        {/* Stats Box */}
        <ScrollReveal delay={200}>
          <div className='relative h-full flex flex-col justify-between bg-slate-950 border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors overflow-hidden group p-7 md:p-8'>
            <div className='absolute top-0 right-0 p-32 bg-light-blue/12 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-light-blue/20 transition-all'></div>
            <div>
              <div className='flex items-center text-light-blue gap-2 mb-3'>
                <Globe className='w-5 h-5' />
                <span className='font-medium'>Based in</span>
              </div>
              <p className='text-lg font-bold font-mono text-white mb-2'>
                {STATS_BOX.location}
              </p>
              <div className='grid grid-cols-2 gap-4 mb-3'>
                <div>
                  <p className='text-sm text-slate-500'>Name</p>
                  <p className='text-white font-mono'>{STATS_BOX.name}</p>
                </div>
                <div>
                  <p className='text-sm text-slate-500'>Age</p>
                  <p className='text-white font-mono'>{STATS_BOX.age}</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-slate-500 text-sm'>Timezone</p>
              <p className='text-white font-mono'>{STATS_BOX.timezone}</p>
            </div>
          </div>
        </ScrollReveal>
        {/* Daily Essentials Box */}
        <ScrollReveal delay={300} className='md:col-span-1'>
          <div className='h-full flex flex-col bg-slate-950 border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors p-7 md:p-8'>
            <div className='flex items-center gap-2 mb-6'>
                <Sparkles className='w-6 h-6 text-light-blue' />
                <h3 className='text-xl font-bold text-white'>Daily Essentials</h3>
            </div>
            <div className='space-y-6'>
              {DAILY_ESSENTIALS.map((item, index) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                return <div key={index}>
                  <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center gap-2'>
                      <Icon className='w-4 h-4 text-light-blue' />
                      <span className='text-slate-300 text-sm'>{item.label}</span>
                    </div>
                    <span className='text-[12px] uppercase text-slate-500'>{item.value}</span>
                  </div>
                  <div className='h-2 bg-slate-800 rounded-full overflow-hidden relative'>
                    <div 
                      className='h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full' 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </ScrollReveal>
        {/* Experience List */}
        <ScrollReveal delay={400} className='md:col-span-2'>
          <div className='bg-slate-950 border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors h-full p-7 md:p-8'>
            <div className='flex items-center gap-2 mb-5'>
              <Briefcase className='w-6 h-6 text-light-blue' />
              <h3 className='text-xl font-bold text-white'>Work History</h3>
            </div>
            <div className='space-y-5 md:space-y-8'>
              {EXPERIENCE.map((job) => (
                <div key={job.id} className='relative pl-4 md:pl-8 border-l border-slate-800 last:border-0'>
                  <div className='absolute -left-1.25 top-2 w-2.5 h-2.5 bg-light-blue rounded-full'></div>
                  <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1.5'>
                    <h4 className='text-white text-lg font-bold'>{job.role}</h4>
                    <span className='w-fit text-xs sm:text-sm font-mono text-light-blue text-center bg-light-blue/10 px-2 py-1 mt-1.5 sm:mt-0 rounded whitespace-nowrap'>{job.period}</span>
                  </div>
                  <p className='hidden sm:block text-slate-300 text-[12px] font-medium mb-1'>{job.company}</p>
                  <p className='text-slate-500 text-[13px] leading-relaxed'>{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
}

export default About