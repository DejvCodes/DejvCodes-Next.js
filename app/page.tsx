'use client';

import Navbar from '@/components/Navbar';

const Home = () => {

  return <div>
    <Navbar />
    <main>
      <section id='home'style={{backgroundImage: 'url("/background-1.png")'}}></section>
       <section id='about'></section>
       <section id='skills'></section>
        <section id='projects'></section>
        <section id='contact'></section>
    </main>
  </div>
}

export default Home