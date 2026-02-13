
import React, { useState, useEffect } from 'react';
import { Asset, ComplianceStatus } from '../types';
import { getGeminiInsights, generateAuditReplay } from '../services/gemini';

interface AssetDetailModalProps {
  asset: Asset | null;
  onClose: () => void;
}

const AssetDetailModal: React.FC<AssetDetailModalProps> = ({ asset, onClose }) => {
  const [insight, setInsight] = useState<string>('Synthesizing high-level risk analysis...');
  const [auditSummary, setAuditSummary] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (asset) {
      setLoading(true);
      Promise.all([
        getGeminiInsights(asset),
        generateAuditReplay(asset.id)
      ]).then(([resInsight, resAudit]) => {
        setInsight(resInsight || 'Risk analysis synthesis failed.');
        setAuditSummary(resAudit || 'Audit proof generation failed.');
        setLoading(false);
      });
    }
  }, [asset]);

  if (!asset) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-6">
      <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col relative">
        {/* Decorative Gradient Bar */}
        <div className="h-2 w-full brand-gradient"></div>

        {/* Header */}
        <div className="px-12 py-10 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.3em]">System.Registry_Identity</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-mono">{asset.id}</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">{asset.name}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-200 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-12 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Asset Metadata */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">Material Signature</h3>
                <div className="space-y-6">
                  {asset.materials.map((m, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-slate-900">{m.name}</span>
                        <span className="text-sm font-mono text-slate-400">{m.percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${m.recycled ? 'brand-gradient' : 'bg-slate-300'}`}
                          style={{ width: `${m.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-2">
                        {m.recycled ? 'Verified Circular Source' : 'Virgin Material Logged'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Registry Chain</h3>
                <div className="space-y-4">
                  {asset.ownership.map((owner, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-sm font-medium text-slate-600">
                      <div className="w-2 h-2 rounded-full border border-slate-300"></div>
                      {owner}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Reasoning & Audit Replay */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-slate-50/50 rounded-[2rem] p-8 border border-slate-100 relative overflow-hidden group">
                {/* Subtle AI indicator */}
                <div className="absolute top-0 right-0 w-32 h-32 brand-gradient blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 brand-gradient rounded-xl flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Risk Analysis Model</h3>
                </div>
                
                {loading ? (
                  <div className="space-y-3 animate-pulse">
                    <div className="h-4 bg-slate-200 rounded w-full"></div>
                    <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                  </div>
                ) : (
                  <p className="text-lg text-slate-700 leading-relaxed font-medium">
                    {insight}
                  </p>
                )}
              </div>

              <div className="border border-slate-100 rounded-[2rem] p-10 space-y-8">
                <div className="flex justify-between items-center">
                  <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Regulatory Audit Replay</h3>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold">NODE_SYNCED</span>
                </div>
                
                <div className="font-mono text-[11px] text-slate-400 space-y-2 border-l-2 border-slate-100 pl-6">
                   <p><span className="text-blue-500 font-bold">INIT_VERIFY:</span> Handshake with European Green Bond Standard oracle...</p>
                   <p><span className="text-blue-500 font-bold">FETCH_HASH:</span> Validated ownership token 0x882...bc44</p>
                   <p><span className="text-blue-500 font-bold">COMPLIANCE:</span> ESG Score 94.2 confirmed by RWA-Validator-v2</p>
                </div>

                <div className="text-sm text-slate-600 leading-relaxed italic border-t border-slate-50 pt-8">
                  {loading ? 'Synthesizing ledger proofs...' : auditSummary}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-12 py-10 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
             <div className="text-center sm:text-left">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Financing Status</p>
               <p className="text-xl font-bold text-slate-900">{asset.status === ComplianceStatus.VERIFIED ? 'Eligible for Direct Finance' : 'Requires Review'}</p>
             </div>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-8 py-4 text-xs font-bold text-slate-900 border border-slate-200 rounded-2xl hover:bg-white transition-all uppercase tracking-widest">
              Export Audit PDF
            </button>
            <button className="flex-1 sm:flex-none brand-gradient text-white px-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all">
              Initiate Capital Allocation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetailModal;
