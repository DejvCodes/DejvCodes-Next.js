'use client';
import {useEffect, useRef, useState} from 'react';

const ScrollReveal = ({
	children,
	delay = 0,
	className = ''
}: {
	children: React.ReactNode;
	delay?: number;
	className?: string;
}) => {
	const [isVisible, setIsVisible] = useState(false);
	// ref to the element to be observed
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current; // get the current element
		if (!el) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				// when the element is visible
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect(); // stop observing after it becomes visible
				}
			},
			{
				threshold: 0.1, // if 10% of the element is visible
				rootMargin: '0px 0px -30px 0px' // trigger a bit earlier
			}
		);

		observer.observe(el); // start observing the element

		return () => observer.disconnect(); // cleanup on unmount
	}, []);

	return <div
		ref={ref}
		className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
		style={{ transitionDelay: `${delay}ms` }}
	>
		{children}
	</div>
};

export default ScrollReveal;
