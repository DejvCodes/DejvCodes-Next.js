import Link from "next/link";

const PrivacyPolicy = () => {
  return <main className="min-h-screen py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Privacy Policy
      </h1>

      <div className="space-y-8 text-slate-300">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Operator</h2>
          <div className="text-slate-300 space-y-1">
            <p>David Kalmus</p>
            <p>Pardubice, Czech Republic</p>
            <p>Email: <a href="mailto:info@dejvcodes.com" className="text-light-blue hover:underline">info@dejvcodes.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Personal Data Processing</h2>
          <p className="leading-relaxed mb-4">
            This website does not use cookies, analytics tools or tracking technologies. 
            Your behavior on the website is not monitored or analyzed.
          </p>
          <p className="leading-relaxed mb-4">
            When you visit the site, basic technical data (IP address, access time, browser type) 
            is automatically recorded in the web hosting server logs. This data is stored for a maximum 
            of 30 days and is used solely to ensure the security and technical operation of the website.
          </p>
          <p className="leading-relaxed">
            If you contact me by email, I process your data only to respond to your inquiry. 
            Your data is not shared with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
          <p className="leading-relaxed">
            You have the right to access, correct or delete your data. 
            If you have any questions, contact me at{' '}
            <a href="mailto:info@dejvcodes.com" className="text-light-blue hover:underline">
              info@dejvcodes.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Security</h2>
          <p className="leading-relaxed">
            The website uses HTTPS encryption for secure communication.
          </p>
        </section>
      </div>

      <Link 
        href='/'
        className='inline-block bg-slate-900/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700 transition-colors duration-300 px-10 py-3 mt-7'
      >
        Back to Home
      </Link>
    </div>
  </main>
}

export default PrivacyPolicy