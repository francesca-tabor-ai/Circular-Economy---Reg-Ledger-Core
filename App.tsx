
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { MOCK_ASSETS, MOCK_SIGNALS } from './constants';
import { Asset } from './types';
import AssetCard from './components/AssetCard';
import ComplianceFeed from './components/ComplianceFeed';
import RiskSummary from './components/RiskSummary';
import AssetDetailModal from './components/AssetDetailModal';
import MarcusChat from './components/MarcusChat';

// Lazy load pages
const LandingPage = lazy(() => import('./components/LandingPage'));
const AboutPage = lazy(() => import('./components/AboutPage'));

type View = 'landing' | 'registry' | 'about';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const filteredAssets = MOCK_ASSETS.filter(a => 
    a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Enhanced view change handler with micro interaction
  const handleViewChange = (view: View) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    if (currentView === 'landing') {
      return (
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-4 border-[#e5e7eb] border-t-[#0a0a0a] rounded-full animate-spin"></div>
          </div>
        }>
          <LandingPage />
        </Suspense>
      );
    }
    
    if (currentView === 'about') {
      return (
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center min-h-screen">
            <div className="w-12 h-12 border-4 border-[#e5e7eb] border-t-[#0a0a0a] rounded-full animate-spin"></div>
          </div>
        }>
          <AboutPage />
        </Suspense>
      );
    }

    return (
      <main className="flex-1 px-10 py-12 max-w-[1400px] mx-auto w-full grid grid-cols-12 gap-12 animate-fade-in">
        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          
          <div className="space-y-3">
            <h2 className="text-4xl font-bold tracking-tight text-[#0a0a0a] leading-[1.2]">Asset Verification Ledger</h2>
            <p className="text-[#4b5563] text-lg leading-[1.7] max-w-2xl font-normal">
              Institutional-grade verification rails for real-world industrial assets. Audit-ready lifecycle data at scale.
            </p>
          </div>

          <RiskSummary assets={MOCK_ASSETS} />

          <div className="space-y-8">
            <div className="flex justify-between items-end">
              <h3 className="text-sm font-bold text-[#6b7280] uppercase tracking-[0.2em]">Active Portfolios</h3>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Query assets..." 
                  className="w-64 pl-4 pr-10 py-2 text-sm border-b border-[#e5e7eb] focus:border-[#0a0a0a] outline-none transition-all duration-200 placeholder:text-[#9ca3af] focus:placeholder:text-[#6b7280] hover:border-[#d1d5db]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af] group-focus-within:text-[#0a0a0a] group-focus-within:scale-110 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
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
          <div className="p-8 rounded-3xl bg-[#f9fafb] border border-[#e5e7eb] soft-shadow">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full brand-gradient"></span>
              Live Compliance Pulse
            </h3>
            <ComplianceFeed signals={MOCK_SIGNALS} />
          </div>

          <div className="p-8 rounded-3xl border border-[#e5e7eb] bg-white">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-widest mb-6">Verification Node</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-[#f3f4f6] pb-4">
                <span className="text-sm font-medium text-[#4b5563]">Node Latency</span>
                <span className="text-lg font-bold text-[#0a0a0a] font-mono">14ms</span>
              </div>
              <div className="flex justify-between items-end border-b border-[#f3f4f6] pb-4">
                <span className="text-sm font-medium text-[#4b5563]">Ledger Height</span>
                <span className="text-lg font-bold text-[#0a0a0a] font-mono">1,882,901</span>
              </div>
              <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-[#0a0a0a] border border-[#e5e7eb] rounded-2xl hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                Export System Log
              </button>
            </div>
          </div>

          <div className="p-8 rounded-3xl brand-gradient text-white soft-shadow">
            <h3 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-4">Financing Eligibility API</h3>
            <p className="text-sm font-normal mb-6 leading-[1.7]">Embed real-world asset verification directly into your underwriting workflow.</p>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest w-full transition-all duration-200 border border-white/20 hover:border-white/30 hover:scale-[1.02] active:scale-[0.98]">
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
      <header className="bg-white border-b border-[#e5e7eb] h-20 flex items-center px-10 justify-between sticky top-0 z-40">
        <div className="flex items-center gap-10">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleViewChange('landing')}
          >
            <div className="w-9 h-9 brand-gradient rounded-2xl flex items-center justify-center subtle-shadow group-hover:scale-110 group-active:scale-95 transition-all duration-200">
              <svg className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="group-hover:translate-x-0.5 transition-transform duration-200">
              <h1 className="text-xl font-bold tracking-tight text-[#0a0a0a] leading-none group-hover:text-[#4b5563] transition-colors duration-200">RegLedger</h1>
              <p className="text-[11px] text-[#6b7280] font-medium uppercase tracking-widest mt-1">Core Infrastructure</p>
            </div>
          </div>
          
          {currentView !== 'landing' && (
            <nav className="hidden lg:flex gap-8">
              <button 
                onClick={() => handleViewChange('registry')}
                className={`text-sm font-bold tracking-tight transition-all duration-200 pb-1 border-b-2 ${currentView === 'registry' ? 'text-[#0a0a0a] border-[#0a0a0a]' : 'text-[#6b7280] border-transparent hover:text-[#0a0a0a] hover:border-[#0a0a0a]/50'}`}
              >
                Registry
              </button>
              <button 
                onClick={() => handleViewChange('about')}
                className={`text-sm font-bold tracking-tight transition-all duration-200 pb-1 border-b-2 ${currentView === 'about' ? 'text-[#0a0a0a] border-[#0a0a0a]' : 'text-[#6b7280] border-transparent hover:text-[#0a0a0a] hover:border-[#0a0a0a]/50'}`}
              >
                About Us
              </button>
              <a href="#" className="text-sm font-bold tracking-tight text-[#6b7280] hover:text-[#0a0a0a] transition-colors duration-200 uppercase tracking-widest text-[10px] hover:underline">API Docs</a>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-5">
          {currentView === 'landing' && (
            <button
              onClick={() => handleViewChange('registry')}
              className="text-sm font-bold tracking-tight text-[#0a0a0a] hover:text-[#4b5563] transition-all duration-200 px-6 py-2 border-2 border-[#0a0a0a] rounded-2xl hover:bg-[#f9fafb] hover:scale-105 active:scale-95 hover:shadow-md"
            >
              Dashboard
            </button>
          )}
          {currentView !== 'landing' && (
            <div className="flex items-center gap-3 px-4 py-2 bg-[#f9fafb] rounded-full border border-[#e5e7eb] hover:bg-[#f3f4f6] hover:border-[#d1d5db] transition-all duration-200 cursor-pointer group">
              <div className="w-6 h-6 rounded-full brand-gradient group-hover:scale-110 transition-transform duration-200"></div>
              <span className="text-sm font-semibold text-[#4b5563] group-hover:text-[#0a0a0a] transition-colors duration-200">JS_Admin</span>
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
        <footer className="mt-auto border-t border-[#e5e7eb] bg-white px-10 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 brand-gradient rounded-2xl"></div>
            <span className="text-xs font-bold text-[#0a0a0a] tracking-tight">RegLedger Core v1.0.4</span>
          </div>
          <div className="flex gap-10">
            <button onClick={() => handleViewChange('about')} className="text-xs font-bold text-[#6b7280] hover:text-[#0a0a0a] uppercase tracking-widest transition-colors duration-200 hover:underline">About Us</button>
            <a href="#" className="text-xs font-bold text-[#6b7280] hover:text-[#0a0a0a] uppercase tracking-widest transition-colors duration-200 hover:underline">Protocol</a>
            <a href="#" className="text-xs font-bold text-[#6b7280] hover:text-[#0a0a0a] uppercase tracking-widest transition-colors duration-200 hover:underline">Privacy</a>
          </div>
          <div className="text-[10px] text-[#9ca3af] font-medium uppercase tracking-[0.2em]">
            Regulated by RWA Infrastructure standards
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
