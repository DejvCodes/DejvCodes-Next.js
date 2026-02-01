'use client';
import Link from 'next/link';
import {SKILLS_ICONS} from '@/constants/content';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
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
						I build production-ready web apps with{' '}
						<span className='text-light-blue font-semibold'>Next.js</span> and{' '}
						<span className='text-light-blue font-semibold'>React</span>,
						writing type-safe code with{' '}
						<span className='text-light-blue font-semibold'>TypeScript </span>
						and creating responsive UI with{' '}
						<span className='text-light-blue font-semibold'>Tailwind CSS</span>.
						I also work daily with{' '}
						<span className='text-light-blue font-semibold'>Vue 3</span> and{' '}
						<span className='text-light-blue font-semibold'>Nuxt 3</span> on an
						e-commerce app.
					</p>

					<p className='text-sm md:text-base text-slate-500 leading-relaxed mb-4 sm:mb-5'>
						Every project is optimized for performance, SEO and real-world
						usability - delivering fast, accessible experiences that work
						flawlessly across all devices.
					</p>

					<Link
						href='#projects'
						scroll={false}
						className='w-50! sm:w-60! flex items-center justify-center bg-slate-900/50 text-light-blue font-semibold rounded-xl border-2 border-light-blue/40 hover:bg-slate-800 transition-all px-8 py-3'
						onClick={(e) => {
							e.preventDefault();
							document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
							history.replaceState(null, '', '#projects'); // update URL without reloading
						}}
					>
						View Projects
					</Link>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={300}>
				<div className='flex flex-wrap lg:justify-end items-center gap-1.5 sm:gap-7'>
					{SKILLS_ICONS.map((icon, index) => {
						const Icon = icon.icon;

						return <div
							key={index}
							className='w-20 h-20 sm:w-30 sm:h-30 flex flex-col items-center justify-center text-sm text-slate-300 bg-slate-950 border border-slate-800 rounded-2xl transition-all duration-200 ease-linear hover:border-slate-700 hover:bg-slate-900/50'
						>
							<Icon className='text-3xl sm:text-5xl mb-2' />
							<h4 className='text-[11px] text-sm font-medium text-center'>{icon.language}</h4>
						</div>
					})}
				</div>
			</ScrollReveal>
		</div>
	</section>
};

export default Skills;
