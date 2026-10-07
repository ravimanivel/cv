import resume from '../assets/M_RAVI_Web_Developer .pdf';
import me from '../assets/home_page_.png';
import { playSciFiSound } from '../utils/audio';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center py-12 relative overflow-hidden"
      data-aos="fade-in"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content - Left Side */}
          <div className="max-w-2xl order-2 md:order-1">
            {/* Tech Status Pill Tag */}
            <div
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-6 shadow-[0_0_15px_rgba(6,182,212,0.25)] cursor-pointer"
              data-aos="fade-down"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-semibold uppercase tracking-wider">AVAILABLE FOR NEW PROJECTS & ROLES</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-white cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 animate-neon">
                Ravi M
              </span>
            </h1>

            <h2
              className="text-2xl sm:text-3xl font-bold mb-6 font-mono text-cyan-300/90 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              &lt; Fullstack Web & Laravel Specialist /&gt;
            </h2>

            <p
              className="text-lg mb-8 text-gray-300/90 leading-relaxed font-light cursor-pointer"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Architecting modern, scalable web applications with clean React interfaces, fast Laravel REST APIs, dynamic database systems, and state-of-the-art UI performance.
            </p>

            {/* Quick Tech Metrics Badges */}
            <div 
              className="grid grid-cols-3 gap-3 mb-8 max-w-lg font-mono text-xs"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="p-3 bg-gray-900/80 border border-cyan-500/30 rounded-lg text-center backdrop-blur-md cursor-pointer hover:border-cyan-400 transition-colors">
                <div className="text-cyan-400 text-lg font-bold">FULLSTACK</div>
                <div className="text-gray-400 text-[10px]">React & Laravel</div>
              </div>
              <div className="p-3 bg-gray-900/80 border border-cyan-500/30 rounded-lg text-center backdrop-blur-md cursor-pointer hover:border-emerald-400 transition-colors">
                <div className="text-emerald-400 text-lg font-bold">100%</div>
                <div className="text-gray-400 text-[10px]">Clean Code Architecture</div>
              </div>
              <div className="p-3 bg-gray-900/80 border border-cyan-500/30 rounded-lg text-center backdrop-blur-md cursor-pointer hover:border-purple-400 transition-colors">
                <div className="text-purple-400 text-lg font-bold">24/7</div>
                <div className="text-gray-400 text-[10px]">Problem Solving</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#contact"
                onClick={() => playSciFiSound('click')}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105"
              >
                INITIALIZE CONTACT
              </a>
              <a
                href={resume}
                download
                onClick={() => playSciFiSound('click')}
                className="px-8 py-3.5 bg-gray-900/80 hover:bg-gray-800 border border-cyan-500/40 text-cyan-300 font-mono text-sm rounded-xl transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105"
              >
                DOWNLOAD RESUME [.PDF]
              </a>
            </div>
          </div>

          {/* Avatar Photo - Right Side */}
          <div
            className="order-1 md:order-2 w-full md:w-auto flex justify-center"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative group">
              {/* Futuristic Cyber Ring Glowing Aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-700 animate-pulse" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] bg-gray-950">
                <img
                  src={me}
                  alt="Ravi M"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Tech Bracket Overlay */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-black/80 border border-cyan-500/50 rounded-full backdrop-blur-md text-[11px] font-mono text-cyan-300">
                  SYS_USER: RAVI_M
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
