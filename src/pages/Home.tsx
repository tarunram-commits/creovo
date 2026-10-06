import React, { useMemo } from 'react';
import { ArrowUpRight, ArrowRight, MessageSquare, Layers } from 'lucide-react';
import { getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const HomePage: React.FC = () => {
  const servicePills = useMemo(
    () => [
      { num: '01', title: 'Websites' },
      { num: '02', title: 'Design' },
      { num: '03', title: 'Content' },
      { num: '04', title: 'Social Media' },
      { num: '05', title: 'SEO' },
      { num: '06', title: 'Digital Management' },
    ],
    []
  );

  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — HERO / STUDIO OVERVIEW */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — CREATIVE DIGITAL AGENCY</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Your digital presence,<br />
              built and managed.
            </h1>
            <p className="editorial-lede">
              CREOVO is a creative digital agency helping businesses build, manage, and grow their digital presence through websites, design, content, social media, SEO, and ongoing digital management.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#/contact" className="editorial-pill-btn-yellow">
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#/services" className="editorial-pill-btn-secondary">
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border border-[#E5E3DF] rounded-[26px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E3DF]">
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#777572]">
                Studio Status
              </span>
              <span className="editorial-badge">
                <span className="editorial-badge-dot editorial-badge-dot--green" />
                Active
              </span>
            </div>
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#111111]">
                Business-First Creative Partner
              </div>
              <p className="text-xs text-[#777572] leading-relaxed">
                Direct collaboration with senior developers, designers, and strategists on every project milestone.
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppInquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#FFD329] transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Service Chips */}
        <div className="pt-10 border-t border-[#E5E3DF]">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#777572] mb-6 font-mono">
            Core Integrated Disciplines
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {servicePills.map((item) => (
              <a
                key={item.num}
                href="#/services"
                className="p-4 bg-white border border-[#E5E3DF] rounded-2xl flex flex-col justify-between gap-3 hover:border-[#111111] hover:bg-[#F5F4F1] transition-all group"
              >
                <span className="font-mono text-xs font-bold text-[#777572] group-hover:text-[#111111]">
                  {item.num}
                </span>
                <span className="text-sm font-bold text-[#111111]">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — WORKSPACE ACCESS */}
      <section className="editorial-section">
        <div className="p-8 sm:p-12 bg-white border border-[#E5E3DF] rounded-[26px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#777572] mb-2 font-bold">
              Agency Workspace
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
              Explore the Studio Workspace
            </h2>
            <p className="text-sm text-[#777572] mt-1 max-w-md">
              Review our live capabilities directory, engineering standards, direct message channels, and project scoping tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#/dashboard" className="editorial-pill-btn-primary">
              <span>Open Dashboard</span>
              <Layers className="h-4 w-4" />
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

export default HomePage;
