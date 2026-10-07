import React, { useEffect, useState } from 'react';
import { FiUser, FiBook, FiCode, FiTarget, FiMail, FiMapPin, FiPhone, FiChevronRight, FiChevronLeft, FiCheckCircle } from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { playSciFiSound } from '../utils/audio';

const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'personal',
      stepNum: '01',
      title: 'IDENTITY & EXECUTIVE PROFILE',
      subtitle: 'Who I Am & Personal Parameters',
      icon: <FiUser />,
      badge: 'STEP 01 • PROFILE'
    },
    {
      id: 'education',
      stepNum: '02',
      title: 'ACADEMIC CORE & FOUNDATIONS',
      subtitle: 'Computer Science Education & Qualifications',
      icon: <FiBook />,
      badge: 'STEP 02 • EDUCATION'
    },
    {
      id: 'philosophy',
      stepNum: '03',
      title: 'ENGINEERING METHODOLOGY',
      subtitle: 'Development Philosophy & Code Architecture',
      icon: <FiCode />,
      badge: 'STEP 03 • METHODOLOGY'
    },
    {
      id: 'goals',
      stepNum: '04',
      title: 'CAREER GOALS & SPECIALIZATIONS',
      subtitle: 'Future Objectives & Value Addition',
      icon: <FiTarget />,
      badge: 'STEP 04 • VISION'
    }
  ];

  useEffect(() => {
    Aos.init({ duration: 900, once: true });
  }, []);

  const handleNextStep = () => {
    playSciFiSound('click');
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrevStep = () => {
    playSciFiSound('click');
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const currentStepObj = steps[activeStep];

  return (
    <section id="about" className="py-16 relative" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-3 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <FiUser className="text-sm animate-pulse" />
            <span className="font-semibold uppercase tracking-wider">STEP-BY-STEP DEVELOPER PROFILE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              About Ravi M
            </span>
          </h2>

          <p className="text-gray-300 font-light max-w-4xl mx-auto leading-relaxed text-sm sm:text-base">
            Dedicated Full Stack Developer specializing in Laravel, React, PHP, MySQL, Express, Angular, MongoDB, and modern DevOps tools. Explore my journey step-by-step below.
          </p>
        </div>

        {/* STEP-BY-STEP PROGRESS NODE TRACKER */}
        <div className="mb-8 relative py-4 bg-gray-900/80 border border-cyan-500/30 rounded-2xl p-4 sm:p-6 backdrop-blur-md shadow-lg">
          {/* Connecting Neon Progress Track Bar */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-gray-800 -translate-y-1/2 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 transition-all duration-500 shadow-[0_0_12px_#06b6d4]"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    playSciFiSound('click');
                    setActiveStep(idx);
                  }}
                  className={`p-3.5 sm:p-4 rounded-xl text-left font-mono transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-cyan-950/95 border-cyan-400 text-white shadow-[0_0_25px_rgba(6,182,212,0.45)] ring-2 ring-cyan-400/40 scale-102'
                      : 'bg-gray-950/90 border-gray-800 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        isSelected ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400' : 'bg-gray-900 text-gray-400'
                      }`}
                    >
                      STEP {step.stepNum}
                    </span>
                    <span className="text-base sm:text-lg text-cyan-400">{step.icon}</span>
                  </div>

                  <div className={`font-bold text-xs sm:text-sm truncate ${isSelected ? 'text-cyan-300' : 'text-gray-300'}`}>
                    {step.title.split('&')[0]}
                  </div>

                  <div className="text-[10px] text-gray-400 truncate mt-1">
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STEP MAIN CONTAINER CARD */}
        <div className="bg-gray-900/90 border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.2)] relative overflow-hidden">
          {/* Cyber Box Accent Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

          {/* Active Step Banner Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
            <div className="flex items-center gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 text-2xl sm:text-3xl shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-pulse">
                {currentStepObj.icon}
              </div>
              <div>
                <span className="inline-block px-3 py-0.5 bg-cyan-500/20 border border-cyan-400/60 text-cyan-300 text-[10px] font-mono rounded-full font-bold uppercase tracking-wider mb-1">
                  {currentStepObj.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {currentStepObj.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  {currentStepObj.subtitle}
                </p>
              </div>
            </div>

            {/* Step Counter Indicator */}
            <div className="px-4 py-1.5 bg-black/80 border border-cyan-500/40 rounded-xl text-xs font-mono text-cyan-300 font-bold">
              STEP {activeStep + 1} OF {steps.length}
            </div>
          </div>

          {/* STEP CONTENT BODY */}
          <div className="py-8 animate-in fade-in duration-300">
            {/* STEP 01: IDENTITY & PERSONAL INFO */}
            {activeStep === 0 && (
              <div className="space-y-6">
                <p className="text-gray-200 font-light leading-relaxed text-base sm:text-lg">
                  I am a passionate software engineer based in Salem, Tamil Nadu, India. Specializing in modern web applications, RESTful microservices, and database architecture using React, Laravel, PHP, and MySQL.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono">
                  {[
                    { icon: <FiUser />, title: 'NAME', content: 'Ravi M' },
                    { icon: <FiMail />, title: 'EMAIL', content: 'ravimanivel999@gmail.com' },
                    { icon: <FiMapPin />, title: 'LOCATION', content: 'Salem, Tamil Nadu, India' },
                    { icon: <FiPhone />, title: 'PHONE', content: '+91 6380365924' }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3.5 p-4 bg-gray-950/80 border border-gray-800 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 shadow-md"
                    >
                      <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-lg">
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-gray-400 tracking-wider font-bold">
                          {item.title}
                        </div>
                        <div className="text-gray-100 font-semibold text-xs sm:text-sm truncate">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 02: ACADEMIC CORE & DEGREES */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <div className="p-6 bg-gray-950/80 border border-cyan-500/40 rounded-2xl shadow-lg">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="p-4 bg-cyan-950/90 border border-cyan-400/60 rounded-2xl text-cyan-400 text-3xl shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                      <FiBook />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-cyan-300 font-semibold font-mono text-base mb-3">
                        Bishop Heber College
                      </p>
                      <div className="inline-block px-3 py-1 bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-mono font-bold mb-4">
                        GRADUATED: 2021 – 2024
                      </div>

                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-gray-300">
                        <div className="flex items-center gap-2 p-2.5 bg-gray-900 rounded-xl border border-gray-800">
                          <FiCheckCircle className="text-cyan-400 shrink-0" />
                          <span>Data Structures & Algorithms</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-gray-900 rounded-xl border border-gray-800">
                          <FiCheckCircle className="text-cyan-400 shrink-0" />
                          <span>Database Management Systems (DBMS)</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-gray-900 rounded-xl border border-gray-800">
                          <FiCheckCircle className="text-cyan-400 shrink-0" />
                          <span>Object-Oriented Programming (OOP)</span>
                        </div>
                        <div className="flex items-center gap-2 p-2.5 bg-gray-900 rounded-xl border border-gray-800">
                          <FiCheckCircle className="text-cyan-400 shrink-0" />
                          <span>Web Development & Software Engineering</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 03: ENGINEERING METHODOLOGY */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <p className="text-gray-200 font-light leading-relaxed text-base sm:text-lg">
                  My software development process follows modern clean code principles, modular component design, test-driven validation, and security-first database queries.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-5 bg-gray-950/80 border border-gray-800 rounded-2xl hover:border-cyan-400/50 transition-all">
                    <div className="text-cyan-400 font-bold text-sm mb-2">01. CLEAN ARCHITECTURE</div>
                    <p className="text-gray-400 font-sans text-xs leading-relaxed">
                      Writing maintainable, scalable, and self-documenting code with reusable React hooks and structured Laravel controllers.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-950/80 border border-gray-800 rounded-2xl hover:border-cyan-400/50 transition-all">
                    <div className="text-cyan-400 font-bold text-sm mb-2">02. RESTful API DESIGN</div>
                    <p className="text-gray-400 font-sans text-xs leading-relaxed">
                      Building secure JSON API endpoints, authentication middleware, rate-limiting, and sanitized database transactions.
                    </p>
                  </div>

                  <div className="p-5 bg-gray-950/80 border border-gray-800 rounded-2xl hover:border-cyan-400/50 transition-all">
                    <div className="text-cyan-400 font-bold text-sm mb-2">03. UI/UX PERFORMANCE</div>
                    <p className="text-gray-400 font-sans text-xs leading-relaxed">
                      Optimizing page rendering, dynamic particle canvases, lazy loading assets, and responsive Tailwind CSS layouts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 04: CAREER GOALS & VISION */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <p className="text-gray-200 font-light leading-relaxed text-base sm:text-lg">
                  Aiming to build high-impact enterprise fullstack web applications, lead technical innovation, and leverage AI/cloud services to solve complex real-world problems.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-5 bg-cyan-950/50 border border-cyan-500/40 rounded-2xl flex items-start gap-3">
                    <FiCheckCircle className="text-cyan-400 text-lg shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Fullstack Mastery</h4>
                      <p className="text-gray-300 font-sans text-xs leading-relaxed">
                        Continuous advancement in fullstack JavaScript/PHP ecosystems, microservices, and serverless cloud architectures.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 bg-cyan-950/50 border border-cyan-500/40 rounded-2xl flex items-start gap-3">
                    <FiCheckCircle className="text-cyan-400 text-lg shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">Production DevOps</h4>
                      <p className="text-gray-300 font-sans text-xs leading-relaxed">
                        Expanding automated CI/CD deployment pipelines, Docker container orchestration, and cloud infrastructure management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* STEP NAVIGATION FOOTER BUTTONS */}
          <div className="pt-6 border-t border-gray-800 flex items-center justify-between gap-4 font-mono text-xs">
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-950 border border-gray-800 text-gray-300 hover:text-white hover:border-cyan-400 transition-all font-bold"
            >
              <FiChevronLeft className="text-base" />
              <span>PREVIOUS STEP</span>
            </button>

            <div className="hidden sm:flex items-center space-x-1">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeStep === i ? 'bg-cyan-400 w-6 shadow-[0_0_8px_#06b6d4]' : 'bg-gray-800'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextStep}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105"
            >
              <span>NEXT STEP</span>
              <FiChevronRight className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;