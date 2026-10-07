import { playSciFiSound } from '../utils/audio';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-cyan-500/20 relative z-10 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Branding */}
          <div className="flex-1">
            <a
              href="#"
              onClick={() => playSciFiSound('click')}
              className="inline-flex items-center space-x-2 group"
            >
              <div className="w-7 h-7 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-black font-mono font-bold text-xs">
                R
              </div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-mono">
                RAVI_M.DEV
              </span>
            </a>
            <p className="mt-3 text-xs sm:text-sm text-gray-400/90 max-w-sm leading-relaxed font-light">
              Crafting high-performance web systems, fullstack Laravel & React solutions, clean REST APIs, and futuristic UI designs.
            </p>

            <div className="mt-4 flex items-center space-x-2 font-mono text-[11px] text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>CORE VERSION 2.4 • ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Navigation & Connections */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 font-mono text-xs">
            {/* Navigation */}
            <div>
              <h3 className="text-xs font-bold text-cyan-400 tracking-wider uppercase mb-4">
                NAVIGATION
              </h3>
              <div className="space-y-2.5">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    onClick={() => playSciFiSound('hover')}
                    className="block text-gray-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
                  >
                    &gt; {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-bold text-cyan-400 tracking-wider uppercase mb-4">
                CONNECT NODES
              </h3>
              <div className="space-y-2.5">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ravi-manivel-87887a254/' },
                  { name: 'GitHub', url: 'https://github.com/ravimanivel/' },
                  { name: 'Email Direct', url: 'mailto:ravimanivel999@gmail.com' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSciFiSound('hover')}
                    className="block text-gray-400 hover:text-cyan-300 transition-colors uppercase tracking-wider"
                  >
                    &gt; {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} RAVI M. ENGINEERED WITH REACT & TAILWIND.</p>
          <div className="text-cyan-500/80">
            [ LOC: TAMIL NADU, INDIA ]
          </div>
        </div>
      </div>
    </footer>
  );
}