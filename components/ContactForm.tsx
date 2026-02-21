'use client';
import Link from 'next/link';
import {CONTACT_CONTENT} from '@/constants/content';
import {useState, useEffect, FormEvent} from 'react';
import {FormStatus, type FormData} from '@/types/types';

const initialData: FormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
	privacyAccepted: false,
	website: '', // honeypot field
};

const ContactForm = () => {
	const CheckIcon = CONTACT_CONTENT.form.checkIcon;
	const EmailIcon = CONTACT_CONTENT.form.emailIcon;
	const [csrf, setCsrf] = useState<string>('');
	const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
	const [formData, setFormData] = useState<FormData>(initialData);
	const [responseMessage, setResponseMessage] = useState<string>('');

	useEffect(() => {
		// fetch CSRF token on component mount
		fetch('/form-token.php')
			.then(res => res.json())
			.then(data => setCsrf(data.csrf))
			.catch(() => setStatus(FormStatus.ERROR));
	}, []);

	// handle form submission
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // prevent default form submission
		setStatus(FormStatus.LOADING); // set loading state
		setResponseMessage(''); // clear previous messages

		// prepare form data for submission
		const formBody = new FormData();
		formBody.append('inputName', formData.name);
		formBody.append('inputEmail', formData.email);
		formBody.append('inputSubject', formData.subject);
		formBody.append('inputMessage', formData.message);
		formBody.append('inputWebsite', formData.website);
		formBody.append('inputPrivacyPolicy', formData.privacyAccepted ? 'agree' : 'off');
		formBody.append('csrf', csrf);

		try {
			// send form data to the server
			const res = await fetch('/form.php', {
				method: 'POST',
				body: formBody,
			});

			// parse response from the server
			const data = await res.json();

			if (data.ok) {
				// if submission is successful, show success message and reset form
				setStatus(FormStatus.SUCCESS);
				setResponseMessage(data.message);
				setFormData(initialData);
			} else {
				// if submission fails, show error message
				setStatus(FormStatus.ERROR);
				setResponseMessage(data.message);
			}
		} catch {
			// handle network or unexpected errors
			setStatus(FormStatus.ERROR);
			setResponseMessage(CONTACT_CONTENT.form.errorMessage);
		}

		setTimeout(() => {
			// reset status and clear response message
			setResponseMessage('');
			setStatus(FormStatus.IDLE);
		}, 3500);
	};

	const inputClass = 'w-full text-base text-white bg-slate-900/50 border border-slate-700/60 rounded-xl placeholder-slate-500 focus:outline-none focus:border-light-blue focus:ring-1 focus:ring-light-blue/50 transition-all duration-200 hover:border-slate-600 autofill:bg-slate-900/50 autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_rgb(15_23_42_/_0.5)] px-5 py-4';

	return <div
		className='w-full'
	>
		{/* Form */}
		<form
			id='form'
			onSubmit={handleSubmit}
			className='max-w-5xl mx-auto'
		>
			<div className='grid lg:grid-cols-2 gap-5 mb-5'>
				<div className='space-y-4'>
					<input
						id='name'
						type='text'
						name='inputName'
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						placeholder={CONTACT_CONTENT.form.nameLabel}
						className={inputClass}
						maxLength={80}
						required
					/>
					<input
						id='email'
						type='email'
						name='inputEmail'
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						placeholder={CONTACT_CONTENT.form.emailLabel}
						className={inputClass}
						maxLength={120}
						required
					/>
					<input
						id='subject'
						type='text'
						name='inputSubject'
						value={formData.subject}
						onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
						placeholder={CONTACT_CONTENT.form.subjectLabel}
						className={inputClass}
						maxLength={200}
						required
					/>
				</div>
				<div className='h-full'>
					<textarea
						id='message'
						name='inputMessage'
						value={formData.message}
						onChange={(e) => setFormData({ ...formData, message: e.target.value })}
						placeholder={CONTACT_CONTENT.form.messageLabel}
						className={`${inputClass} resize-none h-full min-h-45`}
						maxLength={4000}
						required
					/>
				</div>
				{/* Honeypot Field */}
				<input
					id='website'
					type='text'
					name='inputWebsite'
					value={formData.website}
					onChange={(e) => setFormData({ ...formData, website: e.target.value })}
					className='hidden'
					autoComplete='off'
					tabIndex={-1}
				/>
			</div>

			<div className='mb-5 ml-0.5'>
				<label htmlFor='privacy-policy' className='flex items-center text-sm text-slate-300 cursor-pointer gap-2'>
					<div className='relative flex items-center justify-center'>
						<input
							id='privacy-policy'
							type='checkbox'
							name='inputPrivacyPolicy'
							checked={formData.privacyAccepted}
							onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
							className='w-5 h-5 peer appearance-none bg-slate-900/50 border border-slate-700 rounded-md checked:bg-light-blue checked:border-light-blue focus:outline-none focus:ring-1 focus:ring-light-blue/50 transition-all duration-200 cursor-pointer'
							required
						/>
						<CheckIcon className='absolute w-3 h-3 text-slate-950 opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none' />
					</div>
					<span>
						{CONTACT_CONTENT.form.privacyConsentPrefix} <Link
							href={CONTACT_CONTENT.form.privacyLink}
							className='text-slate-400/80 hover:text-light-blue hover:underline underline-offset-4 transition-colors'
						>
							{CONTACT_CONTENT.form.privacyLinkText}
						</Link>
					</span>
				</label>
			</div>

			<div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
				<button
					type='submit'
					disabled={status === FormStatus.LOADING}
					className='w-full sm:w-auto flex items-center justify-center bg-light-blue text-slate-950 font-semibold rounded-xl hover:bg-slate-200 transition-all gap-2 px-8 py-3 group cursor-pointer'
				>
					{status === FormStatus.LOADING ? CONTACT_CONTENT.form.submitButtonLoading : CONTACT_CONTENT.form.submitButton}
				</button>

				<Link
					href={`mailto:${CONTACT_CONTENT.email}`}
					className='inline-flex items-center text-lg font-semibold text-light-blue hover:text-slate-200 transition-colors duration-200 gap-2'
				>
					<EmailIcon className='w-5 h-5' />
					{CONTACT_CONTENT.email}
				</Link>
			</div>

			{/* Response Message */}
			{responseMessage && (
				<div
					className={`text-center font-medium rounded-xl animate-in fade-in slide-in-from-bottom-3 mt-6 p-3 duration-500
						${status === FormStatus.SUCCESS
							? 'bg-green-500/15 border border-green-500/40 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)]'
							: 'bg-red-500/15 border border-red-500/40 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.5)]'
						}`}
				>
					{responseMessage}
				</div>
			)}
		</form>
	</div>
};

export default ContactForm;
