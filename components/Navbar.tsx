import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2, Phone } from 'lucide-react';

const NAV_LINKS = [
  { name: 'How It Works', href: '#process' },
  { name: 'Services', href: '#services' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Reviews', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll appearance (glassmorphism effect)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Highlight active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -30% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Small timeout to allow menu to close before scrolling
      setIsOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setIsOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setActiveSection('');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
        ? 'bg-dark md:bg-dark/80 backdrop-blur-xl border-white/5 py-4 shadow-lg'
        : 'bg-transparent border-transparent py-4 md:py-6'
        }`}
    >
      <div className="layout-container flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-2 group relative z-50"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primaryDark rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-105">
            <BarChart2 className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            ClearPath
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === link.href.substring(1)
                ? 'bg-white/10 text-white'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+19999999999"
            className="group relative px-6 py-2.5 rounded-full bg-secondary text-slate-900 font-bold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>+1 999-999-9999</span>
          </a>
        </div>

        {/* Refined Mobile Toggle Button */}
        <button
          className={`md:hidden p-2.5 relative z-[60] rounded-full active:scale-95 transition-all duration-300 border border-white/10 ${isOpen ? 'bg-white/10 text-white shadow-none' : 'bg-white/5 backdrop-blur-md text-white shadow-lg'
            }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <X className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} />
            <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} />
          </div>
        </button>
      </div>

      {/* Modern Premium Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-[100dvh] bg-dark z-40 transition-all duration-500 md:hidden flex flex-col ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Simple Gradient Accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none opacity-40"></div>

        <div className="layout-container flex flex-col h-full relative z-10 pt-28 pb-8">

          {/* Header Row (Logo Inside Menu) */}
          <div className="flex items-center gap-2 mb-12 opacity-80">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primaryDark rounded-lg flex items-center justify-center text-white">
              <BarChart2 className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">Navigation</span>
          </div>

          {/* Staggered Navigation List */}
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-3xl font-bold tracking-tight py-2 transition-all duration-500 ease-out flex items-center gap-4 ${activeSection === link.href.substring(1) ? 'text-secondary translate-x-4' : 'text-white hover:text-secondary hover:translate-x-2'
                  } ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + (idx * 50)}ms` }}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                )}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`mt-auto transition-all duration-700 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a
              href="tel:+19999999999"
              className="w-full py-5 bg-gradient-to-r from-secondary to-amber-300 text-slate-900 text-lg font-bold rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-amber-400/10 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: (999) 999-9999</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;