'use client';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import {SOCIAL_LINKS, CONTACT_CONTENT} from "@/constants/content";

const Contact = () => {
	return <section
		id="contact"
		className="relative bg-slate-900/40 overflow-hidden py-20 2xl:py-24"
	>
		<div className="relative max-w-4xl text-center mx-auto px-4 z-10">
			<ScrollReveal>
				<h2 className="text-3xl md:text-5xl font-bold text-white mb-8 2xl:mb-14">
					{CONTACT_CONTENT.heading}
				</h2>
			</ScrollReveal>
			<ScrollReveal delay={100}>
				<p className="max-w-2xl text-slate-400 text-lg mb-12 mx-auto">
					{CONTACT_CONTENT.description}
				</p>
			</ScrollReveal>
			<ScrollReveal delay={200}>
				<Link
					href={CONTACT_CONTENT.buttonLink}
					className="inline-flex items-center justify-center text-lg font-semibold text-slate-950 bg-light-blue rounded-xl hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(13,154,255,0.4)] hover:shadow-[0_0_40px_rgba(13,154,255,0.6)] transform hover:-translate-y-1 px-8 py-4 "
				>
					{CONTACT_CONTENT.buttonText}
				</Link>
			</ScrollReveal>
			<ScrollReveal delay={300}>
				<div className="flex items-center justify-center gap-10 sm:gap-17 mt-14 2xl:mt-20">
					{SOCIAL_LINKS.map((oneLink, index) => {
						const { url, icon: Icon, name } = oneLink;

						return <Link
							key={index}
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-slate-400 hover:text-light-blue transition-all hover:-translate-y-0.75"
							aria-label={name}
						>
							<Icon className={`w-${oneLink.width} h-${oneLink.height}`} />
						</Link>
					})}
				</div>
			</ScrollReveal>
		</div>
	</section>
};

export default Contact;
