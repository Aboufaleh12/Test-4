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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
    setActiveSection('');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-dark/80 backdrop-blur-xl border-white/5 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
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
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href.substring(1)
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

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 relative z-50 hover:bg-white/10 rounded-full"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
         {NAV_LINKS.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-bold transition-all ${
                activeSection === link.href.substring(1) ? 'text-secondary scale-110' : 'text-white hover:text-secondary'
              } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+19999999999" 
            className={`mt-4 px-8 py-4 bg-secondary text-slate-900 text-lg font-bold rounded-full flex items-center gap-2 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Phone className="w-5 h-5" />
            +1 999-999-9999
          </a>
      </div>
    </nav>
  );
};

export default Navbar;