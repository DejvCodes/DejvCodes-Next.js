'use client';
import Navbar from '@/components/Navbar';

const Home = () => {

  return <>
    <Navbar />
    <main>
      <section id='home' className='h-screen bg-linear-to-b from-black via-slate-960 to-slate-950'></section>
      <section id='about' className='h-screen bg-slate-900/30'></section> 
      <section id='skills' className='h-screen bg-slate-900/30'></section>
      <section id='projects' className='h-screen bg-slate-900/30'></section>
      <section id='contact' className='h-screen bg-slate-900/30'></section>
    </main>
  </>
}

export default Home