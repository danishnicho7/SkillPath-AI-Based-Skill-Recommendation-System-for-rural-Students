'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hi! I am your AI Career Guide. You can ask me things like "Best courses for 85% in HSC?" or "How to prepare for IAS?"' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    // Simulate AI response based on keywords
    setTimeout(() => {
      let reply = "I'm still exploring that domain! Try searching with keywords like 'GK', 'Software', 'Medical', or 'Marketing' on the dashboard.";
      
      const lowerInput = currentInput.toLowerCase();
      // V4 Specific Queries
      if (lowerInput.match(/12|12th|after 12th|hsc/)) {
         reply = "After 12th, you can pursue technical degrees (B.Tech for IT/Engineering), Medical (MBBS via NEET), or start preparing for Govt Exams (Railway NTPC/SSC) which only require a 12th pass!";
      } else if (lowerInput.match(/gk|general knowledge|gov|government/)) {
         reply = "If you have strong GK, Government jobs are perfect! You can target SSC CGL, Railway NTPC, or State PSCs. They offer great stability and salaries starting around ₹35,000 to ₹70,000 per month.";
      } else if (lowerInput.match(/it|software|computer|coding/)) {
         reply = "The IT sector has millions of jobs! You can become a Software Engineer, Cloud Architect, or Cybersecurity Analyst. Start by learning basic programming like Python or Java.";
      }
      // V3 Legacy Queries
      else if (lowerInput.includes('salary') || lowerInput.includes('highest') || lowerInput.includes('money')) {
         reply = "Data Scientists, AI Engineers, and Investment Bankers currently have the highest salary ceilings, easily crossing ₹50L - ₹1Cr+ after 10 years of experience.";
      } else if (lowerInput.includes('ai') || lowerInput.includes('data')) {
         reply = "Data & AI is booming with a projected 120% growth over 10 years! Start with: 1) Python/Math 2) Machine Learning (Scikit-Learn) 3) Deep Learning (PyTorch).";
      } else if (lowerInput.includes('grow') || lowerInput.includes('future') || lowerInput.includes('demand')) {
         reply = "Renewable Energy (EV/Solar) and AI/Data Analytics are forecasted to grow enormously by 2030 due to global shifts. Standard IT is also growing, but requires Cloud/Web3 upskilling.";
      } else if (lowerInput.includes('scheme') || lowerInput.includes('free') || lowerInput.includes('skills')) {
         reply = "Based on your state, look into Govt Skill Schemes like 'Nan Mudhalvan' (TN), 'PMKVY' (National), or the AICTE Internship Enterprise Portal for free training and stipends.";
      }

      setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 glass-panel rounded-2xl shadow-2xl overflow-hidden z-50 border border-[#00FFFF]/30 flex flex-col"
            style={{ height: '500px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1F2833] to-[#0B0C10] p-4 border-b border-white/10 flex justify-between items-center relative">
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF007F] to-transparent opacity-50"></div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF007F]" />
                <span className="font-bold text-white">Career AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent to-[#1a1a2e]/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed whitespace-pre-line
                    ${msg.role === 'user' 
                      ? 'bg-[#8A2BE2] text-white rounded-tr-sm' 
                      : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start w-full">
                  <div className="bg-white/10 text-gray-200 border border-white/5 rounded-2xl rounded-tl-sm p-3 flex gap-1 items-center h-10 w-16">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="p-3 border-t border-white/10 bg-[#0B0C10]">
              <form onSubmit={handleSend} className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a career question..."
                  className="w-full bg-white/5 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00FFFF] pr-12 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-[#FF007F] text-white p-1.5 rounded-full hover:bg-[#FF007F]/80 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-[#8A2BE2] to-[#FF007F] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,0,127,0.4)] z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 animate-pulse" />}
      </motion.button>
    </>
  );
}
