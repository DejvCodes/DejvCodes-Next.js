'use client';
import Link from 'next/link';
import {FaEnvelope} from 'react-icons/fa';
import {CONTACT_CONTENT} from '@/constants/content';
import {useState, useEffect, FormEvent} from 'react';
import {FormStatus, type FormData} from '@/types/types';

const contactFormInitialData: FormData = {
	name: '',
	email: '',
	subject: '',
	message: '',
	website: '', // honeypot field
};

const ContactForm = () => {
	const [csrf, setCsrf] = useState<string>('');
	const [formData, setFormData] = useState<FormData>(contactFormInitialData);
	const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
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
		formBody.append('name', formData.name);
		formBody.append('email', formData.email);
		formBody.append('subject', formData.subject);
		formBody.append('message', formData.message);
		formBody.append('website', formData.website);
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
				setResponseMessage(data.message || CONTACT_CONTENT.form.successMessage);
				setFormData(contactFormInitialData);
			} else {
				// if submission fails, show error message
				setStatus(FormStatus.ERROR);
				setResponseMessage(data.message || CONTACT_CONTENT.form.errorMessage);
			}
		} catch {
			// if there's an error during submission, show error message
			setStatus(FormStatus.ERROR);
			setResponseMessage(CONTACT_CONTENT.form.errorMessage);
		}
	};

	const inputClass = 'w-full px-5 py-4 bg-slate-900/50 border border-slate-700/60 rounded-xl text-white text-base placeholder-slate-500 focus:outline-none focus:border-light-blue focus:ring-1 focus:ring-light-blue/50 transition-all duration-200 hover:border-slate-600 autofill:bg-slate-900/50 autofill:text-white autofill:shadow-[inset_0_0_0px_1000px_rgb(15_23_42_/_0.5)]';

	return <div className='w-full'>
		<style jsx>{`input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {-webkit-background-clip: text; -webkit-text-fill-color: #ffffff; transition: background-color 5000s ease-in-out 0s;}`}</style>
		{/* Form */}
		<form
			onSubmit={handleSubmit}
			className='max-w-5xl mx-auto'
		>
			<div className='grid lg:grid-cols-2 gap-5 mb-6'>
				<div className='space-y-4'>
					<input
						id='name'
						type='text'
						required
						maxLength={80}
						value={formData.name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
						className={inputClass}
						placeholder={CONTACT_CONTENT.form.nameLabel}
					/>
					<input
						id='email'
						type='email'
						required
						maxLength={120}
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
						className={inputClass}
						placeholder={CONTACT_CONTENT.form.emailLabel}
					/>
					<input
						id='subject'
						type='text'
						required
						maxLength={200}
						value={formData.subject}
						onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
						className={inputClass}
						placeholder={CONTACT_CONTENT.form.subjectLabel}
					/>
				</div>
				<div className='h-full'>
					<textarea
						id='message'
						required
						maxLength={4000}
						value={formData.message}
						onChange={(e) => setFormData({ ...formData, message: e.target.value })}
						className={`${inputClass} resize-none h-full min-h-45`}
						placeholder={CONTACT_CONTENT.form.messageLabel}
					/>
				</div>
			</div>
			<div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
				<button
					type='submit'
					disabled={status === FormStatus.LOADING}
					className='w-full flex items-center justify-center sm:w-auto px-8 py-3 bg-light-blue text-slate-950 font-semibold rounded-xl hover:bg-slate-200 transition-all gap-2 group'
				>
					{status === FormStatus.LOADING ? CONTACT_CONTENT.form.submitButtonLoading : CONTACT_CONTENT.form.submitButton}
				</button>

				<Link
					href={`mailto:${CONTACT_CONTENT.email}`}
					className='text-light-blue hover:text-slate-200 font-semibold text-lg transition-colors duration-200 inline-flex items-center gap-2'
				>
					<FaEnvelope className='w-5 h-5' />
					{CONTACT_CONTENT.email}
				</Link>
			</div>

			{/* Response Message */}
			{responseMessage && (
				<div
					className={`text-center font-medium rounded-xl animate-in fade-in slide-in-from-bottom-3 mt-6 p-3 duration-500 ${status === FormStatus.SUCCESS
						? 'bg-green-500/15 border border-green-500/40 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
						: 'bg-red-500/15 border border-red-500/40 text-red-400 shadow-[0_0_20px_rgba(239,68,68,0.2)]'
						}`}
				>
					{responseMessage}
				</div>
			)}
		</form>
	</div>
};

export default ContactForm;
