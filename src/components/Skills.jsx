import React, { useEffect, useState } from 'react';
import { playSciFiSound } from '../utils/audio';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'grid'
  const [selectedMilestone, setSelectedMilestone] = useState(2); // default to Waypoint 03 (Laravel & React era)

  // Skill Inventory with reliable vector icons
  const skills = [
    { name: 'Laravel', icon: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', category: 'Backend', level: '95%' },
    { name: 'PHP', icon: 'https://www.php.net//images/logos/new-php-logo.svg', category: 'Backend', level: '95%' },
    { name: 'React.js', icon: 'https://react.dev/images/brand/logo_light.svg', category: 'Frontend', level: '90%' },
    { name: 'Angular', icon: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5RUMBCgoKDQwNGg8PGjclHyU3Nzc3NzcwNzc3Nzc3ODc3Nzc3Nzc3Ljc3Nzc3Nzc3Nzc3Nzc3Nzc3NzcrNzU3NzItNf/AABEIABwAHAMBEQACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAEBgECBwP/xAAvEAACAQMCBAQDCQAAAAAAAAABAgMEBREAEgYhMVETImGBQVKxBxQVI0JxgpGh/8QAGwEAAgIDAQAAAAAAAAAAAAAABQYDBAECBwD/xAAoEQABAwIFAwQDAAAAAAAAAAABAAIDBBESEyEx8AVxwVFhkdEiQbH/2gAMAwEAAhEDEQA/ADrZa626zGKhhMhXG9icKme59jpilmZELuKf6iqhpm4pTbyqX2gFprPubVCzTogMuweVGPPaO/LBzy669TzZgxWsFDDUGojzALA7e/uulRwrcKm1w3K04raeRMlE5SIehGPjg5HI+2p462Jkhjl/Ej4Qx9cxshjk0I+EmtUAnro0I1kv1WlcCXKK3Q3qqnPkigjfHzEFsAepJA99JlWcZaFP1mndO6GNu5JH8QfDVok4mmutVVuNxjYK56eO/MH9h29RrY1GVhDeBb9SqG0TY42caPtE/Zxe2pZq60VRKEq00St+l1HnX+hn+LatV8AlY2ZvY9jtzshfVoAbSt56c7LJGdgRjtpzDRZbOOqZjVyJFJErkRy7d4+bHMf7rnT5E25YLg4jUeU7cPcF2O+2qGq/E55Jig8ZImT8tviuCuR76iEzgdEArusVdLMYzGAP1e+o9d7JR4jp6SxX4JYriahIkB8TIJR+YZcgYPL640e6fNmtwyBZGbUwY5mYSeXSw8WG5DTO1+ipubqjZnPfXNHuKcWhRBNIm/ZI6b1KNtYjcp6g+mogdVKWtda42VdGKJ5uqdS0EKCAdNkLiWJclADl/9k=', category: 'Frontend', level: '85%' },
    { name: 'Node.js', icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg', category: 'Backend', level: '82%' },
    { name: 'Express.js', icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', category: 'Backend', level: '85%' },
    { name: 'MongoDB', icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg', category: 'Database', level: '88%' },
    { name: 'MySQL', icon: 'https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg', category: 'Database', level: '92%' },
    { name: 'Python', icon: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', category: 'Language', level: '80%' },
    { name: 'JavaScript', icon: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg', category: 'Language', level: '92%' },
    { name: 'HTML5', icon: 'https://cdn.worldvectorlogo.com/logos/html-1.svg', category: 'Frontend', level: '98%' },
    { name: 'CSS3', icon: 'https://cdn.worldvectorlogo.com/logos/css-3.svg', category: 'Frontend', level: '95%' },
    { name: 'Bootstrap', icon: 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg', category: 'Frontend', level: '90%' },
    { name: 'Git', icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', category: 'DevOps', level: '90%' },
    { name: 'GitHub', icon: 'https://brand.github.com/_next/static/media/logo-03.cc5e5332.png', category: 'DevOps', level: '92%' },
    { name: 'Docker', icon: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', category: 'DevOps', level: '80%' },
    { name: 'Linux', icon: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg', category: 'OS', level: '82%' },
  ];

  // Chronological Journey Milestones (Career & Tech Stack Roadmap)
  const journeyWaypoints = [
    {
      id: 0,
      year: '2021',
      title: 'Waypoint 01: Foundations & CS Core',
      role: 'Web Development & CS Fundamentals',
      description: 'Mastered computer science fundamentals, data structures, HTML5, CSS3, and core JavaScript (ES6+). Built responsive static applications.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'C/C++'],
      icon: '⚡',
      location: 'Bishop Heber College, Salem'
    },
    {
      id: 1,
      year: '2022 – 2023',
      title: 'Waypoint 02: Fullstack & Relational SQL',
      role: 'PHP & MySQL Architecture',
      description: 'Architected dynamic server-side applications, relational database schemas, complex SQL queries, REST endpoints, and Git version control.',
      skills: ['PHP', 'MySQL', 'Git', 'GitHub', 'Linux'],
      icon: '🐘',
      location: 'Production Server Deployments'
    },
    {
      id: 2,
      year: '2023 – 2024',
      title: 'Waypoint 03: Enterprise Frameworks & SPAs',
      role: 'Laravel & React / Angular Ecosystem',
      description: 'Developed fullstack web platforms, Laravel REST APIs, React SPAs, Angular administrative dashboards, and MongoDB NoSQL pipelines.',
      skills: ['Laravel', 'React.js', 'Angular', 'Node.js', 'Express.js', 'MongoDB'],
      icon: '🚀',
      location: 'Fullstack Software Engineering'
    },
    {
      id: 3,
      year: '2024 – Present',
      title: 'Waypoint 04: Cloud, Containers & Realtime APIs',
      role: 'DevOps & Realtime Systems',
      description: 'Implementing real-time WebSockets (Socket.io), Docker microservice containerization, AWS AI service integrations, and high-performance production deploys.',
      skills: ['Docker', 'Realtime WebSockets', 'AWS AI', 'Python', 'Production DevOps'],
      icon: '🛰️',
      location: 'High Performance Production Apps'
    }
  ];

  const activeWay = journeyWaypoints[selectedMilestone];

  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <span>DEVELOPER ROADMAP & SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              My Tech Journey & Skills Matrix
            </span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto text-sm sm:text-base">
            Interactive roadmap mapping technical evolution, key milestones, frameworks, and production skill sets over time.
          </p>

          {/* View Mode Selector (Roadmap vs Skill Grid) */}
          <div className="mt-6 flex items-center justify-center space-x-3">
            <button
              onClick={() => {
                playSciFiSound('click');
                setActiveTab('roadmap');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${activeTab === 'roadmap'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-gray-900/80 border-gray-800 text-gray-400 hover:text-cyan-300'
                }`}
            >
              🗺️ CAREER ROADMAP MAP
            </button>
            <button
              onClick={() => {
                playSciFiSound('click');
                setActiveTab('grid');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border ${activeTab === 'grid'
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-gray-900/80 border-gray-800 text-gray-400 hover:text-cyan-300'
                }`}
            >
              ⚡ SKILLS MATRIX GRID
            </button>
          </div>
        </div>

        {/* ROADMAP JOURNEY TAB */}
        {activeTab === 'roadmap' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Interactive Timeline Waypoint Map Node Bar */}
            <div className="relative py-6 bg-gray-900/90 border border-cyan-500/40 rounded-2xl p-6 backdrop-blur-md shadow-lg">
              {/* Connecting Neon Beam Line */}
              <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 -translate-y-1/2 rounded-full opacity-60" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {journeyWaypoints.map((way) => {
                  const isSelected = selectedMilestone === way.id;
                  return (
                    <button
                      key={way.id}
                      onClick={() => {
                        playSciFiSound('click');
                        setSelectedMilestone(way.id);
                      }}
                      className={`p-4 rounded-xl text-left font-mono transition-all duration-200 border flex flex-col justify-between ${isSelected
                          ? 'bg-cyan-950/95 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.5)] scale-102'
                          : 'bg-gray-950/90 border-gray-800 hover:border-cyan-500/40 hover:bg-gray-900'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{way.icon}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded border font-bold ${isSelected ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200' : 'bg-gray-900 border-gray-800 text-gray-400'
                          }`}>
                          {way.year}
                        </span>
                      </div>
                      <div className={`font-bold text-sm mb-1 ${isSelected ? 'text-white' : 'text-gray-300'}`}>
                        {way.role}
                      </div>
                      <div className="text-[11px] text-cyan-400 font-semibold truncate">
                        {way.title.split(':')[0]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Waypoint Detail Card */}
            <div className="bg-gray-900/90 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-[0_0_35px_rgba(6,182,212,0.2)] animate-in fade-in duration-200">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-gray-800">
                <div>
                  <div className="inline-flex items-center space-x-2 text-cyan-400 font-mono text-xs mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="font-bold">MILESTONE YEAR: {activeWay.year}</span>
                    <span>•</span>
                    <span>{activeWay.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeWay.title}
                  </h3>
                  <p className="text-cyan-300 font-mono font-semibold text-sm mt-1">
                    {activeWay.role}
                  </p>
                </div>

                <div className="px-4 py-2 bg-black/80 border border-cyan-500/40 rounded-xl text-xs font-mono text-cyan-300 font-bold">
                  STATUS: COMPLETED & INTEGRATED
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-gray-200 font-light leading-relaxed text-base sm:text-lg">
                  {activeWay.description}
                </p>

                <div>
                  <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-3 font-bold">
                    PRIMARY STACK & FRAMEWORKS MASTERED DURING THIS ERA:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeWay.skills.map((stk, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 bg-cyan-950/90 border border-cyan-500/40 text-cyan-200 rounded-lg font-mono text-xs font-semibold shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                      >
                        ✓ {stk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* SKILLS MATRIX GRID TAB */
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-in fade-in duration-300">
            {skills.map((skill, index) => (
              <div
                key={index}
                onMouseEnter={() => playSciFiSound('hover')}
                className="group relative bg-gray-900/90 border border-gray-800 hover:border-cyan-500/50 p-5 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-200 flex flex-col items-center justify-center backdrop-blur-md hover:-translate-y-1"
              >
                <div className="w-12 h-12 mb-3 relative flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-200">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                    loading="lazy"
                  />
                </div>

                <span className="text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors text-center">
                  {skill.name}
                </span>

                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-[10px] font-mono text-gray-400 group-hover:text-cyan-400">
                    {skill.category}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-bold">
                    {skill.level}
                  </span>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-3/4 bg-cyan-400 transition-all duration-200 rounded-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
