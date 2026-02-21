'use client';
import Link from 'next/link';
import {SKILLS_CONTENT, SKILLS_ICONS} from '@/constants/content';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
	return <section
		id='skills'
		className='relative bg-slate-900/40 py-17 sm:py-24 overflow-hidden'
	>
		<div className='max-w-(--max-width) grid lg:grid-cols-2 items-start mx-auto px-4 sm:px-6 lg:px-8 gap-8 sm:gap-12 z-10'>
			<ScrollReveal delay={100}>
				<div className='space-y-3 sm:space-y-4'>
					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white'>
						{SKILLS_CONTENT.title} <br />
						<span className='text-light-blue'>{SKILLS_CONTENT.titleAccent}</span>
					</h2>

					<p className='text-slate-300 md:text-lg leading-relaxed lg:max-w-xl'>
						{SKILLS_CONTENT.description}
					</p>

					<p className='text-sm md:text-base text-slate-500 leading-relaxed mb-4 sm:mb-5'>
						{SKILLS_CONTENT.summary}
					</p>

					<Link
						href='#projects'
						scroll={false}
						className='w-52! sm:w-60! flex items-center justify-center bg-slate-900/50 text-light-blue font-semibold rounded-xl border-2 border-light-blue/40 hover:bg-slate-800 transition-all px-8 py-3'
						onClick={(e) => {
							e.preventDefault();
							document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
							history.replaceState(null, '', '#projects'); // update URL without reloading
						}}
					>
						{SKILLS_CONTENT.projectsButton}
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
