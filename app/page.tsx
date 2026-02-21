'use client';
import {lazy, Suspense} from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import StructuredData from '@/components/StructuredData';

const StarfieldBG = lazy(() => import('@/components/StarfieldBG'));

const Home = () => {
	return <>
		<StructuredData />
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
		</main>
		<Footer />
	</>
};

export default Home;
