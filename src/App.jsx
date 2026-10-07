import './App.css';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// High-Tech Components
import TechCanvas from './components/TechCanvas';
import TechHUDHeader from './components/TechHUDHeader';
import CommandTerminal from './components/CommandTerminal';
import VoiceHoverReader from './components/VoiceHoverReader';
import SpeakerButton from './components/SpeakerButton';
import { playSciFiSound } from './utils/audio';
import { pingBackend } from './utils/pingBackend';

function App() {
  const [theme, setTheme] = useState('cyber'); // 'cyber' | 'matrix' | 'neon' | 'synthwave'
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isMatrix, setIsMatrix] = useState(false);
  const [isVoice, setIsVoice] = useState(false); // Voice Text-to-Speech hover reader disabled (OFF) by default

  useEffect(() => {
    // Auto ping backend on site entry to wake up Render instance & keep it active
    const stopPing = pingBackend();

    // Initialize AOS with smooth sci-fi animations
    import('aos').then((AOS) => {
      AOS.init({
        duration: 400,
        easing: 'ease-out',
        once: true,
        offset: 0,
      });
    });

    // Keyboard shortcut handler (Ctrl+K or Cmd+K to open interactive terminal)
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      stopPing();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Dynamic ambient background gradient based on selected theme
  const getOrbColors = () => {
    switch (theme) {
      case 'matrix':
        return {
          orb1: 'bg-emerald-500/15 shadow-[0_0_80px_rgba(16,185,129,0.3)]',
          orb2: 'bg-green-600/15 shadow-[0_0_80px_rgba(34,197,94,0.3)]',
          orb3: 'bg-teal-500/15 shadow-[0_0_80px_rgba(20,184,166,0.3)]'
        };
      case 'neon':
        return {
          orb1: 'bg-pink-500/15 shadow-[0_0_80px_rgba(236,72,153,0.3)]',
          orb2: 'bg-purple-600/15 shadow-[0_0_80px_rgba(147,51,234,0.3)]',
          orb3: 'bg-fuchsia-500/15 shadow-[0_0_80px_rgba(217,70,239,0.3)]'
        };
      case 'synthwave':
        return {
          orb1: 'bg-violet-600/15 shadow-[0_0_80px_rgba(124,58,237,0.3)]',
          orb2: 'bg-cyan-500/15 shadow-[0_0_80px_rgba(6,182,212,0.3)]',
          orb3: 'bg-indigo-500/15 shadow-[0_0_80px_rgba(99,102,241,0.3)]'
        };
      case 'cyber':
      default:
        return {
          orb1: 'bg-cyan-500/15 shadow-[0_0_80px_rgba(6,182,212,0.3)]',
          orb2: 'bg-blue-600/15 shadow-[0_0_80px_rgba(37,99,235,0.3)]',
          orb3: 'bg-indigo-500/15 shadow-[0_0_80px_rgba(99,102,241,0.3)]'
        };
    }
  };

  const orbs = getOrbColors();

  return (
    <div className={`relative min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-500`}>
      {/* Interactive High-Tech Canvas (Particle Grid & Matrix Rain) */}
      <TechCanvas theme={theme} isMatrixRain={isMatrix} />

      {/* Web Speech API Text-to-Speech Hover Reader */}
      <VoiceHoverReader enabled={isVoice} />

      {/* Ambient Glowing Energy Orbs Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${orbs.orb1}`} />
        <div className={`absolute bottom-1/3 -right-32 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${orbs.orb2}`} />
        <div className={`absolute top-2/3 left-1/3 w-80 h-80 rounded-full blur-3xl transition-all duration-700 ${orbs.orb3}`} />
        
        {/* Subtle Cyber Grid Lines & Scanlines Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 cyber-scanline opacity-30 pointer-events-none" />
      </div>

      {/* Main Container Content */}
      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-[2px]">
        {/* Top Tech HUD System Bar */}
        <TechHUDHeader
          onOpenTerminal={() => setIsTerminalOpen(true)}
          theme={theme}
          setTheme={setTheme}
          isMatrix={isMatrix}
          toggleMatrix={() => setIsMatrix((prev) => !prev)}
          isVoice={isVoice}
          toggleVoice={() => setIsVoice((prev) => !prev)}
        />

        {/* Primary Navbar Header */}
        <Header />

        {/* Portfolio Body Sections */}
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 py-6">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Certifications />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll To Top Button */}
        <ScrollToTop />
      </div>

      {/* Interactive Command Terminal Modal (Ctrl + K) */}
      <CommandTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        setTheme={setTheme}
        theme={theme}
        isMatrix={isMatrix}
        toggleMatrix={() => setIsMatrix((prev) => !prev)}
      />

      {/* Floating Sci-Fi Quick Action Launchers */}
      <div className="fixed bottom-6 left-3 sm:left-6 z-40 flex items-center space-x-2 sm:space-x-3">
        <button
          onClick={() => {
            playSciFiSound('click');
            setIsTerminalOpen(true);
          }}
          className="hidden sm:flex group relative items-center space-x-2 px-4 py-2.5 bg-gray-900/90 border border-cyan-500/40 rounded-full text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:border-cyan-400 transition-all duration-300 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-semibold tracking-wider">SYSTEM CLI</span>
          <span className="px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[10px] border border-cyan-400/30">
            ⌘K
          </span>
        </button>

        {/* Attractive Speaker Button Component for Read Aloud */}
        <SpeakerButton
          isVoice={isVoice}
          toggleVoice={() => setIsVoice((prev) => !prev)}
        />
      </div>
    </div>
  );
}

export default App;