interface KnowledgeCategory {
  keywords: string[];
  response: string;
}

const knowledgeBase: Record<string, KnowledgeCategory> = {
  pricing: {
    keywords: ['price', 'cost', 'pricing', 'plan', 'subscription', 'fee', 'payment'],
    response: `Our pricing structure is designed for healthcare practices of all sizes:

**Starter Plan - $1,500/month**
• Up to 1,500 calls monthly
• 5,000 SMS messages included
• All core AI agents
• Standard EHR integrations

**Professional Plan - $5,000/month** (Most Popular)
• Up to 10,000 calls monthly
• 20,000 SMS messages included
• Advanced analytics dashboard
• Priority support
• Custom workflows

**Enterprise Plan - $12,000/month**
• Up to 30,000 calls monthly
• Unlimited SMS messages
• White-label options
• Dedicated account manager
• Custom SLA

All plans include a 30-day free trial with no setup fees.`,
  },
  features: {
    keywords: ['feature', 'capability', 'what can', 'functionality', 'integration'],
    response: `ReddyTalk.ai offers comprehensive healthcare communication features:

**Core Capabilities:**
• 99.99% call answer accuracy
• Handle 100+ simultaneous calls
• Support for 15+ languages
• HIPAA compliant infrastructure
• SOC 2 Type II certified

**AI Agents:**
• Virtual Receptionist - 24/7 call handling
• Callback Specialist - Automatic follow-ups
• SMS Manager - Text communication
• Escalation Expert - Smart routing
• Waitlist Optimizer - Fill cancellations

**Integrations:**
• Epic, Cerner, Allscripts EHR systems
• Practice management software
• Calendar synchronization
• Real-time analytics dashboard`,
  },
  setup: {
    keywords: ['setup', 'install', 'implementation', 'getting started', 'onboard', 'configure'],
    response: `Getting started with ReddyTalk.ai is simple:

**Quick Setup Process (15 minutes):**

1. **Initial Configuration** (5 mins)
   • Set up AI agent preferences
   • Configure call routing rules
   • Customize response templates

2. **Phone Integration** (5 mins)
   • Forward existing phone numbers
   • Or provision new local numbers
   • Test call connectivity

3. **AI Training** (3 mins)
   • Upload practice information
   • Review common FAQs
   • Set business hours

4. **Go Live** (2 mins)
   • Activate services
   • Monitor initial calls
   • Fine-tune as needed

No hardware installation required. Your existing phones continue to work normally.`,
  },
  demo: {
    keywords: ['demo', 'trial', 'test', 'preview', 'try', 'sample'],
    response: `Experience ReddyTalk.ai risk-free:

**Free Trial Options:**
• 30-day full-feature trial
• No credit card required
• Real patient call handling
• Full analytics access

**Live Demo:**
• 30-minute personalized walkthrough
• See actual AI conversations
• Custom ROI analysis for your practice
• Q&A with our experts

**What to Expect:**
• Live voice demonstrations
• EHR integration preview
• Custom pricing based on your volume
• Same-day implementation available

Schedule your demo at any time through our website or call (555) REDDY-AI.`,
  },
};

export const useKnowledgeBase = () => {
  const getResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Find matching category
    for (const category of Object.values(knowledgeBase)) {
      if (category.keywords.some((keyword) => input.includes(keyword))) {
        return category.response;
      }
    }

    // Default response
    return `I can help you learn about:

• **Pricing & Plans** - Affordable options for every practice
• **Features & Capabilities** - Our AI-powered solutions
• **Setup Process** - Quick 15-minute implementation
• **Free Demo** - See ReddyTalk.ai in action

What would you like to know more about?`;
  };

  return { getResponse };
};