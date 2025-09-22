'use client';

import React from 'react';
import Logo from '@/components/Logo';
import AnimatedHero from '@/components/AnimatedHero';
import PowerFeatures from '@/components/PowerFeatures';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import StatsCounter from '@/components/StatsCounter';
import FloatingCTA from '@/components/FloatingCTA';
import AIHelpAgent from '@/components/AIHelpAgent';

export default function Home() {
  const handleScheduleDemo = () => {
    // Load Calendly if not already loaded
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo />

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</a>
              <a href="#agents" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">AI Agents</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            </div>

            <button
              onClick={handleScheduleDemo}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 gradient-animate">
        <AnimatedHero />
      </section>

      {/* Power Features - 99.99% Accuracy */}
      <PowerFeatures />

      {/* Stats Counter */}
      <StatsCounter />

      {/* AI Agents Section */}
      <section id="agents" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <span className="text-white font-bold text-lg">🤖 YOUR AI AGENCY</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meet Your AI Workforce
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You&apos;re not just buying software. You&apos;re hiring 5 dedicated AI agents who work exclusively for YOUR practice.
              They never take breaks, never call in sick, and are 100% focused on your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sumana',
                role: 'Virtual Receptionist',
                icon: '👩‍💼',
                description: 'Answers every call professionally, schedules appointments, handles FAQs, and provides 24/7 reception services.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Veena',
                role: 'Callback Specialist',
                icon: '📞',
                description: 'Automatically returns missed calls and voicemails within 2 minutes. Persistent follow-up until connection is made.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                name: 'Satyam',
                role: 'SMS & WhatsApp Manager',
                icon: '📱',
                description: 'Sends appointment confirmations, reminders, and follow-ups. Manages two-way text conversations.',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                name: 'Vishnu',
                role: 'Escalation Expert',
                icon: '🚨',
                description: 'Intelligently detects urgent situations and seamlessly transfers to human staff with full context.',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                name: 'Reddy',
                role: 'Waitlist Optimizer',
                icon: '⚡',
                description: 'Premium add-on: Fills cancellations instantly by managing dynamic waitlists for same-day openings.',
                gradient: 'from-yellow-500 to-orange-500',
                premium: true
              }
            ].map((agent) => (
              <div
                key={agent.name}
                className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${agent.premium ? 'ring-2 ring-yellow-400' : ''} relative`}
              >
                {agent.premium && (
                  <div className="absolute -top-3 right-6 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Premium +$99/mo
                  </div>
                )}

                <div className={`w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br ${agent.gradient} flex items-center justify-center text-3xl shadow-lg`}>
                  {agent.icon}
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">{agent.name}</h3>
                <p className="text-blue-600 font-semibold text-center mb-4">{agent.role}</p>
                <p className="text-gray-600 text-center leading-relaxed">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white">
        <InteractiveFeatures />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">No setup fees. Cancel anytime. 30-day money-back guarantee.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Bronze',
                badge: 'Small Practice',
                price: '$1,500',
                features: ['Up to 1,500 calls/month', '5,000 SMS messages', 'All 4 core AI agents', 'Basic EHR integration'],
                badgeColor: 'bg-amber-600'
              },
              {
                name: 'Silver',
                badge: 'Most Popular',
                price: '$5,000',
                features: ['Up to 10,000 calls/month', '20,000 SMS messages', 'All 4 core AI agents', 'Advanced analytics'],
                badgeColor: 'bg-gray-500',
                featured: true
              },
              {
                name: 'Gold',
                badge: 'Enterprise',
                price: '$12,000',
                features: ['Up to 30,000 calls/month', '50,000 SMS messages', 'All 4 core AI agents', 'White-label options'],
                badgeColor: 'bg-yellow-500'
              }
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 shadow-lg ${plan.featured ? 'ring-2 ring-blue-500 scale-105' : ''} relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${plan.badgeColor} text-white px-4 py-1 rounded-full text-sm font-bold`}>
                  {plan.badge}
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-black text-blue-600 mb-2">
                    {plan.price}<span className="text-lg text-gray-500 font-normal">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleScheduleDemo}
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                      : 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  {index === 2 ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-4">Ready to Transform Your Patient Communication?</h2>
          <p className="text-xl mb-8 opacity-95">Join 500+ healthcare providers already using ReddyTalk.ai</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleScheduleDemo}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Your Free Demo
            </button>
            <a
              href="mailto:sales@reddytalk.ai"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Talk to Sales
            </a>
          </div>
          <p className="text-sm mt-6 opacity-90">✓ 30-day free trial ✓ No credit card required ✓ Setup in 15 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <Logo className="mb-6" />
              <p className="text-gray-300 mb-6 max-w-md">
                AI-powered clinical communication platform transforming healthcare one call at a time.
              </p>
              <div className="flex space-x-4">
                {['L', 'T', 'F'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#agents" className="text-gray-300 hover:text-white transition-colors">AI Agents</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="mailto:hello@reddytalk.ai" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="tel:+15557333924" className="text-gray-300 hover:text-white transition-colors">(555) REDDY-AI</a></li>
                <li><span className="text-gray-300">24/7 Emergency: (555) REDDY-11</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 ReddyTalk.ai. All rights reserved. | Built with ❤️ for healthcare providers
            </p>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <FloatingCTA />

      {/* AI Help Agent */}
      <AIHelpAgent />
    </div>
  );
}
