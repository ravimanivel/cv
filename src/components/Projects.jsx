import { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { playSciFiSound } from '../utils/audio';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const allProjects = [
    {
      title: "Kaipulla Realtime Voting Portal",
      description: "Interactive real-time poll system with dynamic voting analytics, live chat streams, and instant WebSocket updates.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      link: "https://kaipulla-vote-frontend.vercel.app/",
      github: "https://github.com/ravimanivel/kaipulla_vote_frontend",
      image: "https://raw.githubusercontent.com/ravimanivel/websites/refs/heads/main/kaipulla.png"
    },
    {
      title: "Link Hub – Bio Link Manager",
      description: "Custom bio page manager built on Laravel backend to consolidate unlimited profile links, custom URLs, and analytics.",
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "REST API"],
      link: "https://linkhub-production.up.railway.app/",
      github: "https://github.com/ravimanivel/link_hub",
      image: "https://d3gribjq2zt3oj.cloudfront.net/blog-hub/wp-content/uploads/2017/08/Q119_Marketing_social_2_0124.png"
    },
    {
      title: "Ecommerce Admin Dashboard",
      description: "Enterprise management portal featuring product inventory control, real-time sales metrics, customer orders, and access control.",
      tags: ["Angular", "Express.js", "Node.js", "MongoDB", "REST API"],
      link: "https://ecommerce-admin-frontend-3z7r.vercel.app/",
      github: "https://github.com/ravimanivel/ecommerce_admin_frontend",
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Fullstack E-Commerce Store",
      description: "High-speed digital store frontend with dynamic cart, checkout pipeline, product search filters, and responsive UI.",
      tags: ["Angular", "Express.js", "Node.js", "MongoDB", "Tailwind"],
      link: "https://ecommerce-site-frontend-psi.vercel.app/",
      github: "https://github.com/ravimanivel/ecommerce-site-frontend",
      image: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "ATS Resume Builder Application",
      description: "Interactive application empowering job seekers to instantly format ATS-optimized professional resumes.",
      tags: ["Angular", "Node.js", "Express", "MongoDB"],
      link: "https://resume-creator-ravi-ms-projects.vercel.app/",
      github: "https://github.com/ravimanivel/resume_creator",
      image: "https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdW1lfGVufDB8fDB8fHww"
    },
    {
      title: "IP Tracker & Network Lookup",
      description: "Instant IP address geolocation, ISP lookup tool, and network latency inspector.",
      tags: ["JavaScript", "HTML5", "CSS3", "REST API"],
      link: "https://ravimanivel.github.io/Findmyip-Dev-Ravi-Manivel/",
      github: "https://github.com/ravimanivel/Findmyip-Dev-Ravi-Manivel/",
      image: "https://plus.unsplash.com/premium_photo-1714618833577-a09acdf53789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGlwfGVufDB8fDB8fHww"
    },
    {
      title: "Invoice & Billing Calculation Engine",
      description: "Dynamic point-of-sale invoice calculator web application for rapid itemization and total computation.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      link: "https://ravimanivel.github.io/billing_system/",
      github: "https://github.com/ravimanivel/billing_system/",
      image: "https://images.unsplash.com/photo-1735825764478-674bb8df9d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true
    });

    const updateCardsPerPage = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(allProjects.length / cardsPerPage);

  // Auto Play carousel effect
  useEffect(() => {
    if (!isAutoPlay || viewMode === 'grid') return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, totalPages, viewMode]);

  const handleNext = () => {
    playSciFiSound('click');
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    playSciFiSound('click');
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Touch Swipe Handling for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      handleNext();
    } else if (distance < -50) {
      handlePrev();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <span>PORTFOLIO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Featured Web Projects
            </span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            High-performance web applications built with modern architectures, clean code standards, and dynamic user interfaces.
          </p>

          {/* View Mode Toggle Controls (Carousel vs Grid) */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <button
              onClick={() => {
                playSciFiSound('click');
                setViewMode('carousel');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                viewMode === 'carousel'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'bg-gray-900/80 border-gray-800 text-gray-400 hover:text-cyan-300'
              }`}
            >
              🎡 CAROUSEL SLIDER
            </button>
            <button
              onClick={() => {
                playSciFiSound('click');
                setViewMode('grid');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                viewMode === 'grid'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                  : 'bg-gray-900/80 border-gray-800 text-gray-400 hover:text-cyan-300'
              }`}
            >
              🔲 GRID VIEW
            </button>
          </div>
        </div>

        {/* CAROUSEL SLIDER VIEW MODE */}
        {viewMode === 'carousel' ? (
          <div
            className="relative"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Outer Container */}
            <div className="overflow-hidden py-4 px-1">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {Array.from({ length: totalPages }).map((_, pageIdx) => {
                  const start = pageIdx * cardsPerPage;
                  const pageProjects = allProjects.slice(start, start + cardsPerPage);

                  return (
                    <div
                      key={pageIdx}
                      className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-1"
                    >
                      {pageProjects.map((project, index) => {
                        const globalIndex = start + index;
                        return (
                          <div
                            key={globalIndex}
                            onMouseEnter={() => playSciFiSound('hover')}
                            className="group relative rounded-2xl overflow-hidden bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-500 flex flex-col justify-between backdrop-blur-md hover:-translate-y-1.5"
                          >
                            {/* Project Image Frame */}
                            <div className="h-48 sm:h-52 overflow-hidden relative border-b border-gray-800">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />

                              <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-cyan-500/40 rounded text-[10px] font-mono text-cyan-300 backdrop-blur-sm">
                                PROJ_0{globalIndex + 1}
                              </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                              <div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                                  {project.title}
                                </h3>
                                <p className="text-gray-300/90 text-sm mb-5 leading-relaxed font-light">
                                  {project.description}
                                </p>
                              </div>

                              <div>
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                  {project.tags.map((tag, i) => (
                                    <span
                                      key={i}
                                      className="px-2.5 py-0.5 bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 rounded-md text-[11px] font-mono"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 pt-3 border-t border-gray-800/80">
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => playSciFiSound('click')}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs rounded-lg transition-all shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                                  >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    LIVE DEMO
                                  </a>
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => playSciFiSound('click')}
                                    className="px-4 py-2 bg-gray-950 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-mono rounded-lg transition-all"
                                  >
                                    SOURCE
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sci-Fi Navigation Arrow Buttons */}
            <button
              onClick={handlePrev}
              aria-label="Previous Project Slide"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 z-20 p-3 bg-gray-950/90 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 transition-all backdrop-blur-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Project Slide"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 z-20 p-3 bg-gray-950/90 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 transition-all backdrop-blur-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Pagination Indicators & Auto-play status */}
            <div className="mt-8 flex flex-col items-center justify-center space-y-3">
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playSciFiSound('click');
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-cyan-400 shadow-[0_0_10px_#06b6d4]'
                        : 'w-2 bg-gray-700 hover:bg-cyan-500/50'
                    }`}
                  />
                ))}
              </div>

              <div className="text-xs font-mono text-cyan-400/80">
                SLIDE {currentIndex + 1} OF {totalPages} • {allProjects.length} TOTAL PROJECTS
              </div>
            </div>
          </div>
        ) : (
          /* FULL GRID VIEW MODE */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                onMouseEnter={() => playSciFiSound('hover')}
                className="group relative rounded-2xl overflow-hidden bg-gray-900/80 border border-gray-800 hover:border-cyan-500/50 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-500 flex flex-col justify-between backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <div className="h-48 overflow-hidden relative border-b border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 border border-cyan-500/40 rounded text-[10px] font-mono text-cyan-300 backdrop-blur-sm">
                    PROJ_0{index + 1}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300/90 text-sm mb-5 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 rounded-md text-[11px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-gray-800/80">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playSciFiSound('click')}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs rounded-lg transition-all shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        LIVE DEMO
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playSciFiSound('click')}
                        className="px-4 py-2 bg-gray-950 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs font-mono rounded-lg transition-all"
                      >
                        SOURCE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
