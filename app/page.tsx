'use client';
import {lazy, Suspense} from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';

const StarfieldBG = lazy(() => import('@/components/StarfieldBG'));

const Home = () => {
	return <>
		<Header />
		<main>
			<Hero />
			<Suspense fallback={null}>
				<StarfieldBG />
			</Suspense>
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</main>
	</>
};

export default Home;
