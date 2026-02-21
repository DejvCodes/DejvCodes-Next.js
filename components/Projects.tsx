'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useState} from 'react';
import ScrollReveal from './ScrollReveal';
import {PROJECTS_CONTENT} from '../constants/content';

const Projects = () => {
	const ExternalLinkIcon = PROJECTS_CONTENT.externalLinkIcon;
	const [activeCard, setActiveCard] = useState<string|null>(null);

	const handleCardClick = (projectId: string, e: React.MouseEvent) => {
		if (window.innerWidth >= 1024) return; // do nothing on large screens
		e.preventDefault();
		setActiveCard(activeCard === projectId ? null : projectId); // switch active card
	};

	return <section
		id='projects'
		className='relative bg-slate-900/30 py-17 sm:py-24'
	>
		<div className='max-w-(--max-width) mx-auto px-4 sm:px-6 lg:px-8'>
			<ScrollReveal>
				<div className='mb-7'>
					<h2 className='text-white font-bold text-3xl md:text-4xl mb-2'>
						{PROJECTS_CONTENT.title} <span className='text-light-blue'>{PROJECTS_CONTENT.titleAccent}</span>
					</h2>
					<div className='w-20 h-1.5 bg-light-blue rounded-full' />
				</div>
			</ScrollReveal>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
				{PROJECTS_CONTENT.items.map((project, index) => {
					const isActive = activeCard === project.id;

					return (
						<ScrollReveal key={project.id} delay={index * 100}>
							<div
								key={project.id}
								className='h-55 sm:h-63 group relative overflow-hidden rounded-2xl bg-slate-900/30 cursor-pointer lg:cursor-default'
								onClick={(e) => handleCardClick(project.id, e)}
							>
								<Image
									src={project.image}
									alt={project.title}
									fill
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
									className='object-cover transition-transform duration-700'
									priority={index === 0}
								/>

								<div className={`absolute inset-0 flex flex-col justify-end bg-slate-950/50 ${isActive ? 'opacity-100' : 'opacity-0'} lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 p-7 ${!isActive ? 'pointer-events-none' : ''} lg:pointer-events-auto`}>
									<div className={`transform ${isActive ? 'translate-y-0' : 'translate-y-4'} lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500`}>
										<Link
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
											className='flex justify-between items-end'
											onClick={(e) => e.stopPropagation()}
										>
											<h4 className='text-2xl font-bold text-white'>
												{project.title}
											</h4>
											<ExternalLinkIcon className='w-8 h-8 transform transition-transform' />
										</Link>
									</div>
								</div>
							</div>
						</ScrollReveal>
					)
				})}
			</div>
		</div>
	</section>
};

export default Projects;
