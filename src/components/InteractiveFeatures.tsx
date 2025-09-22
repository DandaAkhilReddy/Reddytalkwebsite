'use client';

import React, { useState } from 'react';

const InteractiveFeatures: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: '🤖',
      title: 'AI Voice Agents',
      description: 'Human-like conversations that understand context, emotion, and medical terminology',
      gradient: 'from-blue-500 to-purple-500',
      stats: '99.9% accuracy',
      details: ['Natural language processing', 'Emotion detection', 'Multi-accent support']
    },
    {
      icon: '⚡',
      title: 'Instant Response',
      description: 'Answer every call in under 2 seconds, 24/7/365 without breaks or holidays',
      gradient: 'from-green-500 to-teal-500',
      stats: '<2s response time',
      details: ['Zero wait time', 'No queue management', 'Instant escalation']
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      description: 'Military-grade encryption and SOC 2 Type II certification for complete security',
      gradient: 'from-red-500 to-pink-500',
      stats: '100% secure',
      details: ['End-to-end encryption', 'Audit logs', 'BAA included']
    },
    {
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Real-time insights, call recordings, and AI-generated improvement suggestions',
      gradient: 'from-yellow-500 to-orange-500',
      stats: '50+ metrics',
      details: ['Live dashboards', 'Custom reports', 'Predictive insights']
    },
    {
      icon: '🏥',
      title: 'EHR Integration',
      description: 'Seamless integration with Epic, Cerner, Allscripts and 50+ other systems',
      gradient: 'from-indigo-500 to-blue-500',
      stats: '50+ integrations',
      details: ['Real-time sync', 'Bi-directional data', 'Custom workflows']
    },
    {
      icon: '🌍',
      title: 'Multi-Language',
      description: 'Fluent conversations in 15+ languages with automatic detection',
      gradient: 'from-purple-500 to-indigo-500',
      stats: '15+ languages',
      details: ['Auto-detection', 'Native accents', 'Cultural awareness']
    }
  ];

  return (
    <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Supercharge Your Practice
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced AI technology that transforms every patient interaction into an exceptional experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

            {/* Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-100">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <span className="text-4xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>

              {/* Stats badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${feature.gradient} text-white`}>
                {feature.stats}
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>

              {/* Expanded details on hover */}
              <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-2 pt-4 border-t border-gray-100">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover indicator */}
              <div className={`mt-4 flex items-center text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveFeatures;