
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getMarcusResponse } from '../services/gemini';

interface MarcusChatProps {
  currentView: 'registry' | 'about';
}

const MarcusChat: React.FC<MarcusChatProps> = ({ currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // High-quality professional portrait provided by the user
  const marcusAvatarUrl = "https://i.postimg.cc/RWmZZ3w9/10-Capricorn-Reg-Ledger.png";

  const probes = {
    registry: [
      "How do you define 'System Risk Propagation' in this registry?",
      "Can you explain the institutional logic behind the 'Eligibility Score'?",
      "What are the regulatory implications of the 'Battery Cluster B-09' warning?"
    ],
    about: [
      "What was the 'turning point' that led you to build RegLedger?",
      "Tell me about your vision for 100-year systems governance.",
      "Why are circular systems an institutional maturity upgrade?"
    ]
  };

  const currentProbes = probes[currentView] || probes.registry;

  // Auto-introduce Marcus when the chat is first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'marcus',
          content: "I’m Marcus Ellison, founder of this platform. I built this system to help institutions make capital decisions based on long-horizon system reality. How can I assist your institutional analysis today?",
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (text?: string) => {
    const messageContent = text || input;
    if (!messageContent.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: messageContent, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role === 'marcus' ? 'model' : 'user', content: m.content }));
    const response = await getMarcusResponse(history, messageContent);
    
    const marcusMsg: ChatMessage = { role: 'marcus', content: response, timestamp: new Date() };
    setMessages(prev => [...prev, marcusMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col overflow-hidden mb-6 animate-in slide-in-from-bottom-8 duration-500 soft-shadow">
          {/* Header */}
          <div className="px-8 py-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/10 border-2 border-white ring-1 ring-slate-100">
                <img 
                  src={marcusAvatarUrl} 
                  alt="Marcus Ellison" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 leading-none">Marcus Ellison</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Founder's Desk</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-slate-900 transition-colors p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'marcus' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] px-5 py-4 rounded-[1.5rem] text-sm leading-relaxed ${
                  msg.role === 'marcus' 
                    ? 'bg-slate-50 text-slate-800 border border-slate-100' 
                    : 'bg-slate-900 text-white shadow-xl'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Starter Probes */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">Suggested inquiries</p>
                {currentProbes.map((probe, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(probe)}
                    className="w-full text-left px-4 py-3 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:border-slate-400 hover:text-slate-900 transition-all shadow-sm"
                  >
                    {probe}
                  </button>
                ))}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-50 border border-slate-100 px-5 py-4 rounded-[1.5rem] flex gap-2 items-center">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-slate-50 bg-white">
            <div className="relative">
              <input 
                type="text"
                placeholder="Ask Marcus about system risk..."
                className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-blue-600 disabled:opacity-50 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-white rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 group relative overflow-hidden border border-slate-100 ${isOpen ? 'rotate-90' : ''}`}
      >
        {isOpen ? (
          <div className="brand-gradient w-full h-full flex items-center justify-center text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
        ) : (
          <img 
            src={marcusAvatarUrl} 
            alt="Marcus Ellison" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        )}
        {!isOpen && (
          <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        )}
      </button>
    </div>
  );
};

export default MarcusChat;
