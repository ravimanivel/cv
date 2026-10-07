import React, { useState } from 'react';
import { playSciFiSound } from '../utils/audio';
import { setVoiceEnabled, speakText } from '../utils/speech';

export default function SpeakerButton({ isVoice, toggleVoice }) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleToggle = () => {
    playSciFiSound('click');
    const nextState = !isVoice;
    toggleVoice();
    setVoiceEnabled(nextState);

    if (nextState) {
      setToastMessage('🤖 CHATGPT VOICE ENABLED: Hover over any text to listen!');
      speakText('ChatGPT Voice active. Hover over any text to listen.', true);
    } else {
      setToastMessage('🔇 CHATGPT VOICE DISABLED');
    }

    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <div className="relative flex items-center">
      {/* Toast Notification Banner */}
      {showToast && (
        <div className="absolute bottom-full left-0 mb-3 w-64 sm:w-72 p-3 bg-gray-950/95 border border-cyan-400/80 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.5)] backdrop-blur-xl z-50 text-xs font-mono text-cyan-200 animate-bounce">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-semibold text-cyan-300">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Main Speaker Button */}
      <button
        onClick={handleToggle}
        aria-label={isVoice ? 'Turn Off ChatGPT Voice' : 'Turn On ChatGPT Voice'}
        title={isVoice ? 'ChatGPT Voice Active (Click to Mute)' : 'Click to Enable ChatGPT Voice Reader'}
        className={`group relative flex items-center space-x-2.5 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border backdrop-blur-xl ${
          isVoice
            ? 'bg-cyan-950/90 border-cyan-400 text-cyan-200 shadow-[0_0_25px_rgba(6,182,212,0.5)] ring-2 ring-cyan-400/30'
            : 'bg-gray-900/85 border-gray-700/80 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]'
        }`}
      >
        {/* Speaker Icon & Audio Equalizer Wave Animation */}
        <div className="relative flex items-center justify-center w-6 h-6">
          {isVoice ? (
            <div className="flex items-end justify-center space-x-0.5 h-4 w-5">
              <span className="w-1 bg-cyan-400 rounded-full animate-equalizer-1" />
              <span className="w-1 bg-cyan-300 rounded-full animate-equalizer-2" />
              <span className="w-1 bg-cyan-400 rounded-full animate-equalizer-3" />
            </div>
          ) : (
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          )}
        </div>

        {/* Text Label */}
        <div className="flex flex-col text-left">
          <span className="font-bold text-[11px] leading-tight tracking-widest uppercase">
            CHATGPT VOICE
          </span>
          <span
            className={`text-[9px] font-mono leading-none tracking-normal font-semibold ${
              isVoice ? 'text-cyan-300' : 'text-gray-400 group-hover:text-cyan-300'
            }`}
          >
            {isVoice ? 'STATE: ACTIVE 🤖' : 'OFF • CLICK TO ON'}
          </span>
        </div>

        {/* Pulse Dot Status Pill */}
        <span
          className={`flex h-2 w-2 rounded-full transition-all duration-300 ${
            isVoice
              ? 'bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-ping'
              : 'bg-gray-600 group-hover:bg-cyan-500'
          }`}
        />
      </button>
    </div>
  );
}
