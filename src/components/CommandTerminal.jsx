import React, { useState, useEffect, useRef } from 'react';
import { playSciFiSound } from '../utils/audio';

export default function CommandTerminal({ isOpen, onClose, setTheme, theme, toggleMatrix, isMatrix }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'SYSTEM INTERFACE v2.4 ONLINE', type: 'system' },
    { text: 'Type "help" for available commands or "exit" to close.', type: 'info' }
  ]);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      playSciFiSound('open');
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim();
    if (!rawCmd) return;

    playSciFiSound('terminal');
    const newHistory = [...history, { text: `ravi@cyber-core:~$ ${rawCmd}`, type: 'input' }];
    const parts = rawCmd.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1] ? parts[1].toLowerCase() : '';

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE COMMANDS:
  help             - Show this help menu
  about            - Executive summary of Ravi M
  skills           - Display technical stack & proficiency
  projects         - List featured web projects
  contact          - Show contact channels & social links
  theme <name>     - Change visual theme (cyber, matrix, neon, synthwave)
  matrix           - Toggle digital matrix rain background
  clear            - Clear terminal output window
  download         - Download Ravi's Resume
  exit             - Close terminal window`,
          type: 'response'
        });
        break;

      case 'about':
      case 'profile':
      case 'education':
      case 'certifications':
        newHistory.push({
          text: `=====================================================
RAVI M // FULLSTACK WEB DEVELOPER & LARAVEL SPECIALIST
=====================================================

[1] IDENTITY & PROFILE:
  • Name:     Ravi M
  • Email:    ravimanivel999@gmail.com
  • Phone:    +91 6380365924
  • Location: Salem, Tamil Nadu, India
  • Bio:      Specializing in Laravel, React, PHP, MySQL,
             Angular, Express, MongoDB & clean Web APIs.

[2] ACADEMIC CORE (EDUCATION):
  • Degree:   Bachelor of Science in Computer Science
  • College:  Bishop Heber College
  • Period:   2021 – 2024

[3] CERTIFICATIONS & WORKSHOPS:
  • React State and Events (Microsoft) [Apr 2025]
  • Working with Data & Properties in React (Microsoft) [Apr 2025]
  • AWS AI Conclave (Amazon Web Services) [Jan 2025]
  • Web Development Fundamentals (IBM SkillBuild) [Sep 2024]
  • WordPress Website Creation (Coursera) [Sep 2024]
  • Fundamentals of Data Visualization (Microsoft) [Apr 2024]
  • Python Essentials I (Cisco Networking Academy) [Mar 2024]
  • Green Energy & Soft Computing (MGIT, Hyderabad) [Jul 2023]
  • 9-Day DevOps Workshop (SRM IST) [Jun 2023]
  • 8-Day Cyber Security & Hacking FDP (SRM IST) [Jun 2023]
  • LATEX & OVERLEAF Workshop (CBIT) [2023]
  • HTML & CSS Static Web Page Workshop (MARCELLO TECH) [2023]`,
          type: 'response'
        });
        break;

      case 'skills':
        newHistory.push({
          text: `PRIMARY TECH STACK:
  [PHP / Laravel]     ████████████████ 95%
  [React.js]          ████████████████ 90%
  [JavaScript / ES6+] ███████████████  92%
  [MySQL / MongoDB]   ██████████████   88%
  [Tailwind CSS]      ████████████████ 95%
  [Node.js / Express] █████████████    82%
  [Docker / Linux]    ████████████     80%`,
          type: 'response'
        });
        break;

      case 'projects':
        newHistory.push({
          text: `FEATURED PROJECTS:
  1. Fullstack Enterprise LMS / School ERP System
  2. E-Commerce Platform with Realtime Analytics
  3. Hostel Fee & Accommodation Management System
  4. Interactive Portfolio & Cyber UI Framework`,
          type: 'response'
        });
        break;

      case 'contact':
        newHistory.push({
          text: `CONNECT CHANNELS:
  Email: ravimanivel18@gmail.com
  GitHub: github.com/ravimanivel
  LinkedIn: linkedin.com/in/ravi-m`,
          type: 'response'
        });
        break;

      case 'theme':
        if (['cyber', 'matrix', 'neon', 'synthwave'].includes(arg)) {
          setTheme(arg);
          newHistory.push({ text: `Visual theme updated to [${arg.toUpperCase()}].`, type: 'success' });
        } else {
          newHistory.push({ text: `Invalid theme. Available themes: cyber, matrix, neon, synthwave`, type: 'error' });
        }
        break;

      case 'matrix':
        toggleMatrix();
        newHistory.push({ text: `Matrix digital rain backdrop is now [${!isMatrix ? 'ENABLED' : 'DISABLED'}].`, type: 'success' });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'download':
        const link = document.createElement('a');
        link.href = '/src/assets/M_RAVI_Web_Developer .pdf';
        link.download = 'M_RAVI_Web_Developer.pdf';
        link.click();
        newHistory.push({ text: `Initiating download of M_RAVI_Web_Developer.pdf...`, type: 'success' });
        break;

      case 'exit':
      case 'quit':
      case 'close':
        playSciFiSound('close');
        onClose();
        return;

      default:
        newHistory.push({ text: `Command not recognized: "${cmd}". Type "help" for command list.`, type: 'error' });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'Escape') {
      playSciFiSound('close');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-3xl bg-gray-950/95 border border-cyan-500/40 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden font-mono text-sm text-cyan-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-cyan-500/30">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:opacity-100" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs tracking-wider text-cyan-400 font-semibold uppercase">
              ravi@cyber-core:~ (bash v5.2)
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs text-gray-400">
            <span className="hidden sm:inline">Press ESC to exit</span>
            <button 
              onClick={() => { playSciFiSound('close'); onClose(); }}
              className="text-gray-400 hover:text-cyan-300 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Terminal Window Body */}
        <div className="p-5 h-96 overflow-y-auto space-y-2 selection:bg-cyan-500 selection:text-black">
          {history.map((item, idx) => (
            <div 
              key={idx} 
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'system' ? 'text-cyan-400 font-bold' :
                item.type === 'input' ? 'text-gray-300' :
                item.type === 'success' ? 'text-emerald-400' :
                item.type === 'error' ? 'text-rose-400' :
                item.type === 'info' ? 'text-purple-300' : 'text-cyan-100/90'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Command Input Line */}
        <div className="flex items-center px-4 py-3 bg-gray-900/90 border-t border-cyan-500/30 text-cyan-400">
          <span className="mr-2 font-bold text-emerald-400">ravi@cyber-core:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-cyan-200 placeholder-cyan-700 font-mono"
            placeholder="Type a command (e.g. help, skills, theme neon)..."
            autoFocus
          />
          <button 
            onClick={() => handleCommand(input)}
            className="ml-2 px-3 py-1 bg-cyan-600/30 hover:bg-cyan-500/50 text-cyan-300 text-xs rounded border border-cyan-400/30 transition-all"
          >
            EXECUTE
          </button>
        </div>
      </div>
    </div>
  );
}
