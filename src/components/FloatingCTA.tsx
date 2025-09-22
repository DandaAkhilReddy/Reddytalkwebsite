'use client';

import React, { useState, useEffect } from 'react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleDemo = () => {
    // Load Calendly
    if (!window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: 'https://calendly.com/reddytalk-demo/30min'
          });
        }
      };
      document.body.appendChild(script);
    } else {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/reddytalk-demo/30min'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-2xl transform transition-all duration-500 hover:scale-110 ${
          isExpanded ? 'px-6 py-4' : 'w-16 h-16'
        }`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <button
          onClick={handleScheduleDemo}
          className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
        >
          {isExpanded ? (
            <span className="whitespace-nowrap animate-pulse">
              🚀 Free Demo Now!
            </span>
          ) : (
            <span className="text-2xl animate-bounce">💬</span>
          )}
        </button>
      </div>

      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" />
      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-10" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default FloatingCTA;