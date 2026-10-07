import React, { useState, useEffect } from 'react';
import { playSciFiSound, setSoundEnabled } from '../utils/audio';

export default function TechHUDHeader({ onOpenTerminal, theme, setTheme, isMatrix, toggleMatrix, isVoice, toggleVoice }) {
  const [soundOn, setSoundOn] = useState(true);
  const [latency, setLatency] = useState(1.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((1.0 + Math.random() * 0.8).toFixed(1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) playSciFiSound('click');
  };

  const themes = [
    { id: 'cyber', label: 'CYBER' },
    { id: 'matrix', label: 'MATRIX' },
    { id: 'neon', label: 'NEON' },
    { id: 'synthwave', label: 'SYNTH' }
  ];

  return (
    <div className="w-full bg-black/90 border-b border-cyan-500/20 text-xs font-mono text-cyan-400/90 py-1.5 px-4 backdrop-blur-md z-40 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left Side: System Pulse & Status */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold tracking-wider">SYS_ONLINE</span>
          </div>
          <span className="text-gray-600">|</span>
          <span className="hidden sm:inline text-cyan-300/80">LATENCY: {latency}ms</span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <span className="hidden md:inline text-purple-300/80">NODE: RAVI_DEV_CORE</span>
        </div>

        {/* Center: Sci-Fi Marquee Ticker */}
        <div className="hidden lg:flex items-center space-x-2 max-w-md overflow-hidden text-gray-400 text-[11px]">
          <span className="text-cyan-500 font-bold">INFO:</span>
          <div className="truncate animate-pulse">
            HOVER OVER ANY TEXT TO READ SENTENCES ALOUD • VOICE AI SUPPORTED
          </div>
        </div>

        {/* Right Side: Interactive Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Voice Speaker Reader AI Toggle Button */}
          <button
            onClick={() => {
              toggleVoice();
              playSciFiSound('click');
            }}
            title={isVoice ? 'Speaker Read Aloud Active (Click to Mute)' : 'Read Aloud Disabled (Click Speaker to Enable)'}
            className={`flex items-center space-x-1 px-2.5 py-0.5 rounded border text-[10px] font-bold transition-all ${
              isVoice
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                : 'bg-gray-900/80 border-gray-700 text-gray-400 hover:border-cyan-500/40 hover:text-cyan-300'
            }`}
          >
            <span>{isVoice ? '🔊' : '🔇'}</span>
            <span>READ ALOUD: {isVoice ? 'ON' : 'OFF'}</span>
          </button>

          {/* Theme Selector */}
          <div className="flex items-center space-x-1 bg-gray-900/80 p-0.5 rounded border border-cyan-500/30">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  playSciFiSound('hover');
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                  theme === t.id
                    ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                    : 'text-gray-400 hover:text-cyan-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Matrix Rain Button */}
          <button
            onClick={() => {
              toggleMatrix();
              playSciFiSound('click');
            }}
            title="Toggle Matrix Background"
            className={`hidden sm:flex items-center space-x-1 px-2 py-0.5 rounded border text-[10px] transition-all ${
              isMatrix
                ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.4)]'
                : 'bg-gray-900/80 border-gray-700 text-gray-400 hover:border-emerald-500/40'
            }`}
          >
            <span>MATRIX</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            title={soundOn ? 'Mute Audio FX' : 'Enable Audio FX'}
            className="p-1 text-gray-400 hover:text-cyan-300 transition-colors text-sm"
          >
            {soundOn ? '🔊' : '🔇'}
          </button>

          {/* Command Terminal Trigger Button */}
          <button
            onClick={() => {
              onOpenTerminal();
              playSciFiSound('click');
            }}
            className="flex items-center space-x-1 px-2.5 py-0.5 bg-cyan-600/30 hover:bg-cyan-500/40 text-cyan-300 rounded border border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.3)] text-[10px] font-bold tracking-wide transition-all"
          >
            <span>CTRL + K</span>
            <span className="hidden sm:inline">CLI</span>
          </button>
        </div>
      </div>
    </div>
  );
}
