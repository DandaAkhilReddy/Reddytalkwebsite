'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIHelpAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Pre-defined knowledge base for RAG-like responses
  const knowledgeBase = {
    pricing: {
      keywords: ['price', 'cost', 'pricing', 'plan', 'subscription', 'fee'],
      response: "Our pricing is simple and transparent:\n\n🥉 **Bronze Plan: $1,500/month**\n- Up to 1,500 calls/month\n- 5,000 SMS messages\n- All 4 core AI agents\n\n🥈 **Silver Plan: $5,000/month** (Most Popular)\n- Up to 10,000 calls/month\n- 20,000 SMS messages\n- Advanced analytics\n\n🥇 **Gold Plan: $12,000/month**\n- Up to 30,000 calls/month\n- White-label options\n- Custom SLA\n\n💡 **Reddy Waitlist Optimizer: +$99/month**\n\nAll plans include 30-day free trial, no setup fees!"
    },
    agents: {
      keywords: ['agent', 'ai', 'team', 'sumana', 'veena', 'satyam', 'vishnu', 'reddy'],
      response: "Meet your dedicated AI team working 24/7 for YOUR practice:\n\n👩‍💼 **Sumana** - Virtual Receptionist\n- Answers every call professionally\n- Schedules appointments\n- Handles FAQs\n\n📞 **Veena** - Callback Specialist\n- Returns missed calls in <2 minutes\n- 98% callback success rate\n\n📱 **Satyam** - SMS & WhatsApp Manager\n- Sends confirmations & reminders\n- 92% confirmation rate\n\n🚨 **Vishnu** - Escalation Expert\n- Detects urgent situations\n- Seamless human handoffs\n\n⚡ **Reddy** - Waitlist Optimizer (Premium)\n- Fills 87% of cancellations\n- +$12K average revenue boost"
    },
    features: {
      keywords: ['feature', 'capability', 'what can', 'how does', 'integration', 'ehr'],
      response: "ReddyTalk.ai delivers enterprise-grade features:\n\n🤖 **99.99% Accuracy** - Never miss a call\n⚡ **100+ Simultaneous Calls** - No busy signals\n🏥 **EHR Integration** - Works with Epic, Cerner, Allscripts\n🌍 **15+ Languages** - Auto-detection & native accents\n🔒 **HIPAA Compliant** - SOC 2 Type II certified\n📊 **Real-time Analytics** - Live dashboards & insights\n🎙️ **Natural Voice AI** - Human-like conversations\n🔄 **Smart Routing** - Urgency-based call handling"
    },
    setup: {
      keywords: ['setup', 'install', 'implementation', 'getting started', 'onboard'],
      response: "Getting started is incredibly simple:\n\n⏱️ **15-Minute Setup Process:**\n\n1️⃣ **Quick Setup Call** (5 mins)\n- Configure AI agents\n- Set routing rules\n\n2️⃣ **Phone Integration** (5 mins)\n- Forward existing number\n- Or get new local number\n\n3️⃣ **AI Training** (3 mins)\n- Upload your FAQs\n- Configure practice details\n\n4️⃣ **Go Live** (2 mins)\n- Start receiving calls\n- Monitor dashboard\n\n✅ **No hardware required**\n✅ **No staff training needed**\n✅ **Zero downtime**"
    },
    support: {
      keywords: ['support', 'help', 'contact', 'emergency', 'issue', 'problem'],
      response: "We're here for you 24/7:\n\n📞 **Sales & General:** (555) REDDY-AI\n🚨 **Technical Emergency:** (555) REDDY-11\n📧 **Email:** hello@reddytalk.ai\n💬 **Live Chat:** Available on this website\n\n**Response Times:**\n- Emergency issues: <5 minutes\n- General support: <2 hours\n- Sales inquiries: <30 minutes\n\n**Dedicated Support:**\n- Silver/Gold plans get priority support\n- Gold plans get dedicated success manager"
    },
    demo: {
      keywords: ['demo', 'trial', 'test', 'preview', 'see how'],
      response: "Experience ReddyTalk.ai risk-free:\n\n🎯 **30-Minute Live Demo**\n- See real call simulations\n- Dashboard walkthrough\n- Custom ROI analysis\n- Q&A with experts\n\n🆓 **30-Day Free Trial**\n- No credit card required\n- Full feature access\n- Real patient calls\n- Setup in 15 minutes\n\n📅 **Schedule Now:** Click any 'Get Demo' button\n\n💡 **What to Expect:**\n- Live AI voice demonstration\n- Integration with your EHR\n- Custom pricing for your volume\n- Same-day setup if desired"
    }
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Find matching knowledge base entry
    for (const [, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default response with helpful suggestions
    return "I'm here to help! I can answer questions about:\n\n💰 **Pricing & Plans**\n🤖 **AI Agents & Features**\n⚡ **Setup & Implementation**\n📞 **Support & Contact**\n🎯 **Demos & Trials**\n\nTry asking something like:\n- \"What are your pricing plans?\"\n- \"How do the AI agents work?\"\n- \"How long does setup take?\"\n- \"Can I get a demo?\"\n\nOr click 'Get Demo' for a live demonstration!";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when chat opens
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "👋 Hi! I'm your ReddyTalk.ai assistant!\n\nI can help you learn about:\n• Pricing & plans\n• AI agents & features\n• Setup process\n• Getting a demo\n\nWhat would you like to know?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your pricing plans?",
    "How do the AI agents work?",
    "Can I get a demo?",
    "How long does setup take?",
    "Is it HIPAA compliant?"
  ];

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-20 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-16 h-16 rounded-full shadow-2xl transform transition-all duration-300
            flex items-center justify-center text-white font-bold text-2xl
            ${isOpen
              ? 'bg-gradient-to-r from-red-500 to-pink-500 rotate-45'
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110'
            }
          `}
        >
          {isOpen ? '×' : '🤖'}
        </button>

        {!isOpen && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-pulse">
            Need Help? Ask AI! 💬
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 left-6 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold">ReddyTalk AI Assistant</h3>
                  <p className="text-xs opacity-90">Online • Instant responses</p>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`
                    max-w-xs px-4 py-2 rounded-2xl whitespace-pre-line text-sm
                    ${message.isUser
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                    }
                  `}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}

            {/* Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 text-center">Quick questions:</p>
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInputText(question);
                      setTimeout(() => handleSendMessage(), 100);
                    }}
                    className="w-full text-left p-2 text-xs bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 text-blue-700"
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about ReddyTalk.ai..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIHelpAgent;