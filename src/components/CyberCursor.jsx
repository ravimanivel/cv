import React, { useEffect, useState } from 'react';

export default function CyberCursor({ theme }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Smooth lag effect for outer ring
  useEffect(() => {
    let animationFrame;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.25,
        y: prev.y + (pos.y - prev.y) * 0.25
      }));
      animationFrame = requestAnimationFrame(updateTrailing);
    };
    animationFrame = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos]);

  const getThemeColor = () => {
    switch (theme) {
      case 'matrix': return 'border-emerald-400 bg-emerald-400';
      case 'neon': return 'border-pink-400 bg-pink-400';
      case 'synthwave': return 'border-violet-400 bg-violet-400';
      case 'cyber':
      default: return 'border-cyan-400 bg-cyan-400';
    }
  };

  const getGlow = () => {
    switch (theme) {
      case 'matrix': return 'shadow-[0_0_15px_#10b981]';
      case 'neon': return 'shadow-[0_0_15px_#ec4899]';
      case 'synthwave': return 'shadow-[0_0_15px_#8b5cf6]';
      case 'cyber':
      default: return 'shadow-[0_0_15px_#06b6d4]';
    }
  };

  return (
    <>
      {/* Center Precision Pointer Dot */}
      <div
        className={`fixed pointer-events-none z-50 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ${getThemeColor()} ${getGlow()} hidden md:block`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Outer Cyber Crosshair Ring */}
      <div
        className={`fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-opacity-60 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out hidden md:block ${getThemeColor().split(' ')[0]} ${getGlow()} ${
          clicked ? 'scale-150 border-white opacity-100' : 'scale-100 opacity-60'
        }`}
        style={{ left: `${trailingPos.x}px`, top: `${trailingPos.y}px` }}
      >
        {/* Subtle Crosshair accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-cyan-400/80" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-0.5 h-1.5 bg-cyan-400/80" />
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-cyan-400/80" />
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-0.5 w-1.5 bg-cyan-400/80" />
      </div>
    </>
  );
}
