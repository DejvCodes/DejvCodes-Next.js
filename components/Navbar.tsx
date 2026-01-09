'use client';
import Link from 'next/link';
import {Code2} from 'lucide-react';
import {NAV_LINKS} from '@/constants';
import {useEffect, useState} from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      setScrolled(window.scrollY > 7);

      sections.forEach((oneSection) => {
        const sectionTop = (oneSection as HTMLElement).offsetTop;
        const sectionHeight = (oneSection as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = oneSection.getAttribute('id') || '';
        }
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <header
    id='header'
    className={`
      fixed top-0 left-0 w-full flex items-center justify-center transition-all duration-300 z-1000 h-18 
      ${scrolled ? 'md:h-17 bg-slate-950/50 backdrop-blur-xl border-b border-slate-800' : 'bg-background md:h-25'}
    `}
  >
     <div className='w-full max-w-(--max-width) h-full flex items-center justify-between px-4 md:px-6 lg:px-17'>

      {/* Logo */}
      <div className='py-2 mb-0.5 cursor-pointer font-primary'>
        <Link
          href='#home'
          className='relative flex items-center text-white text-2xl font-bold font-primary'
        >
          <div className='bg-light-blue/12 p-2 rounded-lg mr-2'>
            <Code2 className='h-6 w-6 text-light-blue' />
          </div>
          Dejv<span className='text-light-blue'>Codes</span>
          <span className='animate-dot absolute bottom-1 -right-2 text-3xl'>.</span>
        </Link>
      </div>

      {/* Navigation Desktop */}
      <nav className='navigation max-[700]:hidden'>
        <ul className='flex items-center gap-4 lg:gap-6'>
          {NAV_LINKS.map((oneLink) => {
            const { id, path, text } = oneLink;
            const sectionId = path.replace('#', '');
            const isActive = activeSection === sectionId;
              
              return <li key={id} className='link group relative list-none'>
                <Link
                  href={path}
                  scroll={false}
                  className={`relative px-2 text-lg font-medium ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
                    history.replaceState(null, "", path); // Update URL without reloading
                  }}
                >
                  {text}
                </Link>
              </li>
            })}
          </ul>
      </nav>

      {/* Mobile Menu */}
      <nav className='hidden max-[700px]:block'>
        <ul className={`
          fixed top-0 right-0 w-[70%] max-[570px]:w-[65%] max-[370px]:w-[75%] max-[250px]:w-[90%]
          min-h-screen bg-background shadow-[-1px_0_10px_rgba(0,0,0,0.7)]
          flex flex-col justify-center transition-transform duration-400 ease-in
          gap-14 max-[570px]:gap-8 pb-32 max-[570px]:pb-16
          ${openMenu ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {NAV_LINKS.map((oneLink) => {
            const { id, path, text } = oneLink;
            const sectionId = path.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return <li key={id}
              className={`link one-link list-none text-center ${openMenu ? 'fade' : ''}`}
              style={{ '--i': id } as React.CSSProperties}
              onClick={() => openMenu && handleOpenMenu()}
            >
              <Link 
                href={path} 
                scroll={false}
                className={`relative px-2 text-xl font-medium ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
                  history.replaceState(null, "", path); // Update URL without reloading
                }}
              >
                {text}
              </Link>
            </li>
          })}
        </ul>
      </nav>

      {/* Burger Menu */}
      <div 
        className='burger-menu hidden max-[700px]:flex flex-col gap-1.25 pt-0.5 cursor-pointer z-1000' 
        onClick={handleOpenMenu}
      >
        <div className={`w-6.25 h-0.75 bg-white transition-all duration-400 ${openMenu ? '-rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6.25 h-0.75 bg-white transition-all duration-400 ${openMenu ? 'opacity-0' : ''}`}></div>
        <div className={`w-6.25 h-0.75 bg-white transition-all duration-400 ${openMenu ? 'rotate-45 -translate-y-2' : ''}`}></div>
      </div>
     </div>
  </header>
}

export default Navbar