import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { CREOVO_TEAM, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const AboutPage: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'BUILD',
      tagline: 'Engineered with Purpose',
      description:
        'Useful, modern digital experiences built on clean code, responsive layouts, and reliable infrastructure.',
    },
    {
      num: '02',
      title: 'DESIGN',
      tagline: 'Clear Visual Systems',
      description:
        'Modern interfaces and design languages that communicate the value of the brand clearly and memorably.',
    },
    {
      num: '03',
      title: 'CREATE',
      tagline: 'Human & Confident Voice',
      description:
        'Persuasive copywriting and curated social media content that gives businesses a distinct digital voice.',
    },
    {
      num: '04',
      title: 'GROW',
      tagline: 'Continuous Momentum',
      description:
        'Search engine foundations and ongoing digital management that compound and improve presence over time.',
    },
  ];

  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — ABOUT CREOVO */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — ABOUT CREOVO</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Your digital presence,<br />
              built and managed.
            </h1>
            <p className="editorial-lede">
              CREOVO is a creative digital agency helping businesses build and manage a stronger, more consistent presence online across websites, design, content, social media, and SEO.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
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
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* 4 Guiding Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div key={p.num} className="editorial-card">
              <div>
                <div className="editorial-card-top">
                  <span className="editorial-card-num">{p.num}</span>
                  <span className="editorial-badge">Pillar {p.num}</span>
                </div>
                <h2 className="editorial-card-title">{p.title}</h2>
                <div className="text-xs font-mono uppercase tracking-wider text-[#777572] mb-3">
                  {p.tagline}
                </div>
                <p className="editorial-card-body">{p.description}</p>
              </div>
              <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#777572]">
                CREOVO Philosophy
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — THE TEAM */}
      <section className="editorial-section">
        <div className="editorial-section-label">02 — THE TEAM</div>
        <h2 className="editorial-subheading">The People Behind CREOVO</h2>
        <p className="editorial-lede">
          The core engineers, designers, and strategists actively building and managing your digital touchpoints.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {CREOVO_TEAM.map((member, idx) => (
            <div key={member.id} className="editorial-card">
              <div>
                <div className="editorial-card-top">
                  <div className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center font-mono text-sm font-bold">
                    {member.initials}
                  </div>
                  <span className="editorial-card-num">0{idx + 1}</span>
                </div>

                <h3 className="text-xl font-bold font-sans text-[#111111] mb-4">
                  {member.name}
                </h3>
              </div>

              <div className="pt-4 border-t border-[#E5E3DF]">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[#777572] mb-2 font-mono">
                  Disciplines:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.rolePillars.map((role, rIdx) => (
                    <span
                      key={rIdx}
                      className="px-2 py-0.5 bg-[#F5F4F1] border border-[#E5E3DF] text-[11px] font-medium text-[#111111] rounded-md font-mono"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-white border border-[#E5E3DF] rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] font-mono">
            Direct collaboration with core team members on every stage of your project.
          </span>
          <a
            href={getMailtoInquiryLink()}
            className="editorial-pill-btn-primary text-xs w-full sm:w-auto text-center"
          >
            <span>Email Direct Inquiry</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
