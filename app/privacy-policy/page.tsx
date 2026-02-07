import Link from 'next/link';

const PrivacyPolicy = () => {
	return <main
		className='min-h-screen py-20'
	>
		<div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
			<span className='w-fit text-xs font-semibold tracking-[0.2em] uppercase text-light-blue bg-light-blue/10 border border-light-blue/30 px-4 py-2 rounded-full'>
				Updated Privacy Policy
			</span>
			<h1 className='text-4xl font-bold text-white mt-4 mb-6'>Privacy Policy</h1>
			<div className='space-y-8 text-slate-300'>
				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>Data Controller</h2>
					<div className='text-slate-300 space-y-1'>
						<p>David Kalmus</p>
						<p>Pardubice, Czech Republic</p>
						<p>
							Email:{' '}
							<a href='mailto:info@dejvcodes.com' className='text-light-blue hover:underline'>
								info@dejvcodes.com
							</a>
						</p>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>What Data I Process and Why?</h2>
					<div className='space-y-6 leading-relaxed'>
						<div className='space-y-2'>
							<h3 className='text-xl font-semibold text-white'>1. Contact Form / Email Communication</h3>
							<p>If you contact me via the website form or email, I process the data you provide, typically:</p>
							<ul className='list-disc pl-5 space-y-1'>
								<li>name</li>
								<li>email</li>
								<li>subject of the message</li>
								<li>message content (and phone number if you include it)</li>
							</ul>
							<div className='space-y-3 pt-2'>
								<p><strong>Purpose:</strong> handling your inquiry/quote and follow-up communication.</p>
								<p><strong>Legal basis:</strong> steps toward a contract at your request (Art. 6(1)(b) GDPR) and/or
									legitimate interest in handling inquiries (Art. 6(1)(f) GDPR).</p>
								<p><strong>Retention:</strong> for as long as needed to address your request, but no longer than 12 months
									from the last communication unless a contract or another legal reason requires longer storage.</p>
							</div>
						</div>
						<div className='space-y-2'>
							<h3 className='text-xl font-semibold text-white'>2. Technical Data and Server Logs</h3>
							<p>
								When you visit the website, basic technical data may be stored automatically in hosting server logs
								(e.g., IP address, date and time of access, requested page, browser/device information).
							</p>
							<div className='space-y-2'>
								<p><strong>Purpose:</strong> security, abuse prevention, and technical operation of the website.</p>
								<p><strong>Legal basis:</strong> legitimate interest (Art. 6(1)(f) GDPR).</p>
								<p><strong>Retention:</strong> up to 12 months (or according to hosting settings).</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>Cookies</h2>
					<div className='space-y-2 leading-relaxed'>
						<p>This website does not use analytics or marketing cookies and does not measure traffic or track user behavior.</p>
						<p>
							The site uses only essential technical cookies related to securing the contact form (session cookie), specifically for:
						</p>
						<ul className='list-disc pl-5 space-y-1'>
							<li>protection against form abuse</li>
							<li>verification of a security token (CSRF)</li>
						</ul>
						<p>These cookies are necessary for secure operation and do not require consent. You can delete or block cookies in your browser settings at any time.</p>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>Security</h2>
					<p className='leading-relaxed'>
						Communication with the website uses HTTPS encryption. Additional security mechanisms protect the contact form
						(e.g., CSRF protection and request limiting).
					</p>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>Recipients of Personal Data</h2>
					<p className='leading-relaxed mb-2'>Personal data may be accessed only to the necessary extent by:</p>
					<ul className='list-disc pl-5 space-y-1 leading-relaxed'>
						<li>the web hosting and related service provider (server logs)</li>
						<li>the email service provider (message delivery)</li>
					</ul>
					<p className='leading-relaxed pt-2'>Data is not shared with third parties for marketing purposes.</p>
				</section>

				<section>
					<h2 className='text-2xl font-semibold text-white mb-4'>Your Rights</h2>
					<p className='leading-relaxed mb-2'>You have the right to:</p>
					<ul className='list-disc pl-5 space-y-1 leading-relaxed'>
						<li>request access to your personal data</li>
						<li>request rectification or erasure</li>
						<li>request restriction of processing</li>
					</ul>
					<p className='leading-relaxed pt-2'>
						For questions, contact me at{' '}
						<a href='mailto:info@dejvcodes.com' className='text-light-blue hover:underline'>
							info@dejvcodes.com
						</a>
						.
					</p>
				</section>
			</div>

			<Link
				href='/'
				prefetch={false}
				className='inline-block bg-slate-900/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-colors duration-300 px-10 py-3 mt-7'
			>
				Back to Home
			</Link>
		</div>
	</main>
};

export default PrivacyPolicy;
