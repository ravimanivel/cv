import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when not at top, hide only when exactly at top
      setIsVisible(window.scrollY > 50); // 50px threshold to prevent flickering
    };

    // Initial check
    handleScroll();
    
    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[9999] transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:scale-105 transition-all"
      >
        <FaArrowUp className="text-white text-xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;