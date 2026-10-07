import React, { useEffect, useState } from 'react';
import { speakText, stopSpeech, setVoiceEnabled } from '../utils/speech';

export default function VoiceHoverReader({ enabled }) {
  const [activeElementRect, setActiveElementRect] = useState(null);

  useEffect(() => {
    // Sync voice state with utility module
    setVoiceEnabled(enabled);

    if (!enabled) {
      stopSpeech();
      setActiveElementRect(null);
      return;
    }

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target is a text node or text-bearing HTML element
      const tag = target.tagName ? target.tagName.toLowerCase() : '';
      const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'li', 'a', 'span', 'button', 'label', 'div'];

      if (textTags.includes(tag) || target.getAttribute('data-speak')) {
        // Extract direct text content (ignoring massive outer containers)
        const text = target.innerText || target.textContent;

        // Only read if text length is reasonable (not whole page wrapper)
        if (text && text.trim().length > 2 && text.trim().length < 400) {
          // Ignore if hovering over terminal inputs, code wrappers, or floating control buttons
          if (
            target.closest('.no-voice') ||
            target.closest('button') ||
            target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA'
          ) {
            return;
          }

          const rect = target.getBoundingClientRect();
          setActiveElementRect({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX,
            width: rect.width,
            height: rect.height
          });

          // Trim text for reading out loud
          const cleanSentence = text.trim();
          speakText(cleanSentence);
        }
      }
    };

    const handleMouseOut = () => {
      setActiveElementRect(null);
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mouseover', handleMouseOver);
      stopSpeech();
    };
  }, [enabled]);

  if (!enabled || !activeElementRect) return null;

  return (
    <>
      {/* Sci-Fi Text Hover Highlight Box */}
      <div
        className="fixed pointer-events-none z-40 border border-cyan-400/60 rounded transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-cyan-500/10"
        style={{
          top: `${activeElementRect.top - window.scrollY - 2}px`,
          left: `${activeElementRect.left - 2}px`,
          width: `${activeElementRect.width + 4}px`,
          height: `${activeElementRect.height + 4}px`
        }}
      >
        {/* Voice AI Status Badge indicator */}
        <div className="absolute -top-6 right-0 px-2 py-0.5 bg-black/90 border border-cyan-400 rounded text-[9px] font-mono text-cyan-300 flex items-center space-x-1 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>READING ALOUD</span>
        </div>
      </div>
    </>
  );
}
