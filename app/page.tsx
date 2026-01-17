'use client';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import StarfieldBG from '@/components/StarfieldBG';

const Home = () => {
  return <>
    <Navbar />
    <main>
      <Hero />
      <StarfieldBG />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  </>
}

export default Home