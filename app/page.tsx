'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import StarfieldBG from '@/components/StarfieldBG';

const Home = () => {
  return <>
    <Navbar />
    <main>
      <Hero />
      <StarfieldBG />
      <About />
      <section id='skills' className='h-screen bg-slate-900/30'></section>
      <section id='projects' className='h-screen bg-slate-900/30'></section>
      <section id='contact' className='h-screen bg-slate-900/30'></section>
    </main>
  </>
}

export default Home