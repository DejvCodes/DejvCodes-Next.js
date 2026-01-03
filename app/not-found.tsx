'use client';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b! from-black! to-slate-900!">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Sorry, but the page you are looking for does not exist.
        </p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
