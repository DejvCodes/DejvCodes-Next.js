import Link from 'next/link';

const NotFound = () => {
	return <div
		className='min-h-screen flex items-center justify-center bg-linear-to-b from-black via-slate-900 to-slate-950'
	>
		<div className='text-center px-4'>
			<h1 className='text-9xl text-white font-bold mb-4'>404</h1>
			<h2 className='text-3xl md:text-4xl font-semibold text-gray-300 mb-6'>
				Page Not Found
			</h2>
			<p className='text-gray-400 text-lg mb-8'>
				Sorry, but the page you are looking for does not exist.
			</p>
			<Link
				href='/'
				className='inline-block bg-slate-900/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-colors duration-300 px-10 py-3'
			>
				Back to Home
			</Link>
		</div>
	</div>
};

export default NotFound;
