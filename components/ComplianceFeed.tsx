
import React from 'react';
import { ComplianceSignal } from '../types';

interface ComplianceFeedProps {
  signals: ComplianceSignal[];
}

const ComplianceFeed: React.FC<ComplianceFeedProps> = ({ signals }) => {
  return (
    <div className="space-y-6">
      {signals.map((signal) => (
        <div key={signal.id} className="relative group transition-all duration-200 hover:translate-x-1">
          <div className="flex items-start gap-4">
            <div className={`mt-1.5 w-2.5 h-2.5 rounded-full shrink-0 transition-all duration-200 group-hover:scale-125 ${
              signal.severity === 'high' ? 'bg-rose-500' : 
              signal.severity === 'medium' ? 'bg-amber-500' : 'bg-sky-500'
            }`}></div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xs font-bold text-[#0a0a0a] uppercase tracking-tight truncate group-hover:text-[#4b5563] transition-colors duration-200">{signal.assetName}</p>
                <span className="text-[10px] font-mono text-[#9ca3af] ml-2 group-hover:text-[#6b7280] transition-colors duration-200">
                  {new Date(signal.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-[#4b5563] leading-relaxed font-normal group-hover:text-[#0a0a0a] transition-colors duration-200">{signal.message}</p>
            </div>
          </div>
          {/* Subtle connecting line */}
          <div className="absolute left-[3px] top-4 bottom-[-24px] w-px bg-[#e5e7eb] group-last:hidden group-hover:bg-[#d1d5db] transition-colors duration-200"></div>
        </div>
      ))}
      <div className="pt-6">
        <button className="text-xs font-bold text-[#0a0a0a] uppercase tracking-[0.2em] hover:text-[#4b5563] transition-all duration-200 flex items-center gap-2 group">
          View Full Event Log
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ComplianceFeed;
