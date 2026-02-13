
import React from 'react';
import { Asset, ComplianceStatus } from '../types';

interface AssetCardProps {
  asset: Asset;
  onClick: (asset: Asset) => void;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset, onClick }) => {
  const getStatusStyle = (status: ComplianceStatus) => {
    switch (status) {
      case ComplianceStatus.VERIFIED: return 'text-emerald-500';
      case ComplianceStatus.WARNING: return 'text-amber-500';
      case ComplianceStatus.BREACH: return 'text-rose-500';
      default: return 'text-slate-400';
    }
  };

  return (
    <div 
      onClick={() => onClick(asset)}
      className="bg-white border border-[#e5e7eb] rounded-[2rem] p-8 hover:shadow-xl hover:border-[#d1d5db] hover:-translate-y-1 active:translate-y-0 transition-all duration-200 cursor-pointer group flex flex-col justify-between min-h-[280px] soft-shadow"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#f9fafb] border border-[#e5e7eb] flex items-center justify-center group-hover:brand-gradient group-hover:border-transparent group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <svg className="w-6 h-6 text-[#6b7280] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className="flex flex-col items-end">
             <span className={`text-[10px] font-bold tracking-widest uppercase ${getStatusStyle(asset.status)} mb-1 group-hover:scale-105 transition-transform duration-200`}>
              {asset.status}
            </span>
            <span className="text-xs font-mono text-[#9ca3af] group-hover:text-[#6b7280] transition-colors duration-200">{asset.id}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-[#0a0a0a] group-hover:text-[#4b5563] transition-colors duration-200 mb-2 leading-tight">
          {asset.name}
        </h3>
        <p className="text-sm text-[#6b7280] font-normal mb-8 group-hover:text-[#4b5563] transition-colors duration-200">Origin: {asset.origin}</p>
      </div>
      
      <div className="pt-6 border-t border-[#f3f4f6] flex justify-between items-center">
        <div className="space-y-1 group-hover:translate-x-1 transition-transform duration-200">
          <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest">Eligibility</p>
          <p className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#4b5563] transition-colors duration-200">{asset.eligibilityScore}%</p>
        </div>
        <div className="text-right space-y-1 group-hover:-translate-x-1 transition-transform duration-200">
          <p className="text-[10px] font-bold text-[#6b7280] uppercase tracking-widest">Financing</p>
          <p className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#4b5563] transition-colors duration-200">${(asset.financingVolume / 1000000).toFixed(1)}M</p>
        </div>
      </div>
    </div>
  );
};

export default AssetCard;
