import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, ArrowUpRight, Cpu, ShieldCheck } from 'lucide-react';

const initialMessages = [
  {
    sender: 'bot',
    text: 'Hello! I am VitalityAI, your software architecture assistant. How can I help you digitalize your enterprise today?',
    options: [
      'Microsoft .NET Solutions',
      'Salesforce CRM Integration',
      'Cloud DevOps & Kubernetes',
      'Get Cost Estimate',
    ],
  },
];

const botKnowledge = {
  dotnet: {
    text: 'VitalitySoft specializes in high-throughput Microsoft .NET 8 microservices, C# 12 REST APIs, Blazor server-side applications, and legacy system modernization. Starting from ₹1,50,000.',
    options: ['Open Quote Builder', 'Speak to an Architect'],
  },
  salesforce: {
    text: 'Our Salesforce engineers handle Sales Cloud, Apex triggers, Lightning Web Components, deal pipeline tracking, and quotation engine integrations. Starting from ₹1,20,000.',
    options: ['Open Quote Builder', 'Salesforce Demo'],
  },
  devops: {
    text: 'We automate CI/CD pipelines on Azure DevOps, deploy Kubernetes clusters, build Docker containers, and implement security compliance for hybrid multicloud environments. Starting from ₹95,000.',
    options: ['Open Quote Builder', 'DevOps Audit'],
  },
  pricing: {
    text: 'Our enterprise software services start from ₹45,000 for QA/Testing up to ₹1,50,000+ for enterprise .NET & Cloud microservices. You can launch our interactive proposal engine to generate a detailed proposal!',
    options: ['Open Quote Builder', 'Speak to an Architect'],
  },
  contact: {
    text: 'Our main office is located in Kukatpally, Hyderabad, Telangana - 500090, India. You can call us directly at +91 98666 48973 or email info@vitalitysoft.com.',
    options: ['Open Quote Builder', 'Call +91 98666 48973'],
  },
  default: {
    text: 'Thank you for your message! Our senior solution architects in Hyderabad specialize in .NET, Salesforce, Cloud DevOps, and Mobile App engineering. Would you like to build a custom proposal?',
    options: ['Open Quote Builder', 'Get Cost Estimate'],
  },
};

export default function ChatbotWidget({ onOpenQuote, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Fast Bot Response (300ms)
    setTimeout(() => {
      let responseObj = botKnowledge.default;
      const lower = text.toLowerCase();

      if (lower.includes('net') || lower.includes('microsoft') || lower.includes('blazor') || lower.includes('c#')) {
        responseObj = botKnowledge.dotnet;
      } else if (lower.includes('salesforce') || lower.includes('crm') || lower.includes('apex')) {
        responseObj = botKnowledge.salesforce;
      } else if (lower.includes('devops') || lower.includes('cloud') || lower.includes('azure') || lower.includes('kubernetes')) {
        responseObj = botKnowledge.devops;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('budget') || lower.includes('estimate')) {
        responseObj = botKnowledge.pricing;
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('address') || lower.includes('location') || lower.includes('hyderabad')) {
        responseObj = botKnowledge.contact;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: responseObj.text,
          options: responseObj.options,
        },
      ]);
      setIsTyping(false);
    }, 300);
  };

  const handleOptionClick = (option) => {
    if (option === 'Open Quote Builder') {
      setIsOpen(false);
      onOpenQuote();
    } else {
      handleSend(option);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Chat Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white shadow-[0_20px_50px_rgba(6,182,212,0.4)] hover:scale-110 transition-all duration-300 border border-white/20"
          aria-label="Open Chatbot Assistant"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-7 h-7 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#060913] rounded-full animate-ping"></span>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#060913] rounded-full"></span>
          </div>
        </button>
      )}

      {/* Chat Popup Window */}
      {isOpen && (
        <div
          className={`w-[92vw] sm:w-[380px] h-[520px] rounded-3xl border shadow-2xl flex flex-col justify-between overflow-hidden animate-fadeIn ${
            theme === 'light'
              ? 'bg-white border-gray-200 text-[#0f172a]'
              : 'glass-panel border-cyan-500/30 bg-[#060913]/95 backdrop-blur-2xl text-white shadow-[0_30px_90px_rgba(0,0,0,0.95)]'
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 border-b flex items-center justify-between ${
              theme === 'light'
                ? 'bg-indigo-50 border-gray-200 text-[#0f172a]'
                : 'bg-gradient-to-r from-indigo-950 via-[#0a0e1c] to-[#060913] border-white/10 text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center p-0.5 shadow-md">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className={`font-serif text-base italic font-bold flex items-center gap-1.5 ${
                  theme === 'light' ? 'text-[#0f172a]' : 'text-white'
                }`}>
                  VitalityAI Assistant
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                </h4>
                <p className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Online • Enterprise Support
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className={`p-1.5 rounded-full transition-colors ${
                theme === 'light'
                  ? 'text-gray-600 hover:text-black hover:bg-gray-200'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white rounded-br-none shadow-md'
                      : theme === 'light'
                        ? 'bg-indigo-50/80 border border-indigo-100 text-[#0f172a] rounded-bl-none shadow-sm font-medium'
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                </div>

                {/* Option Buttons if present */}
                {m.options && m.options.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[88%]">
                    {m.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className={`px-3 py-1.5 rounded-full border text-[10px] font-semibold transition-all text-left ${
                          theme === 'light'
                            ? 'bg-white hover:bg-indigo-50 border-gray-300 text-indigo-700 hover:border-indigo-500 shadow-sm'
                            : 'bg-white/5 hover:bg-cyan-500/20 border-white/15 text-cyan-300 hover:text-white'
                        }`}
                      >
                        {opt} →
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className={`flex items-center gap-2 text-[11px] font-mono ${
                theme === 'light' ? 'text-indigo-600' : 'text-gray-400'
              }`}>
                <Bot className="w-4 h-4 text-indigo-600 animate-spin" />
                <span>VitalityAI is calculating response...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Footer */}
          <div className={`p-3 border-t ${
            theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-[#060913] border-white/10'
          }`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about .NET, Salesforce, Cloud..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={`flex-1 p-2.5 rounded-full border text-xs outline-none ${
                  theme === 'light'
                    ? 'bg-white border-gray-300 text-[#0f172a] placeholder-gray-500 focus:border-indigo-600 shadow-sm'
                    : 'glass-panel border-white/15 text-white placeholder-gray-500 focus:border-cyan-400'
                }`}
              />
              <button
                type="submit"
                className="p-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
