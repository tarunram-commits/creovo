import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/services';
import { getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const ServicesPage: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(SERVICES[0].id);

  const toggleService = (id: string) => {
    setActiveServiceId((current) => (current === id ? null : id));
  };

  const phases = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Strategic Understanding',
      description:
        'We understand your business model, audience intent, and goals to establish a clear digital roadmap.',
    },
    {
      num: '02',
      title: 'BUILD',
      subtitle: 'Design & Development',
      description:
        'We design and engineer responsive web experiences, pairing custom code with persuasive messaging.',
    },
    {
      num: '03',
      title: 'LAUNCH',
      subtitle: 'Deployment & Verification',
      description:
        'We test, optimize for performance, and launch your presence with search optimization and fast loading.',
    },
    {
      num: '04',
      title: 'GROW',
      subtitle: 'Stewardship & Expansion',
      description:
        'We provide ongoing maintenance, search adjustments, and content updates so your digital presence stays active.',
    },
  ];

  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — WHAT WE DO */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — WHAT WE DO</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Everything your<br />
              digital presence needs.
            </h1>
            <p className="editorial-lede">
              CREOVO helps businesses build, manage, and grow their digital presence through websites, design, content, social media, SEO, and ongoing digital management.
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

        {/* Horizontal Editorial Service Rows */}
        <div className="border-t border-[#E5E3DF] divide-y divide-[#E5E3DF]">
          {SERVICES.map((service) => {
            const isOpen = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-[#F5F4F1]/60' : 'hover:bg-[#F5F4F1]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${service.id}`}
                  className="w-full text-left py-8 md:py-10 flex items-center justify-between gap-6 px-4 sm:px-6 cursor-pointer group"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="font-mono text-xs md:text-sm font-bold bg-[#FFD329] px-3 py-1 border border-[#111111] text-[#111111] flex-shrink-0">
                      {service.number}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-sans tracking-tight text-[#111111] group-hover:underline">
                        {service.title}
                      </h2>
                      <p className="text-xs uppercase font-mono tracking-wider text-[#777572] mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full border border-[#E5E3DF] bg-white flex items-center justify-center text-[#111111] group-hover:border-[#111111] group-hover:bg-[#FFD329] transition-colors flex-shrink-0">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`service-panel-${service.id}`}
                    className="pb-10 pt-2 px-4 sm:px-6 md:pl-28 grid grid-cols-1 md:grid-cols-12 gap-8 items-start animate-fadeIn"
                  >
                    <div className="md:col-span-6 space-y-6">
                      <p className="text-base sm:text-lg text-[#111111] font-sans leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href="#/contact"
                          className="editorial-pill-btn-primary text-xs"
                        >
                          <span>Discuss this service</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={getMailtoInquiryLink({ projectType: service.title })}
                          className="editorial-pill-btn-secondary text-xs"
                        >
                          <span>Email Inquiry</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E3DF]">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#777572] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FFD329] inline-block" />
                        <span>Included Scope &amp; Deliverables</span>
                      </div>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-[#111111] font-medium"
                          >
                            <span className="w-4 h-4 rounded-full bg-[#F5F4F1] border border-[#E5E3DF] flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-[#111111]" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 02 — HOW WE WORK */}
      <section className="editorial-section">
        <div className="editorial-section-label">02 — HOW WE WORK</div>
        <h2 className="editorial-subheading">Our Methodology</h2>
        <p className="editorial-lede">
          A clear, disciplined progression from initial strategy to long-term digital growth and ongoing stewardship.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {phases.map((phase) => (
            <div key={phase.num} className="editorial-card">
              <div>
                <div className="editorial-card-top">
                  <span className="editorial-card-num">{phase.num}</span>
                  <span className="editorial-badge">Phase {phase.num}</span>
                </div>
                <h3 className="editorial-card-title">{phase.title}</h3>
                <div className="text-xs font-mono uppercase tracking-wider text-[#777572] mb-3">
                  {phase.subtitle}
                </div>
                <p className="editorial-card-body">{phase.description}</p>
              </div>
              <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#777572]">
                CREOVO Core Process
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
