'use client';

import React, { useEffect, useState, useRef } from 'react';

const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    calls: 0,
    providers: 0,
    satisfaction: 0,
    savings: 0
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = {
        calls: 2000000,
        providers: 500,
        satisfaction: 98,
        savings: 40
      };

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          calls: Math.floor(targets.calls * progress),
          providers: Math.floor(targets.providers * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          savings: Math.floor(targets.savings * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      value: counts.calls.toLocaleString(),
      suffix: '+',
      label: 'Calls Handled Monthly',
      icon: '📞',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      value: counts.providers.toString(),
      suffix: '+',
      label: 'Healthcare Providers',
      icon: '🏥',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      value: counts.satisfaction.toString(),
      suffix: '%',
      label: 'Patient Satisfaction',
      icon: '⭐',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      value: counts.savings.toString(),
      suffix: '%',
      label: 'Cost Reduction',
      icon: '💰',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div ref={ref} className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Proven Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of healthcare providers who have transformed their patient communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                {/* Icon */}
                <div className="text-5xl mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className={`text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  <span className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-600 font-semibold">{stat.label}</p>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-full opacity-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;