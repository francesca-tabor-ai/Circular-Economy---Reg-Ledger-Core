import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-6 md:px-10 py-32 md:py-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1682588111755-af71d01dace3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/70"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.1]">
              Infrastructure for Circular Economy Capital That Must Withstand Scrutiny
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-[1.7] mb-14 font-normal">
              Deploy capital into circular economy assets with lifecycle intelligence regulators and credit committees can defend.
            </p>
            <p className="text-sm text-white/70 mb-12 leading-relaxed">
              Built on the institutional system philosophy of founder Marcus Ellison.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="brand-gradient text-white px-10 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest soft-shadow hover:scale-[1.02] transition-all">
                Request Institutional Demo
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
                Download Systems Overview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="bg-[#f9fafb] border-y border-[#e5e7eb] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs font-bold text-[#6b7280] uppercase tracking-[0.3em] mb-10 text-center">Trusted by teams operating across:</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Infrastructure Finance', 'Regulated Lending', 'Sovereign & Public Capital', 'Industrial Asset Investment'].map((item, idx) => (
              <div key={idx} className="text-sm font-semibold text-[#4b5563] uppercase tracking-widest">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-8 leading-[1.2]">
            The Constraint Isn't Capital.<br />
            It's Trust In The System Behind Circular Economy Assets.
          </h2>
          <div className="space-y-16 mt-20">
            <div>
              <p className="text-lg text-[#4b5563] mb-8 font-normal leading-[1.7]">Financial institutions are being asked to finance circular economy assets:</p>
              <ul className="space-y-4">
                {['Circular infrastructure projects', 'Regenerative industrial assets', 'Material recovery and remanufacturing systems', 'Long-life circular economy assets'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#6b7280] mt-1.5">—</span>
                    <span className="text-[#4b5563] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg text-[#4b5563] mb-8 font-normal leading-[1.7]">But decision frameworks still rely on:</p>
              <ul className="space-y-4">
                {['Static disclosures', 'Point-in-time certifications', 'Fragmented lifecycle visibility', 'Lagging regulatory interpretation'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#6b7280] mt-1.5">—</span>
                    <span className="text-[#4b5563] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f9fafb] rounded-3xl p-10 border border-[#e5e7eb]">
              <p className="text-xl font-bold text-[#0a0a0a] italic leading-relaxed">
                This creates a structural conflict:
              </p>
              <p className="text-lg text-[#4b5563] mt-6 leading-[1.7]">
                Capital must commit long-term.<br />
                Data remains short-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-[#f9fafb] border-y border-[#e5e7eb] py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-10 leading-[1.2]">
              A Verification Infrastructure For Circular Economy Capital
            </h2>
            <p className="text-xl text-[#4b5563] leading-[1.7] mb-16 font-normal">
              Our platform provides continuous, regulator-aligned intelligence on how circular economy assets are designed, built, operated, and maintained across their lifecycle — tracking material flows, recovery rates, and circularity metrics.
            </p>
            <p className="text-lg text-[#4b5563] mb-10 font-normal leading-[1.7]">So institutions can:</p>
            <ul className="space-y-5 mb-16">
              {[
                'Price risk with real circular economy system data',
                'Defend financing decisions under audit with verified circularity metrics',
                'Scale capital deployment into circular economy assets',
                'Reduce regulatory interpretation ambiguity for circular finance'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full brand-gradient mt-2 flex-shrink-0"></div>
                  <span className="text-[#4b5563] text-lg leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-20 leading-[1.2]">Core Value Pillars</h2>
          <div className="space-y-20">
            <div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-5 leading-[1.3]">Circular Economy Lifecycle Truth — Not Snapshot Reporting</h3>
              <p className="text-lg text-[#4b5563] leading-[1.7]">Continuous verification across circular asset lifecycles, tracking material flows and recovery rates, not periodic disclosures.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-5 leading-[1.3]">Circular Economy Regulatory Alignment — By Design</h3>
              <p className="text-lg text-[#4b5563] leading-[1.7]">Signals mapped to circular economy regulatory logic and green taxonomies, not marketing frameworks.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-5 leading-[1.3]">Institutional Decision Context — Built In</h3>
              <p className="text-lg text-[#4b5563] mb-6 leading-[1.7]">Outputs framed for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Credit committees', 'Regulators', 'Audit functions', 'Treasury risk'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-[#6b7280]">•</span>
                    <span className="text-[#4b5563] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Authority Section */}
      <section className="bg-[#0a0a0a] text-white py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-[1.2]">
              Designed From The Reality Of How Systems Actually Fail
            </h2>
            <p className="text-xl text-[#d1d5db] leading-[1.7] mb-16 font-normal">
              The platform is built on the institutional systems framework developed by founder Marcus Ellison.
            </p>
            <p className="text-lg text-[#9ca3af] mb-10 leading-[1.7]">
              Ellison's work spans capital, infrastructure systems, and institutional risk design, with a core thesis:
            </p>
            <div className="bg-[#1f1f1f] rounded-3xl p-10 mb-10 border border-[#374151]">
              <p className="text-xl font-bold italic mb-4 leading-[1.7]">
                The strength of an institution is measured by how long its systems remain stable.
              </p>
            </div>
            <p className="text-lg text-[#d1d5db] font-normal leading-[1.7]">
              The platform reflects a simple belief:
            </p>
            <p className="text-2xl font-bold mt-6 leading-[1.3]">
              Long-term capital requires long-term system truth.
            </p>
          </div>
        </div>
      </section>

      {/* What The Platform Delivers */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-20 leading-[1.2]">What The Platform Delivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Verified Circular Economy Asset Lifecycle Registry</h3>
              <p className="text-[#4b5563] leading-[1.7]">
                Defensible history of circular asset origin, material flows, recovery rates, compliance state, and circularity performance.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Continuous Circular Economy Compliance Intelligence</h3>
              <p className="text-[#4b5563] leading-[1.7]">
                Real-time signals when circular economy assets move outside regulatory tolerances or circularity thresholds.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Audit-Ready Circular Economy System Replay</h3>
              <p className="text-[#4b5563] leading-[1.7]">
                Reconstruct circular economy financing eligibility and compliance state at any historical moment.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-[#0a0a0a] leading-[1.3]">Circular Economy Financing Eligibility Intelligence</h3>
              <p className="text-[#4b5563] leading-[1.7]">
                Regulatory-aligned signals for circular economy underwriting, portfolio monitoring, and capital allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-[#f9fafb] border-y border-[#e5e7eb] py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-10 leading-[1.2]">
              Who This Is For
            </h2>
            <p className="text-xl text-[#4b5563] mb-16 font-normal leading-[1.7]">
              Built for institutions financing the circular economy where decisions must survive scrutiny.
            </p>
            <p className="text-lg text-[#4b5563] mb-10 font-normal leading-[1.7]">Primary users:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
              {[
                'Tier 1 Banks financing circular economy',
                'Institutional Lenders for circular assets',
                'Circular Economy Infrastructure Finance Teams',
                'Sovereign Circular Capital Programs',
                'Regulated Circular Economy Asset Investors'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-2.5 h-2.5 rounded-full brand-gradient flex-shrink-0"></div>
                  <span className="text-[#4b5563] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Institutions Adopt */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-10 leading-[1.2]">
            Why Institutions Adopt
          </h2>
          <p className="text-xl text-[#4b5563] mb-16 font-normal italic leading-[1.7]">
            Because the cost of being wrong is structural.
          </p>
          <p className="text-lg text-[#4b5563] mb-10 font-normal leading-[1.7]">The platform helps institutions:</p>
          <ul className="space-y-5">
            {[
              'Increase defensible lending volume',
              'Reduce compliance overhead',
              'Accelerate deal evaluation',
              'Improve regulator confidence',
              'Strengthen long-term portfolio stability'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full brand-gradient mt-2 flex-shrink-0"></div>
                <span className="text-[#4b5563] text-lg leading-[1.7]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-[#0a0a0a] text-white py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10 leading-[1.2]">
              Systems Decide Outcomes Long Before Events Do
            </h2>
            <p className="text-xl text-[#d1d5db] leading-[1.7] mb-10 font-normal">
              Most infrastructure and capital failures are not funding failures.
            </p>
            <p className="text-lg text-[#9ca3af] mb-10 leading-[1.7]">They are lifecycle design failures embedded into:</p>
            <ul className="space-y-5 mb-16">
              {[
                'Procurement structures',
                'Financing models',
                'Material dependencies',
                'Regulatory lag'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-[#6b7280] mt-1.5">—</span>
                  <span className="text-[#d1d5db] text-lg leading-[1.7]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold leading-[1.3]">
              We exist to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Product Experience Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-10 leading-[1.2]">
            Institutional Intelligence. Accessible Through Conversation.
          </h2>
            <p className="text-xl text-[#4b5563] leading-[1.7] mb-12 font-normal">
            Inside the platform, users can interact directly with the system through the Founder Intelligence interface — translating circular economy technical signals into institutional decision context.
          </p>
          <div className="bg-[#f9fafb] rounded-3xl p-10 border border-[#e5e7eb]">
            <p className="text-lg text-[#4b5563] font-normal leading-[1.7]">
              Not support.<br />
              Not dashboards.<br />
              <span className="font-bold text-[#0a0a0a]">Operational system understanding.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-[#f9fafb] border-y border-[#e5e7eb] py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-10 leading-[1.2]">
              When Lifecycle Truth Becomes Infrastructure,<br />
              Capital Can Move With Confidence.
            </h2>
            <p className="text-xl text-[#4b5563] leading-[1.7] mb-16 font-normal">
              If your institution is deploying capital into circular economy assets, the cost of data ambiguity compounds every year.
            </p>
            <p className="text-lg text-[#4b5563] font-normal leading-[1.7]">
              We are building the verification layer for circular economy assets, designed to match the time horizon of the circular assets you finance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a0a0a] mb-16 leading-[1.2]">
            Deploy Circular Economy Capital With System-Level Confidence
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="brand-gradient text-white px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest soft-shadow hover:scale-[1.02] transition-all">
              Request Institutional Briefing
            </button>
            <button className="bg-white border-2 border-[#0a0a0a] text-[#0a0a0a] px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-[#f9fafb] transition-all">
              Schedule Architecture Walkthrough
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
