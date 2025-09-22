'use client';

import React, { useState, useEffect } from 'react';

const PowerFeatures: React.FC = () => {
  const [activeCallCount, setActiveCallCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simulate live call counter
    const interval = setInterval(() => {
      setActiveCallCount(prev => {
        const change = Math.floor(Math.random() * 10) - 5;
        const newCount = prev + change;
        return Math.max(0, Math.min(100, newCount));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSimulation = () => {
    setIsAnimating(true);
    setActiveCallCount(100);
    setTimeout(() => {
      setIsAnimating(false);
      setActiveCallCount(Math.floor(Math.random() * 30) + 70);
    }, 3000);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'slide 10s linear infinite'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Main headline */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6 animate-pulse">
            <span className="text-white font-bold text-lg">🔥 GAME CHANGER ALERT</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              99.99% ACCURACY
            </span>
            <br />
            <span className="text-white">Zero Missed Calls</span>
          </h2>

          <p className="text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            While others promise 96%, we deliver{' '}
            <span className="font-bold text-yellow-400 text-4xl">99.99%</span> accuracy.
            Every. Single. Call. Answered.
          </p>
        </div>

        {/* 100 Simultaneous Calls Demo */}
        <div className="mb-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4">
                Handling{' '}
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  100+ Simultaneous Calls
                </span>
              </h3>
              <p className="text-xl text-white/80">
                Your phone rings 100 times at once? No problem. Our AI agents handle it all instantly.
              </p>
            </div>

            {/* Live simulation */}
            <div className="relative h-64 bg-black/30 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-4 left-4 text-green-400 font-mono text-sm">
                LIVE SYSTEM STATUS
              </div>

              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className={`text-7xl font-black mb-4 ${isAnimating ? 'text-orange-400 animate-pulse' : 'text-green-400'}`}>
                    {activeCallCount}
                  </div>
                  <div className="text-xl text-white/80">Active Calls Being Handled</div>
                  <div className="text-sm text-green-400 mt-2">All calls answered in {'<'}2 seconds</div>
                </div>
              </div>

              {/* Animated call indicators */}
              {isAnimating && [...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleSimulation}
              className="mt-6 mx-auto block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full font-bold text-lg hover:scale-110 transition-transform duration-300"
            >
              Simulate 100 Calls Rush →
            </button>
          </div>
        </div>

        {/* Agency Message */}
        <div className="text-center mb-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg rounded-3xl p-12 border border-purple-400/30">
            <h3 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Your AI Agency Working 24/7
              </span>
            </h3>

            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              You&apos;re not just getting software. You&apos;re hiring an entire{' '}
              <span className="font-bold text-yellow-400">AI agency</span> that never sleeps.
              Our agents work tirelessly for YOUR success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-xl font-bold mb-2">5 AI Agents</h4>
                <p className="text-white/70">Each specialized expert working for you</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="text-xl font-bold mb-2">Zero Training</h4>
                <p className="text-white/70">They start working immediately</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-3">💼</div>
                <h4 className="text-xl font-bold mb-2">Your Success Team</h4>
                <p className="text-white/70">Dedicated to YOUR practice growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            '✓ 99.99% Uptime SLA',
            '✓ HIPAA Compliant',
            '✓ SOC 2 Certified',
            '✓ 24/7 Support',
            '✓ No Setup Fees',
            '✓ Cancel Anytime'
          ].map((badge, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/90 font-semibold hover:bg-white/20 transition-all duration-300"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  );
};

export default PowerFeatures;