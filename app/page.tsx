'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import StarfieldBG from '@/components/StarfieldBG';
import SocialNetworks from '@/components/SocialNetworks';

const Home = () => {
  return <>
    <Navbar />
    <SocialNetworks />
    <main>
      <Hero />
      <StarfieldBG />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </>
}

export default Home