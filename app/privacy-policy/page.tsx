import Link from 'next/link';
import type {Metadata} from 'next';
import {PRIVACY_POLICY_CONTENT} from '@/constants/content';

export const metadata: Metadata = {
	alternates: {
		canonical: 'https://dejvcodes.com/privacy-policy/'
	}
};

const PrivacyPolicy = () => {
	return <main
		className='min-h-screen py-20'
	>
		<div className='max-w-(--max-width) mx-auto px-4 sm:px-6 lg:px-8'>
			<span className='w-fit text-xs font-semibold tracking-[0.2em] uppercase text-light-blue bg-light-blue/10 border border-light-blue/30 px-4 py-2 rounded-full'>
				{PRIVACY_POLICY_CONTENT.badge}
			</span>
			<h1 className='text-4xl font-bold text-white mt-4 mb-6'>{PRIVACY_POLICY_CONTENT.title}</h1>
			<div className='space-y-8 text-slate-300'>
				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>{PRIVACY_POLICY_CONTENT.controller.title}</h2>
					<div className='text-slate-300 space-y-1'>
						<p>{PRIVACY_POLICY_CONTENT.controller.name}</p>
						<p>{PRIVACY_POLICY_CONTENT.controller.location}</p>
						<p>
							{PRIVACY_POLICY_CONTENT.controller.emailLabel}{' '}
							<a href={`mailto:${PRIVACY_POLICY_CONTENT.email}`} className='text-light-blue hover:underline'>
								{PRIVACY_POLICY_CONTENT.email}
							</a>
						</p>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>{PRIVACY_POLICY_CONTENT.dataProcessing.title}</h2>
					<div className='space-y-6 leading-relaxed'>
						{PRIVACY_POLICY_CONTENT.dataProcessing.sections.map((section, index) => {
							return <div key={index} className='space-y-2'>
								<h3 className='text-xl font-semibold text-white'>{section.title}</h3>
								<p>{section.intro}</p>
								{section.list && <ul className='list-disc pl-5 space-y-1'>
									{section.list.map((item, itemIndex) => {
										return <li key={itemIndex}>{item}</li>
									})}
								</ul>}
								<div className='space-y-2 pt-2'>
									<p><strong>{PRIVACY_POLICY_CONTENT.dataProcessing.purposeLabel}</strong> {section.purpose}</p>
									<p><strong>{PRIVACY_POLICY_CONTENT.dataProcessing.legalBasisLabel}</strong> {section.legalBasis}</p>
									<p><strong>{PRIVACY_POLICY_CONTENT.dataProcessing.retentionLabel}</strong> {section.retention}</p>
								</div>
							</div>
						})}
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>{PRIVACY_POLICY_CONTENT.cookies.title}</h2>
					<div className='space-y-2 leading-relaxed'>
						<p>{PRIVACY_POLICY_CONTENT.cookies.intro}</p>
						<p>{PRIVACY_POLICY_CONTENT.cookies.description}</p>
						<ul className='list-disc pl-5 space-y-1'>
							{PRIVACY_POLICY_CONTENT.cookies.list.map((item, index) => {
								return <li key={index}>{item}</li>
							})}
						</ul>
						<p>{PRIVACY_POLICY_CONTENT.cookies.outro}</p>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>{PRIVACY_POLICY_CONTENT.security.title}</h2>
					<p className='leading-relaxed'>{PRIVACY_POLICY_CONTENT.security.description}</p>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>{PRIVACY_POLICY_CONTENT.recipients.title}</h2>
					<p className='leading-relaxed mb-2'>{PRIVACY_POLICY_CONTENT.recipients.intro}</p>
					<ul className='list-disc pl-5 space-y-1 leading-relaxed'>
						{PRIVACY_POLICY_CONTENT.recipients.list.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
					<p className='leading-relaxed pt-2'>{PRIVACY_POLICY_CONTENT.recipients.outro}</p>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>{PRIVACY_POLICY_CONTENT.rights.title}</h2>
					<p className='leading-relaxed mb-2'>{PRIVACY_POLICY_CONTENT.rights.intro}</p>
					<ul className='list-disc pl-5 space-y-1 leading-relaxed'>
						{PRIVACY_POLICY_CONTENT.rights.list.map((item, index) => {
							return <li key={index}>{item}</li>
						})}
					</ul>
					<p className='leading-relaxed pt-2'>
						{PRIVACY_POLICY_CONTENT.rights.outro}{' '}
						<a href={`mailto:${PRIVACY_POLICY_CONTENT.email}`} className='text-light-blue hover:underline'>
							{PRIVACY_POLICY_CONTENT.email}
						</a>
						.
					</p>
				</section>
			</div>

			<Link
				href='/'
				className='inline-block bg-slate-900/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-colors duration-300 px-10 py-3 mt-7'
			>
				{PRIVACY_POLICY_CONTENT.backHomeText}
			</Link>
		</div>
	</main>
};

export default PrivacyPolicy;
