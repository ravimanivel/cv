import React, { useState, useEffect } from 'react';
import { FiAward, FiCalendar, FiMapPin, FiCheckCircle, FiGrid, FiGitCommit, FiX, FiShield, FiChevronLeft, FiChevronRight, FiLayers } from 'react-icons/fi';
import { playSciFiSound } from '../utils/audio';

export default function Certifications() {
  const [activeView, setActiveView] = useState('roadmap'); // 'roadmap' | 'grid'
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [modalCert, setModalCert] = useState(null); // Active certificate for 3D Holographic Modal

  const certificationsData = [
    // 2025 - Cloud, AI & Modern React Frameworks
    {
      id: 1,
      title: 'React State and Events',
      provider: 'Microsoft',
      location: 'Microsoft Learn',
      year: '2025',
      date: 'Apr 2025',
      category: 'Frontend',
      badge: 'MICROSOFT CERTIFIED',
      description: 'Advanced state management, hook lifecycle optimization, event handler binding, and performance tuning in modern React applications.',
      skills: ['React.js', 'State Management', 'React Hooks', 'Event Handling']
    },
    {
      id: 2,
      title: 'Working with Data & Properties in React',
      provider: 'Microsoft',
      location: 'Microsoft Learn',
      year: '2025',
      date: 'Apr 2025',
      category: 'Frontend',
      badge: 'MICROSOFT CERTIFIED',
      description: 'Props architecture, data flow patterns, component composition, and handling asynchronous data streams in React component hierarchies.',
      skills: ['React Props', 'Component Architecture', 'Data Flow', 'JSX']
    },
    {
      id: 3,
      title: 'AWS AI Conclave',
      provider: 'Amazon Web Services (AWS)',
      location: 'AWS Global Event',
      year: '2025',
      date: 'Jan 2025',
      category: 'Cloud & AI',
      badge: 'AWS SPECIALIST',
      description: 'Explored generative AI models, Amazon Bedrock, machine learning pipelines, serverless AI integration, and enterprise cloud architecture.',
      skills: ['AWS AI', 'Generative AI', 'Cloud Computing', 'Machine Learning']
    },
    // 2024 - Core Programming & Visualization
    {
      id: 4,
      title: 'Build a Free Website with WordPress',
      provider: 'Coursera Project Network',
      location: 'Coursera',
      year: '2024',
      date: 'Sep 2024',
      category: 'Web Dev',
      badge: 'COURSERA VERIFIED',
      description: 'CMS customization, website publishing, domain setup, responsive themes, and content structure optimization.',
      skills: ['WordPress', 'CMS', 'Web Design', 'SEO']
    },
    {
      id: 5,
      title: 'Web Development Fundamentals',
      provider: 'IBM SkillBuild',
      location: 'IBM Skills Network',
      year: '2024',
      date: 'Sep 2024',
      category: 'Web Dev',
      badge: 'IBM BADGE',
      description: 'Core web architecture, HTTP/HTTPS protocols, frontend structure, client-server models, and security best practices.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Web Security']
    },
    {
      id: 6,
      title: 'Fundamentals of Data Visualization',
      provider: 'Microsoft',
      location: 'Microsoft Learn',
      year: '2024',
      date: 'Apr 2024',
      category: 'Data & Analytics',
      badge: 'MICROSOFT CERTIFIED',
      description: 'Designing high-impact charts, visual analytics, data story-telling, dashboard design, and metric representation.',
      skills: ['Data Visualization', 'Analytics', 'Dashboards', 'UI Design']
    },
    {
      id: 7,
      title: 'Python Essentials I',
      provider: 'Cisco Networking Academy',
      location: 'Cisco Networking Academy',
      year: '2024',
      date: 'Mar 2024',
      category: 'Programming',
      badge: 'CISCO CERTIFIED',
      description: 'Algorithmic logic, data types, control flow structures, functions, modules, and object-oriented Python concepts.',
      skills: ['Python 3', 'Data Structures', 'OOP', 'Algorithms']
    },
    // 2023 - Workshops & Specialized Programs
    {
      id: 8,
      title: 'Recent Trends in Green Energy Initiative & Soft Computing Techniques',
      provider: 'Mahatma Gandhi Institute of Technology (MGIT)',
      location: 'Hyderabad, India',
      year: '2023',
      date: 'July 2023',
      category: 'Research & Soft Computing',
      badge: 'NATIONAL WORKSHOP',
      description: 'Explored intelligent soft computing algorithms, neural networks, fuzzy logic applications, and sustainable technology trends.',
      skills: ['Soft Computing', 'Neural Networks', 'Green Energy', 'Algorithms']
    },
    {
      id: 9,
      title: 'Nine-Day National Level Workshop on DEVOPS',
      provider: 'SRM Institute of Science and Technology',
      location: 'SRM IST, Chennai',
      year: '2023',
      date: 'June 2023',
      category: 'DevOps & Cyber',
      badge: 'NATIONAL WORKSHOP',
      description: 'Intensive 9-day workshop covering CI/CD pipelines, Docker containerization, automated testing, version control, and cloud deployment.',
      skills: ['DevOps', 'Docker', 'CI/CD', 'Linux', 'Automation']
    },
    {
      id: 10,
      title: 'Eight-Day Faculty Development Programme on Cyber Security & Hacking',
      provider: 'SRM Institute of Science and Technology',
      location: 'SRM IST, Chennai',
      year: '2023',
      date: 'June 2023',
      category: 'DevOps & Cyber',
      badge: 'FDP CERTIFICATION',
      description: '8-day immersive training in ethical hacking, network vulnerability assessment, cryptography, web security, and penetration testing fundamentals.',
      skills: ['Cyber Security', 'Ethical Hacking', 'Network Security', 'Vulnerability Assessment']
    },
    {
      id: 11,
      title: 'LATEX and OVERLEAF Technical Documentation',
      provider: 'Chaitanya Bharathi Institute of Technology (CBIT)',
      location: 'Hyderabad, India',
      year: '2023',
      date: '2023',
      category: 'Tools & Research',
      badge: 'WORKSHOP',
      description: 'Mastered LaTeX document preparation, Overleaf collaborative editing, mathematical typesetting, bibliography management, and scientific publishing.',
      skills: ['LaTeX', 'Overleaf', 'Technical Writing', 'Documentation']
    },
    {
      id: 12,
      title: 'Workshop on Create Static Web Page Using HTML, CSS',
      provider: 'MARCELLO TECH',
      location: 'MARCELLO TECH-2023',
      year: '2023',
      date: '2023',
      category: 'Web Dev',
      badge: 'MARCELLO TECH',
      description: 'Hands-on practical workshop constructing responsive static website layouts, semantic HTML5 tags, CSS flexbox/grid styling, and browser cross-compatibility.',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Layouts']
    }
  ];

  const categories = ['ALL', 'Frontend', 'Web Dev', 'DevOps & Cyber', 'Cloud & AI', 'Tools & Research'];

  const filteredCerts = selectedCategory === 'ALL'
    ? certificationsData
    : certificationsData.filter(c => c.category === selectedCategory);

  const openCertModal = (cert) => {
    playSciFiSound('open');
    setModalCert(cert);
  };

  const closeCertModal = () => {
    playSciFiSound('close');
    setModalCert(null);
  };

  // Modal Next/Previous Navigation logic
  const currentModalIndex = modalCert ? filteredCerts.findIndex(c => c.id === modalCert.id) : 0;

  const handlePrevCert = (e) => {
    if (e) e.stopPropagation();
    playSciFiSound('click');
    const prevIdx = (currentModalIndex - 1 + filteredCerts.length) % filteredCerts.length;
    setModalCert(filteredCerts[prevIdx]);
  };

  const handleNextCert = (e) => {
    if (e) e.stopPropagation();
    playSciFiSound('click');
    const nextIdx = (currentModalIndex + 1) % filteredCerts.length;
    setModalCert(filteredCerts[nextIdx]);
  };

  // Keyboard navigation & body scroll lock listener
  useEffect(() => {
    if (modalCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (!modalCert) return;
      if (e.key === 'ArrowLeft') {
        handlePrevCert();
      } else if (e.key === 'ArrowRight') {
        handleNextCert();
      } else if (e.key === 'Escape') {
        closeCertModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalCert, filteredCerts, currentModalIndex]);

  return (
    <section id="certifications" className="py-12 sm:py-16 relative" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <FiAward className="text-sm animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">CERTIFICATIONS & WORKSHOPS ROADMAP</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Certifications & Technical Milestones
            </span>
          </h2>

          <p className="text-gray-300 font-light max-w-3xl mx-auto text-xs sm:text-base leading-relaxed px-2">
            Interactive 3D chronological roadmap detailing official certifications, specialized workshops, faculty development programs, and technical credentials. Click any card to inspect in 3D modal view.
          </p>

          {/* View Toggle Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                playSciFiSound('click');
                setActiveView('roadmap');
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                activeView === 'roadmap'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-gray-900/80 border-gray-800 text-gray-400 hover:text-cyan-300'
              }`}
            >
              <FiGitCommit className="text-sm" />
              <span>ROADMAP TIMELINE VIEW</span>
            </button>

            <button
              onClick={() => {
                playSciFiSound('click');
                setActiveView('grid');
              }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-mono font-bold transition-all border ${
                activeView === 'grid'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-gray-900/80 border-gray-800 text-gray-400 hover:text-cyan-300'
              }`}
            >
              <FiGrid className="text-sm" />
              <span>ALL CERTIFICATES GRID</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-4 sm:mt-5 flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSciFiSound('hover');
                  setSelectedCategory(cat);
                }}
                className={`px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono transition-all border ${
                  selectedCategory === cat
                    ? 'bg-cyan-950 text-cyan-300 border-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                    : 'bg-gray-950/60 text-gray-400 border-gray-800 hover:border-cyan-500/40 hover:text-cyan-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ROADMAP TIMELINE VIEW */}
        {activeView === 'roadmap' ? (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            {/* Timeline Roadmap Track */}
            <div className="relative py-6 sm:py-8 bg-gray-900/80 border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              {/* Connecting Laser Line */}
              <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 -translate-y-1/2 rounded-full opacity-70 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 [perspective:1000px]">
                {filteredCerts.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => openCertModal(cert)}
                    onMouseEnter={() => playSciFiSound('hover')}
                    className="group relative cursor-pointer p-4 sm:p-5 bg-gray-950/90 border border-cyan-500/30 hover:border-cyan-400 rounded-2xl transition-all duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(-6deg)_rotateX(4deg)_translateZ(12px)] shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="p-2 rounded-xl bg-cyan-950/90 border border-cyan-500/40 text-cyan-400 text-lg shadow-[0_0_10px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform">
                          <FiAward />
                        </span>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 font-mono text-cyan-300 font-bold">
                          {cert.date}
                        </span>
                      </div>

                      <h3 className="font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors mb-1.5 line-clamp-2 leading-snug">
                        {cert.title}
                      </h3>

                      <p className="text-[11px] text-cyan-400/90 font-mono font-semibold truncate mb-3">
                        {cert.provider}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-gray-800/80 flex items-center justify-between text-[10px] font-mono text-gray-400">
                      <span className="bg-gray-900 px-2 py-0.5 rounded border border-gray-800">
                        {cert.category}
                      </span>
                      <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        3D VIEW &rarr;
                      </span>
                    </div>

                    {/* Corner Sci-Fi Accent Bracket */}
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/80 transition-all rounded-tr" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-in fade-in duration-300 [perspective:1000px]">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openCertModal(cert)}
                onMouseEnter={() => playSciFiSound('hover')}
                className="group relative cursor-pointer bg-gray-900/80 border border-gray-800 hover:border-cyan-400/60 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all duration-300 [transform-style:preserve-3d] hover:[transform:rotateY(5deg)_rotateX(-3deg)_translateZ(10px)] flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                      <FiAward />
                    </div>
                    <span className="px-2.5 py-0.5 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono rounded font-bold">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono mb-2.5">
                    {cert.provider}
                  </p>

                  <p className="text-xs text-gray-300 font-light line-clamp-3 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cert.skills.slice(0, 3).map((sk, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-gray-950 border border-gray-800 text-cyan-300 text-[10px] font-mono rounded"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="flex items-center gap-1 truncate max-w-[150px]">
                      <FiMapPin className="text-cyan-500 shrink-0" />
                      <span className="truncate">{cert.location}</span>
                    </span>
                    <span className="text-cyan-400 font-bold shrink-0 group-hover:underline">INSPECT 3D</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 bg-cyan-400 transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {/* ========================================== */}
        {/* HOLOGRAPHIC 3D CERTIFICATE MODAL POPUP */}
        {/* ========================================== */}
        {modalCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300"
            onClick={closeCertModal}
          >
            {/* Main 3D Glass Box */}
            <div
              className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950/95 border-2 border-cyan-400/80 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.5)] overflow-hidden transition-all duration-300 animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sci-Fi Top Glow Line Progress Bar */}
              <div className="w-full h-1 bg-gray-900 relative overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 transition-all duration-300 shadow-[0_0_10px_#06b6d4]"
                  style={{ width: `${((currentModalIndex + 1) / filteredCerts.length) * 100}%` }}
                />
              </div>

              {/* FLOATING DESKTOP SIDE PREVIOUS / NEXT BUTTONS */}
              <button
                onClick={handlePrevCert}
                className="hidden lg:flex -left-14 absolute top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-gray-950/95 border-2 border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-600/40 hover:scale-110 shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all z-30 group"
                aria-label="Previous Certificate"
                title="Previous Certificate (Left Arrow Key)"
              >
                <FiChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={handleNextCert}
                className="hidden lg:flex -right-14 absolute top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-gray-950/95 border-2 border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-600/40 hover:scale-110 shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all z-30 group"
                aria-label="Next Certificate"
                title="Next Certificate (Right Arrow Key)"
              >
                <FiChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Scrollable Modal Content Wrapper */}
              <div className="p-4 sm:p-7 overflow-y-auto custom-scrollbar flex-1 space-y-5">
                {/* Modal Header Bar */}
                <div className="flex items-start justify-between gap-3 pb-5 border-b border-cyan-500/30">
                  <div className="flex items-start gap-3 sm:gap-4 pr-6">
                    <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-cyan-950/90 border-2 border-cyan-400 text-cyan-300 text-2xl sm:text-3xl shadow-[0_0_25px_rgba(6,182,212,0.4)] shrink-0 animate-pulse">
                      <FiAward />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5 mb-1">
                        <span className="px-2.5 py-0.5 bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-[10px] font-mono rounded-full font-bold uppercase tracking-wider">
                          {modalCert.badge}
                        </span>
                        <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                          <FiShield className="text-emerald-400 shrink-0" /> VERIFIED CREDENTIAL
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-2xl font-extrabold text-white leading-snug">
                        {modalCert.title}
                      </h3>

                      <p className="text-cyan-300 font-mono text-xs sm:text-sm font-semibold mt-1">
                        {modalCert.provider} • <span className="text-gray-400 font-normal">{modalCert.location}</span>
                      </p>
                    </div>
                  </div>

                  {/* Close Modal Button */}
                  <button
                    onClick={closeCertModal}
                    className="p-2 rounded-full bg-gray-900 border border-cyan-500/40 text-cyan-400 hover:text-white hover:bg-cyan-600/30 transition-all shadow-md shrink-0"
                    aria-label="Close modal"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body Info */}
                <div className="space-y-4 font-mono">
                  <div>
                    <h4 className="text-[11px] sm:text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2">
                      SYNOPSIS & LEARNING PROGRAM
                    </h4>
                    <p className="text-gray-200 font-sans font-light leading-relaxed text-xs sm:text-sm bg-gray-950/70 p-3.5 sm:p-4 rounded-xl border border-gray-800">
                      {modalCert.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] sm:text-xs text-cyan-400 font-bold uppercase tracking-wider mb-2.5">
                      COMPETENCIES & DOMAIN SKILLS MASTERED
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {modalCert.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-cyan-950/80 border border-cyan-500/50 text-cyan-200 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                        >
                          <FiCheckCircle className="text-cyan-400 shrink-0 text-xs" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Completion Date & Domain Category info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-gray-800/80 text-xs">
                    <div className="p-3 bg-gray-950/80 border border-gray-800 rounded-xl">
                      <span className="text-gray-500 text-[10px] block mb-0.5">COMPLETION DATE</span>
                      <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                        <FiCalendar className="text-cyan-400 shrink-0" /> {modalCert.date} ({modalCert.year})
                      </span>
                    </div>

                    <div className="p-3 bg-gray-950/80 border border-gray-800 rounded-xl">
                      <span className="text-gray-500 text-[10px] block mb-0.5">DOMAIN CATEGORY</span>
                      <span className="text-cyan-300 font-bold uppercase">
                        {modalCert.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer Controls Bar */}
              <div className="p-3 sm:p-4 bg-gray-950/95 border-t border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                {/* Previous / Next Navigation Buttons */}
                <div className="flex items-center justify-between w-full sm:w-auto space-x-2 font-mono text-xs">
                  <button
                    onClick={handlePrevCert}
                    className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2 bg-gray-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-950/90 rounded-xl transition-all font-bold shadow-sm"
                  >
                    <FiChevronLeft className="text-base" />
                    <span>PREV</span>
                  </button>

                  <span className="px-3.5 py-2 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 rounded-xl text-xs font-bold font-mono">
                    {currentModalIndex + 1} / {filteredCerts.length}
                  </span>

                  <button
                    onClick={handleNextCert}
                    className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2 bg-gray-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-950/90 rounded-xl transition-all font-bold shadow-sm"
                  >
                    <span>NEXT</span>
                    <FiChevronRight className="text-base" />
                  </button>
                </div>

                <button
                  onClick={closeCertModal}
                  className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold rounded-xl font-mono text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105"
                >
                  CLOSE 3D MODAL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
