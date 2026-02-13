
import React, { useState } from 'react';
import { MOCK_ASSETS, MOCK_SIGNALS } from './constants';
import { Asset } from './types';
import AssetCard from './components/AssetCard';
import ComplianceFeed from './components/ComplianceFeed';
import RiskSummary from './components/RiskSummary';
import AssetDetailModal from './components/AssetDetailModal';
import AboutPage from './components/AboutPage';
import LandingPage from './components/LandingPage';
import MarcusChat from './components/MarcusChat';

type View = 'landing' | 'registry' | 'about';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAssets = MOCK_ASSETS.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () => {
    if (currentView === 'landing') {
      return <LandingPage />;
    }
    
    if (currentView === 'about') {
      return <AboutPage />;
    }

    return (
      <main className="flex-1 px-10 py-12 max-w-[1400px] mx-auto w-full grid grid-cols-12 gap-12 animate-in fade-in duration-500">
        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">Asset Verification Ledger</h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
              Institutional-grade verification rails for real-world industrial assets. Audit-ready lifecycle data at scale.
            </p>
          </div>

          <RiskSummary assets={MOCK_ASSETS} />

          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">Active Portfolios</h3>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Query assets..." 
                  className="w-64 pl-4 pr-10 py-2 text-sm border-b border-slate-200 focus:border-slate-900 outline-none transition-all placeholder:text-slate-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredAssets.map(asset => (
                <AssetCard 
                  key={asset.id} 
                  asset={asset} 
                  onClick={(a) => setSelectedAsset(a)} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel: Signals & System Status */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 soft-shadow">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full brand-gradient"></span>
              Live Compliance Pulse
            </h3>
            <ComplianceFeed signals={MOCK_SIGNALS} />
          </div>

          <div className="p-8 rounded-3xl border border-slate-100 bg-white">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Verification Node</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                <span className="text-sm font-medium text-slate-500">Node Latency</span>
                <span className="text-lg font-bold text-slate-900 font-mono">14ms</span>
              </div>
              <div className="flex justify-between items-end border-b border-slate-50 pb-4">
                <span className="text-sm font-medium text-slate-500">Ledger Height</span>
                <span className="text-lg font-bold text-slate-900 font-mono">1,882,901</span>
              </div>
              <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                Export System Log
              </button>
            </div>
          </div>

          <div className="p-8 rounded-3xl brand-gradient text-white shadow-xl">
            <h3 className="text-xs font-bold text-white/70 uppercase tracking-widest mb-4">Financing Eligibility API</h3>
            <p className="text-sm font-medium mb-6 leading-relaxed">Embed real-world asset verification directly into your underwriting workflow.</p>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest w-full transition-all border border-white/20">
              Generate API Secret
            </button>
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-blue-100 relative">
      {/* Refined Minimalist Header */}
      <header className="bg-white border-b border-slate-100 h-20 flex items-center px-10 justify-between sticky top-0 z-40">
        <div className="flex items-center gap-10">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setCurrentView('landing')}
          >
            <div className="w-9 h-9 brand-gradient rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">RegLedger</h1>
              <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest mt-1">Core Infrastructure</p>
            </div>
          </div>
          
          {currentView !== 'landing' && (
            <nav className="hidden lg:flex gap-8">
              <button 
                onClick={() => setCurrentView('registry')}
                className={`text-sm font-bold tracking-tight transition-all pb-1 border-b-2 ${currentView === 'registry' ? 'text-slate-900 border-slate-900' : 'text-slate-400 border-transparent hover:text-slate-900'}`}
              >
                Registry
              </button>
              <button 
                onClick={() => setCurrentView('about')}
                className={`text-sm font-bold tracking-tight transition-all pb-1 border-b-2 ${currentView === 'about' ? 'text-slate-900 border-slate-900' : 'text-slate-400 border-transparent hover:text-slate-900'}`}
              >
                About Us
              </button>
              <a href="#" className="text-sm font-bold tracking-tight text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest text-[10px]">API Docs</a>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-5">
          {currentView === 'landing' && (
            <button
              onClick={() => setCurrentView('registry')}
              className="text-sm font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors px-6 py-2 border-2 border-slate-900 rounded-xl hover:bg-slate-50"
            >
              Dashboard
            </button>
          )}
          {currentView !== 'landing' && (
            <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
              <div className="w-6 h-6 rounded-full brand-gradient"></div>
              <span className="text-sm font-semibold text-slate-700">JS_Admin</span>
            </div>
          )}
        </div>
      </header>

      {renderContent()}

      {currentView === 'registry' && (
        <AssetDetailModal 
          asset={selectedAsset} 
          onClose={() => setSelectedAsset(null)} 
        />
      )}

      {currentView !== 'landing' && <MarcusChat currentView={currentView} />}

      {currentView !== 'landing' && (
        <footer className="mt-auto border-t border-slate-100 bg-white px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 brand-gradient rounded-lg"></div>
            <span className="text-xs font-bold text-slate-900 tracking-tight">RegLedger Core v1.0.4</span>
          </div>
          <div className="flex gap-10">
            <button onClick={() => setCurrentView('about')} className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">About Us</button>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Protocol</a>
            <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">Privacy</a>
          </div>
          <div className="text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em]">
            Regulated by RWA Infrastructure standards
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
