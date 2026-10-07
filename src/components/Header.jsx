import { useState, useEffect } from 'react';
import { playSciFiSound } from '../utils/audio';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const homeElement = document.getElementById('home');

      if (homeElement && scrollPosition < homeElement.offsetHeight) {
        setActiveSection('home');
        return;
      }

      for (const section of navItems) {
        if (section === 'home') continue;
        const element = document.getElementById(section);
        if (!element) continue;
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-gray-950/85 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Cyber Logo / Name */}
          <a
            href="#"
            onClick={() => playSciFiSound('click')}
            className="flex items-center space-x-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-mono font-bold shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform">
              R
            </div>
            <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-mono">
              RAVI_M<span className="text-cyan-400 animate-pulse">.DEV</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((section) => {
              const isActive = activeSection === section;
              return (
                <div key={section} className="relative group">
                  <a
                    href={`#${section === 'home' ? '' : section}`}
                    onClick={() => playSciFiSound('hover')}
                    className={`
                      px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 uppercase flex items-center space-x-1
                      ${
                        isActive
                          ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                          : 'text-gray-400 hover:text-cyan-300 hover:bg-gray-900/60'
                      }
                    `}
                  >
                    <span className="text-cyan-500 opacity-60 font-bold">&gt;</span>
                    <span>{section}</span>
                  </a>

                  {/* Active Sci-Fi Indicator Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-cyan-400 shadow-[0_0_8px_#06b6d4] rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playSciFiSound('click');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg bg-gray-900 border border-cyan-500/30 text-cyan-400 hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20 bg-gray-950/95 space-y-2 font-mono text-sm">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section === 'home' ? '' : section}`}
                onClick={() => {
                  playSciFiSound('click');
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-2.5 rounded-lg uppercase tracking-wider ${
                  activeSection === section
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-500/40'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                &gt; {section}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}