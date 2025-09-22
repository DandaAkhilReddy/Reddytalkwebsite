'use client';

import React, { useEffect, useState } from 'react';

const AnimatedHero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />

      {/* 3D floating cards */}
      <div
        className="absolute top-32 right-20 glass p-6 rounded-2xl transform transition-all duration-1000"
        style={{
          transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
        }}
      >
        <div className="text-white text-6xl font-bold">98%</div>
        <div className="text-white/80">Success Rate</div>
      </div>

      <div
        className="absolute bottom-32 left-20 glass p-6 rounded-2xl transform transition-all duration-1000"
        style={{
          transform: `translateX(${-mousePosition.x}px) translateY(${-mousePosition.y}px) rotateX(${-mousePosition.y * 0.1}deg) rotateY(${-mousePosition.x * 0.1}deg)`,
        }}
      >
        <div className="text-white text-6xl font-bold">24/7</div>
        <div className="text-white/80">Always Online</div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex items-center justify-center min-h-screen transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-semibold animate-pulse">
              🚀 Trusted by 500+ Healthcare Providers
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6">
            <span className="inline-block animate-fadeInUp">Never</span>{' '}
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Miss</span>{' '}
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.2s' }}>a</span>
            <br />
            <span className="inline-block animate-fadeInUp text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400" style={{ animationDelay: '0.3s' }}>
              Patient Call
            </span>
            <br />
            <span className="inline-block animate-fadeInUp" style={{ animationDelay: '0.4s' }}>Again</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
            AI-powered call management that handles every patient interaction{' '}
            <span className="font-bold text-yellow-300">24/7</span>, with{' '}
            <span className="font-bold text-green-400 text-4xl text-glow">99.99%</span>{' '}
            accuracy. Your AI agency working for YOU.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => {
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
              }}
              className="group relative px-10 py-5 bg-white text-blue-600 rounded-full text-xl font-bold overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl glow"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Start Free Trial ✨
              </span>
            </button>

            <button
              onClick={() => {
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
              }}
              className="group px-10 py-5 border-2 border-white/50 text-white rounded-full text-xl font-bold backdrop-blur-sm hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              Watch Demo
              <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero;