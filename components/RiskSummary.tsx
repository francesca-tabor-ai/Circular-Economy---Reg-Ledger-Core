
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Asset } from '../types';

interface RiskSummaryProps {
  assets: Asset[];
}

const RiskSummary: React.FC<RiskSummaryProps> = ({ assets }) => {
  const data = assets.map(a => ({
    name: a.name.split(' ').slice(-1)[0],
    score: a.eligibilityScore,
    volume: a.financingVolume
  }));

  return (
    <div className="bg-slate-50/50 rounded-[2.5rem] p-10 border border-slate-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Portfolio Health Analysis</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">Real-time regulatory eligibility distribution across industrial sectors.</p>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Advisory</span>
          </div>
        </div>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 11, fontWeight: 600, fill: '#94a3b8'}} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fontSize: 11, fontWeight: 600, fill: '#94a3b8'}} 
              domain={[0, 100]} 
            />
            <Tooltip 
              cursor={{fill: '#ffffff', opacity: 0.5}}
              contentStyle={{ 
                borderRadius: '16px', 
                border: 'none', 
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                padding: '12px 16px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            />
            <Bar dataKey="score" radius={[6, 6, 6, 6]} barSize={48}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.score > 90 ? '#10b981' : '#f59e0b'} fillOpacity={0.8} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-12 pt-10 border-t border-slate-200">
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Verified Asset Value</p>
          <p className="text-3xl font-bold text-slate-900 tracking-tight">$8.45M</p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Avg. Eligibility</p>
          <div className="flex items-end gap-2">
            <p className="text-3xl font-bold text-slate-900 tracking-tight">88.4</p>
            <span className="text-sm font-bold text-slate-400 mb-1">/ 100</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Regulatory Stance</p>
          <p className="text-3xl font-bold text-emerald-500 tracking-tight">STABLE</p>
        </div>
      </div>
    </div>
  );
};

export default RiskSummary;
