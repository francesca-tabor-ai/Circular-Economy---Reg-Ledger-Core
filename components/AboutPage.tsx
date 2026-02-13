
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0a0a0a] mb-10 leading-[1.1]">
          The verification layer for <span className="brand-gradient-text">circular economy capital.</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#4b5563] leading-[1.7] font-normal">
          We build the infrastructure that allows financial institutions to finance the circular economy with total confidence.
        </p>
      </header>

      <div className="space-y-32">
        {/* Core Narrative */}
        <section className="space-y-10">
          <p className="text-lg text-[#4b5563] leading-[1.7] font-normal">
            Financial institutions are under growing pressure to deploy capital into circular economy assets — while simultaneously facing stricter regulatory scrutiny, higher compliance burdens, and increasing audit expectations. The problem isn't capital availability. It's trust in the underlying circular economy data.
          </p>
          <p className="text-lg text-[#4b5563] leading-[1.7] font-normal">
            Today, banks and institutional lenders rely on fragmented disclosures, static certifications, and delayed reporting. This creates risk uncertainty, slows deal flow, and limits the scale of financing into circular economy infrastructure and regenerative asset classes.
          </p>
          <p className="text-2xl font-bold text-[#0a0a0a] py-6 border-l-4 border-[#0a0a0a] pl-8 italic leading-[1.4]">
            "We exist to solve that."
          </p>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <section className="space-y-5">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-[0.3em]">Our Mission</h3>
            <p className="text-lg text-[#4b5563] font-normal leading-[1.7]">
              To become the trusted verification layer that enables regulated financial institutions to safely finance circular economy assets using continuous, audit-ready lifecycle data.
            </p>
          </section>
          <section className="space-y-5">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-[0.3em]">Our Vision</h3>
            <p className="text-lg text-[#4b5563] font-normal leading-[1.7]">
              A world where financing decisions for circular economy assets are based on continuous, verified truth — not delayed reporting or self-declared data.
            </p>
          </section>
        </div>

        {/* What We Do */}
        <section className="bg-[#f9fafb] rounded-[3rem] p-12 border border-[#e5e7eb]">
          <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-[0.3em] mb-12">Product Capability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-5">
              <h4 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Verified Circular Economy Asset Lifecycle</h4>
              <p className="text-sm text-[#4b5563] leading-[1.7]">
                Immutable history of how circular economy assets are created, used, recovered, and remanufactured over time.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Continuous Circular Economy Monitoring</h4>
              <p className="text-sm text-[#4b5563] leading-[1.7]">
                Real-time signals translated into decision-ready data for circular economy financing, risk, and compliance.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Regulator-Ready Circular Economy Audit</h4>
              <p className="text-sm text-[#4b5563] leading-[1.7]">
                Instant replay of circular economy asset states and compliance proofs for stress tests and regulatory reporting.
              </p>
            </div>
            <div className="space-y-5">
              <h4 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Circular Economy Eligibility Intelligence</h4>
              <p className="text-sm text-[#4b5563] leading-[1.7]">
                API-first delivery of circular economy regulatory-aligned scores to accelerate underwriting and deal velocity.
              </p>
            </div>
          </div>
        </section>

        {/* Serving the ICP */}
        <section className="space-y-14">
          <div className="max-w-2xl">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-[0.3em] mb-8">Who We Serve</h3>
            <p className="text-xl text-[#4b5563] font-normal leading-[1.7]">
              We partner with Tier 1 banks, institutional lenders, and regulated capital providers that need defensible, regulator-aligned data before deploying capital into circular economy assets.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {['Regulatory Scrutiny', 'Scaling Sustainable Finance', 'Risk Reduction', 'Capital Efficiency'].map(item => (
              <span key={item} className="px-6 py-3 bg-white border border-[#e5e7eb] rounded-2xl text-xs font-bold text-[#4b5563] uppercase tracking-widest subtle-shadow">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="border-t border-[#e5e7eb] pt-24">
          <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-[0.3em] mb-10">Institutional Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            <div>
              <p className="text-sm font-bold text-[#0a0a0a] mb-3 leading-[1.3]">Regulatory-First</p>
              <p className="text-sm text-[#4b5563] leading-[1.7]">Built from the ground up to satisfy the world's strictest financial reporting standards.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0a0a0a] mb-3 leading-[1.3]">Audit-by-Default</p>
              <p className="text-sm text-[#4b5563] leading-[1.7]">Every asset movement and state change is cryptographically sealed and replayable.</p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0a0a0a] mb-3 leading-[1.3]">Jurisdiction-Aware</p>
              <p className="text-sm text-[#4b5563] leading-[1.7]">Intelligent data models that adapt to sovereign mandates and regional circular economy green taxonomies.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 text-center border-t border-[#e5e7eb]">
           <div className="w-16 h-16 brand-gradient rounded-3xl mx-auto mb-10 flex items-center justify-center soft-shadow">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
           </div>
           <h2 className="text-3xl font-bold text-[#0a0a0a] mb-6 leading-[1.2]">The Infrastructure for Circular Finance</h2>
           <p className="text-[#4b5563] mb-12 max-w-lg mx-auto leading-[1.7]">When verification becomes infrastructure, capital can move faster, safer, and at global scale.</p>
           <button className="brand-gradient text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-[0.2em] soft-shadow hover:scale-[1.02] transition-all">
              Connect to Registry
           </button>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
