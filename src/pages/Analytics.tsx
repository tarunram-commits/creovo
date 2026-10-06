import React from 'react';
import { ArrowUpRight, Zap, Globe, Search, ShieldCheck } from 'lucide-react';
import { getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const AnalyticsPage: React.FC = () => {
  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — PERFORMANCE & QUALITY STANDARDS */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — TECHNICAL STANDARDS</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Engineering standards<br />
              built for conversion<br />
              and reliability.
            </h1>
            <p className="editorial-lede">
              How CREOVO approaches technical performance, search engine foundations, and digital presence engineering.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-end items-start lg:items-end">
            <a href="#/contact" className="editorial-pill-btn-yellow w-full sm:w-auto text-center">
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={getWhatsAppInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-pill-btn-secondary w-full sm:w-auto text-center"
            >
              <span>Chat on WhatsApp</span>
              <Zap className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* 4 Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Speed & Core Web Vitals */}
          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">01</span>
                <span className="editorial-badge">Performance</span>
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Zap className="h-6 w-6" />
              </div>
              <h2 className="editorial-card-title">Core Web Vitals & Speed</h2>
              <p className="editorial-card-body">
                We write clean, semantic code with sub-second loading targets, optimized assets, and zero template bloat to ensure fast experiences on all networks.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E5E3DF] flex items-center justify-between">
              <span className="text-xs text-[#777572]">Target: Sub-second LCP</span>
              <span className="text-xs font-bold text-[#16845F]">Standard</span>
            </div>
          </div>

          {/* Card 2: Search Architecture */}
          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">02</span>
                <span className="editorial-badge">Search</span>
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Search className="h-6 w-6" />
              </div>
              <h2 className="editorial-card-title">Search Engine Optimization</h2>
              <p className="editorial-card-body">
                Structured schema markup, clean OpenGraph tags, semantic HTML hierarchy, and search-friendly site architecture built into every web build.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E5E3DF] flex items-center justify-between">
              <span className="text-xs text-[#777572]">Technical SEO Foundations</span>
              <span className="text-xs font-bold text-[#111111]">Standard</span>
            </div>
          </div>

          {/* Card 3: Responsive UI/UX */}
          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">03</span>
                <span className="editorial-badge">Interface</span>
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="editorial-card-title">Multi-Device Responsiveness</h2>
              <p className="editorial-card-body">
                Every layout is tailored for mobile, tablet, and desktop screens with disciplined typography scales, touch-friendly targets, and smooth transitions.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E5E3DF] flex items-center justify-between">
              <span className="text-xs text-[#777572]">Mobile-First Design</span>
              <span className="text-xs font-bold text-[#111111]">Standard</span>
            </div>
          </div>

          {/* Card 4: Continuous Stewardship */}
          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">04</span>
                <span className="editorial-badge">Management</span>
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="editorial-card-title">Ongoing Maintenance & Care</h2>
              <p className="editorial-card-body">
                Routine website updates, SSL management, content refreshes, and direct WhatsApp support so your digital presence stays secure and active.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E5E3DF] flex items-center justify-between">
              <span className="text-xs text-[#777572]">Digital Retainers</span>
              <span className="text-xs font-bold text-[#16845F]">Continuous</span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — AUDIT CTA */}
      <section className="editorial-section">
        <div className="p-8 sm:p-12 bg-white border border-[#E5E3DF] rounded-[26px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#777572] mb-2 font-bold">
              Engineering Excellence
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
              Need a digital presence audit?
            </h3>
            <p className="text-sm text-[#777572] mt-1 max-w-md">
              We can evaluate your existing website, design, content, and search presence and outline clear improvements.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#/contact" className="editorial-pill-btn-yellow">
              <span>Request Audit</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={getMailtoInquiryLink()} className="editorial-pill-btn-secondary">
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03 — LIVE ANALYTICS STREAM */}
      <section className="editorial-section">
        <div className="editorial-section-label">03 — DATA STREAM</div>
        <div className="bg-white border border-[#E5E3DF] rounded-[26px] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-badge">
            <span className="editorial-badge-dot editorial-badge-dot--muted" />
            Connection State
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
            No Active Analytics Stream Connected
          </h3>
          <p className="text-sm sm:text-base text-[#777572] max-w-md mx-auto leading-relaxed">
            Digital presence analytics and search index metrics will stream here once tracking instrumentation or Search Console is connected for your domain.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a href="#/contact" className="editorial-pill-btn-yellow">
              <span>Request Technical Audit</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={getMailtoInquiryLink()} className="editorial-pill-btn-secondary">
              <span>Email Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnalyticsPage;
