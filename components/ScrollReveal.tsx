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
  // Ref na wrapper <div>, který bude IntersectionObserver sledovat
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; // Získání aktuálního DOM elementu
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Když je element viditelný, nastavíme isVisible na true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Odpojení observeru po zobrazení
        }
      },
      {
        threshold: 0.1, // Spustí se, když je alespoň 10% elementu viditelné
        rootMargin: '0px 0px -30px 0px' // Trochu posunout spouštění vzhledem k viewportu
      }
    );

    observer.observe(el); // Začít sledovat konkrétní element

    return () => observer.disconnect(); // Cleanup: při unmountu komponenty observer odpojíme
  }, []);

  return <div
    ref={ref}
    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {children}
  </div>
}

export default ScrollReveal