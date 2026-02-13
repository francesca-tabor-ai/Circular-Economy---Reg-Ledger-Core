import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
            Infrastructure for Capital That Must Withstand Scrutiny
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 font-medium">
            Deploy capital into real-world assets with lifecycle intelligence regulators and credit committees can defend.
          </p>
          <p className="text-sm text-slate-500 mb-10">
            Built on the institutional system philosophy of founder Marcus Ellison.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="brand-gradient text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
              Request Institutional Demo
            </button>
            <button className="bg-white border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
              Download Systems Overview
            </button>
          </div>
        </div>
      </section>

      {/* Trust Signal Strip */}
      <section className="bg-slate-50 border-y border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Trusted by teams operating across:</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {['Infrastructure Finance', 'Regulated Lending', 'Sovereign & Public Capital', 'Industrial Asset Investment'].map((item, idx) => (
              <div key={idx} className="text-sm font-bold text-slate-700 uppercase tracking-widest">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            The Constraint Isn't Capital.<br />
            It's Trust In The System Behind The Asset.
          </h2>
          <div className="space-y-12 mt-16">
            <div>
              <p className="text-lg text-slate-600 mb-6 font-medium">Financial institutions are being asked to finance:</p>
              <ul className="space-y-3">
                {['Complex infrastructure', 'Transition industrial assets', 'Long-life physical systems'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">—</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-lg text-slate-600 mb-6 font-medium">But decision frameworks still rely on:</p>
              <ul className="space-y-3">
                {['Static disclosures', 'Point-in-time certifications', 'Fragmented lifecycle visibility', 'Lagging regulatory interpretation'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-slate-400 mt-1">—</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <p className="text-xl font-bold text-slate-900 italic">
                This creates a structural conflict:
              </p>
              <p className="text-lg text-slate-700 mt-4">
                Capital must commit long-term.<br />
                Data remains short-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              A Verification Infrastructure For Institutional Capital
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-12 font-medium">
              Our platform provides continuous, regulator-aligned intelligence on how real-world assets are designed, built, operated, and maintained across their lifecycle.
            </p>
            <p className="text-lg text-slate-600 mb-8 font-medium">So institutions can:</p>
            <ul className="space-y-4 mb-12">
              {[
                'Price risk with real system data',
                'Defend financing decisions under audit',
                'Scale capital deployment into complex assets',
                'Reduce regulatory interpretation ambiguity'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full brand-gradient mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Value Pillars */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-16">Core Value Pillars</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lifecycle Truth — Not Snapshot Reporting</h3>
              <p className="text-lg text-slate-600">Continuous verification across asset life, not periodic disclosures.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Regulatory Alignment — By Design</h3>
              <p className="text-lg text-slate-600">Signals mapped to real regulatory logic, not marketing frameworks.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Institutional Decision Context — Built In</h3>
              <p className="text-lg text-slate-600 mb-4">Outputs framed for:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Credit committees', 'Regulators', 'Audit functions', 'Treasury risk'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Authority Section */}
      <section className="bg-slate-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Designed From The Reality Of How Systems Actually Fail
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 font-medium">
              The platform is built on the institutional systems framework developed by founder Marcus Ellison.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Ellison's work spans capital, infrastructure systems, and institutional risk design, with a core thesis:
            </p>
            <div className="bg-slate-800 rounded-2xl p-8 mb-8 border border-slate-700">
              <p className="text-xl font-bold italic mb-4">
                The strength of an institution is measured by how long its systems remain stable.
              </p>
            </div>
            <p className="text-lg text-slate-300 font-medium">
              The platform reflects a simple belief:
            </p>
            <p className="text-2xl font-bold mt-4">
              Long-term capital requires long-term system truth.
            </p>
          </div>
        </div>
      </section>

      {/* What The Platform Delivers */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-16">What The Platform Delivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Verified Asset Lifecycle Registry</h3>
              <p className="text-slate-600 leading-relaxed">
                Defensible history of asset origin, materials, compliance state, and operational performance.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Continuous Compliance Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Real-time signals when assets move outside regulatory or financing tolerances.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Audit-Ready System Replay</h3>
              <p className="text-slate-600 leading-relaxed">
                Reconstruct financing eligibility and compliance state at any historical moment.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Financing Eligibility Intelligence</h3>
              <p className="text-slate-600 leading-relaxed">
                Regulatory-aligned signals for underwriting, portfolio monitoring, and capital allocation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-50 border-y border-slate-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Who This Is For
            </h2>
            <p className="text-xl text-slate-700 mb-12 font-medium">
              Built for institutions where decisions must survive scrutiny.
            </p>
            <p className="text-lg text-slate-600 mb-8 font-medium">Primary users:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {[
                'Tier 1 Banks',
                'Institutional Lenders',
                'Infrastructure Finance Teams',
                'Sovereign Capital Programs',
                'Regulated Industrial Asset Investors'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full brand-gradient flex-shrink-0"></div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Institutions Adopt */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Why Institutions Adopt
          </h2>
          <p className="text-xl text-slate-700 mb-12 font-medium italic">
            Because the cost of being wrong is structural.
          </p>
          <p className="text-lg text-slate-600 mb-8 font-medium">The platform helps institutions:</p>
          <ul className="space-y-4">
            {[
              'Increase defensible lending volume',
              'Reduce compliance overhead',
              'Accelerate deal evaluation',
              'Improve regulator confidence',
              'Strengthen long-term portfolio stability'
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full brand-gradient mt-2 flex-shrink-0"></div>
                <span className="text-slate-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-slate-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Systems Decide Outcomes Long Before Events Do
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 font-medium">
              Most infrastructure and capital failures are not funding failures.
            </p>
            <p className="text-lg text-slate-400 mb-8">They are lifecycle design failures embedded into:</p>
            <ul className="space-y-4 mb-12">
              {[
                'Procurement structures',
                'Financing models',
                'Material dependencies',
                'Regulatory lag'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">—</span>
                  <span className="text-slate-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-bold">
              We exist to close that gap.
            </p>
          </div>
        </div>
      </section>

      {/* Product Experience Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Institutional Intelligence. Accessible Through Conversation.
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
            Inside the platform, users can interact directly with the system through the Founder Intelligence interface — translating technical signals into institutional decision context.
          </p>
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <p className="text-lg text-slate-700 font-medium">
              Not support.<br />
              Not dashboards.<br />
              <span className="font-bold">Operational system understanding.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="bg-slate-50 border-y border-slate-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              When Lifecycle Truth Becomes Infrastructure,<br />
              Capital Can Move With Confidence.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
              If your institution is deploying capital into long-horizon physical systems, the cost of data ambiguity compounds every year.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              We are building the verification layer designed to match the time horizon of the assets you finance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-12">
            Deploy Capital With System-Level Confidence
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="brand-gradient text-white px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-all">
              Request Institutional Briefing
            </button>
            <button className="bg-white border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
              Schedule Architecture Walkthrough
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
