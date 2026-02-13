
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8">
          The verification layer for <span className="brand-gradient-text">regulated capital.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium">
          We build the infrastructure that allows financial institutions to finance the real economy with total confidence.
        </p>
      </header>

      <div className="space-y-24">
        {/* Core Narrative */}
        <section className="space-y-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            Financial institutions are under growing pressure to deploy capital into sustainable and real-world industrial assets — while simultaneously facing stricter regulatory scrutiny, higher compliance burdens, and increasing audit expectations. The problem isn’t capital availability. It’s trust in the underlying data.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Today, banks and institutional lenders rely on fragmented disclosures, static certifications, and delayed reporting. This creates risk uncertainty, slows deal flow, and limits the scale of financing into critical infrastructure and sustainable asset classes.
          </p>
          <p className="text-2xl font-bold text-slate-900 py-4 border-l-4 border-slate-900 pl-8 italic">
            "We exist to solve that."
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <section className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Our Mission</h3>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              To become the trusted verification layer that enables regulated financial institutions to safely finance real-world assets using continuous, audit-ready lifecycle data.
            </p>
          </section>
          <section className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Our Vision</h3>
            <p className="text-lg text-slate-800 font-medium leading-relaxed">
              A world where financing decisions for real-world assets are based on continuous, verified truth — not delayed reporting or self-declared data.
            </p>
          </section>
        </div>

        {/* What We Do */}
        <section className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">Product Capability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Verified Asset Lifecycle</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Immutable history of how physical assets are created, used, and maintained over time.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Continuous Monitoring</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Real-time signals translated into decision-ready data for financing, risk, and compliance.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Regulator-Ready Audit</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Instant replay of asset states and compliance proofs for stress tests and regulatory reporting.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900">Eligibility Intelligence</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                API-first delivery of regulatory-aligned scores to accelerate underwriting and deal velocity.
              </p>
            </div>
          </div>
        </section>

        {/* Serving the ICP */}
        <section className="space-y-12">
          <div className="max-w-2xl">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Who We Serve</h3>
            <p className="text-xl text-slate-800 font-medium leading-relaxed">
              We partner with Tier 1 banks, institutional lenders, and regulated capital providers that need defensible, regulator-aligned data before deploying capital into complex real-world assets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {['Regulatory Scrutiny', 'Scaling Sustainable Finance', 'Risk Reduction', 'Capital Efficiency'].map(item => (
              <span key={item} className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-600 uppercase tracking-widest shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="border-t border-slate-100 pt-20">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">Institutional Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">Regulatory-First</p>
              <p className="text-sm text-slate-500">Built from the ground up to satisfy the world's strictest financial reporting standards.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">Audit-by-Default</p>
              <p className="text-sm text-slate-500">Every asset movement and state change is cryptographically sealed and replayable.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 mb-2">Jurisdiction-Aware</p>
              <p className="text-sm text-slate-500">Intelligent data models that adapt to sovereign mandates and regional green taxonomies.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center border-t border-slate-100">
           <div className="w-16 h-16 brand-gradient rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
           </div>
           <h2 className="text-3xl font-bold text-slate-900 mb-4">The Infrastructure for Circular Finance</h2>
           <p className="text-slate-500 mb-10 max-w-lg mx-auto">When verification becomes infrastructure, capital can move faster, safer, and at global scale.</p>
           <button className="brand-gradient text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all">
              Connect to Registry
           </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
