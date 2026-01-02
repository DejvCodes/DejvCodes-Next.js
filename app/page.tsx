'use client';

import Navbar from '@/components/Navbar';

const Home = () => {

  return <div>
    <Navbar />
    <main>
      <section id='home' className='h-screen bg-white' style={{backgroundImage: 'url("/background-1.png")'}}></section>
       <section id='about' className='h-screen'></section>
       <section id='skills' className='h-screen'></section>
        <section id='projects' className='h-screen'></section>
        <section id='contact' className='h-screen'></section>
    </main>
  </div>
}

export default Home