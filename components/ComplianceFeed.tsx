
import React from 'react';
import { ComplianceSignal } from '../types';

interface ComplianceFeedProps {
  signals: ComplianceSignal[];
}

const ComplianceFeed: React.FC<ComplianceFeedProps> = ({ signals }) => {
  return (
    <div className="space-y-6">
      {signals.map((signal) => (
        <div key={signal.id} className="relative group transition-all">
          <div className="flex items-start gap-4">
            <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
              signal.severity === 'high' ? 'bg-rose-500' : 
              signal.severity === 'medium' ? 'bg-amber-500' : 'bg-sky-500'
            }`}></div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xs font-bold text-slate-900 uppercase tracking-tight truncate">{signal.assetName}</p>
                <span className="text-[10px] font-mono text-slate-300 ml-2">
                  {new Date(signal.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{signal.message}</p>
            </div>
          </div>
          {/* Subtle connecting line */}
          <div className="absolute left-[3px] top-4 bottom-[-24px] w-px bg-slate-100 group-last:hidden"></div>
        </div>
      ))}
      <div className="pt-6">
        <button className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] hover:text-blue-600 transition-colors flex items-center gap-2">
          View Full Event Log
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ComplianceFeed;
