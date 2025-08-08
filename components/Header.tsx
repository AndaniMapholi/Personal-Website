import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { XMarkIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('About');
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Map<string, HTMLLIElement | null>>(new Map());

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#career', label: 'Career' },
    { href: '#contact', label: 'Contact' },
  ];

  const movePill = (target: HTMLLIElement | null) => {
    if (target) {
      setPillStyle({
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px)`,
        opacity: 1,
      });
    }
  };
  
  // Custom click handler for smooth scrolling
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    // Instantly update active section for better UX
    const clickedLink = navLinks.find(link => link.href === href);
    if (clickedLink) {
        setActiveSection(clickedLink.label);
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
        const headerOffset = navRef.current?.offsetHeight || 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  // Scroll spy logic
  useEffect(() => {
    const sections = navLinks
      .map(link => document.getElementById(link.href.substring(1)))
      .filter(el => el) as HTMLElement[];

    if (sections.length === 0) return;

    const handleScroll = () => {
      const headerHeight = navRef.current?.offsetHeight || 80;
      const scrollPosition = window.scrollY + headerHeight + window.innerHeight / 3;

      let currentSectionId = '';
      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentSectionId = section.id;
        } else {
          break;
        }
      }
      
      const activeLink = navLinks.find(link => link.href === `#${currentSectionId}`);
      if (activeLink && activeLink.label !== activeSection) {
        setActiveSection(activeLink.label);
      } else if (window.scrollY < sections[0].offsetTop - headerHeight) {
        if (activeSection !== 'About') setActiveSection('About');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Effect to move the pill when activeSection changes or on resize
  useEffect(() => {
    const activeItem = itemRefs.current.get(activeSection);
    movePill(activeItem);

    const handleResize = () => {
        const activeItem = itemRefs.current.get(activeSection);
        movePill(activeItem);
    };

    window.addEventListener('resize', handleResize);
    // Also move pill on font load, etc.
    const observer = new ResizeObserver(handleResize);
    if (listRef.current) observer.observe(listRef.current);
    
    return () => {
        window.removeEventListener('resize', handleResize);
        if (listRef.current) observer.unobserve(listRef.current);
    };
  }, [activeSection]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-slate-100/10 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#about" onClick={handleLinkClick} className="text-xl font-bold text-text-primary hover:text-primary transition-colors">
            {PERSONAL_INFO.name.split(' ')[0]}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul ref={listRef} className="relative flex items-center bg-surface/50 p-1 rounded-full border border-slate-100/10">
              <div
                className="absolute top-1 bottom-1 bg-gradient-to-r from-accent to-primary rounded-full shadow-lg transition-all duration-500 ease-in-out"
                style={{ ...pillStyle, left: '0', top: '0.25rem', height: 'calc(100% - 0.5rem)' }}
              />
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  ref={(el) => { itemRefs.current.set(link.label, el); }}
                  className="relative"
                >
                  <a href={link.href} onClick={handleLinkClick} className={`relative z-10 block px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${activeSection === link.label ? 'text-background' : 'text-text-secondary hover:text-text-primary'}`}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
              aria-label="Open menu"
            >
              {isMenuOpen ? <XMarkIcon className="h-6 w-6"/> :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              }
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <nav className="md:hidden animate-fade-in" id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${activeSection === link.label ? 'bg-primary text-white' : 'text-text-secondary hover:bg-surface hover:text-text-primary'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;