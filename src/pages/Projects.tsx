import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const ProjectsPage: React.FC = () => {
  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — PROJECT CAPABILITY FRAMEWORKS */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — PROJECT CAPABILITIES</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Digital solutions<br />
              engineered for<br />
              business growth.
            </h1>
            <p className="editorial-lede">
              Explore the core project structures and deliverable frameworks designed, engineered, and managed by CREOVO.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
            <a href="#/contact" className="editorial-pill-btn-yellow w-full sm:w-auto text-center">
              <span>Initiate a Project</span>
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

        {/* 6 Verified Service Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="editorial-card">
              <div>
                <div className="editorial-card-top">
                  <span className="editorial-card-num">{service.number}</span>
                  <span className="editorial-badge">Core Service</span>
                </div>

                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#777572] mb-2 font-mono">
                  {service.tagline}
                </div>

                <h2 className="editorial-card-title">{service.title}</h2>
                <p className="editorial-card-body">{service.description}</p>

                <div className="pt-4 border-t border-[#E5E3DF] space-y-2 mb-6">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-[#777572] font-mono">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#111111]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD329]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E3DF] flex items-center justify-between">
                <a
                  href="#/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#FFD329] transition-colors"
                >
                  <span>Discuss Scope</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href={getMailtoInquiryLink({ projectType: service.title })}
                  className="text-xs text-[#777572] hover:text-[#111111]"
                >
                  Email Inquiry
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — WORKFLOW ENGAGEMENT */}
      <section className="editorial-section">
        <div className="editorial-section-label">02 — ENGAGEMENT</div>
        <h2 className="editorial-subheading">How We Build With You</h2>
        <p className="editorial-lede">
          From the first conversation to long-term digital growth, you collaborate directly with the core team.
        </p>

        <div className="editorial-table-container mt-10">
          <div className="overflow-x-auto">
            <table className="editorial-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Key Focus</th>
                  <th>Core Deliverable</th>
                  <th>Direct Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="font-bold text-[#111111]">01 // DISCOVER</div>
                  </td>
                  <td className="text-xs text-[#777572]">
                    Business model analysis &amp; audience intent mapping
                  </td>
                  <td className="text-sm font-medium text-[#111111]">Project Scope &amp; Architecture Roadmap</td>
                  <td>
                    <a
                      href="#/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#FFD329]"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-bold text-[#111111]">02 // BUILD</div>
                  </td>
                  <td className="text-xs text-[#777572]">
                    Custom code, interface design &amp; persuasive copy
                  </td>
                  <td className="text-sm font-medium text-[#111111]">Responsive Website &amp; Design System</td>
                  <td>
                    <a
                      href="#/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#FFD329]"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-bold text-[#111111]">03 // LAUNCH</div>
                  </td>
                  <td className="text-xs text-[#777572]">
                    Performance tuning, search indexation &amp; live deployment
                  </td>
                  <td className="text-sm font-medium text-[#111111]">Production Verification &amp; SEO Setup</td>
                  <td>
                    <a
                      href="#/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#FFD329]"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-bold text-[#111111]">04 // GROW</div>
                  </td>
                  <td className="text-xs text-[#777572]">
                    Continuous maintenance, SEO tuning &amp; social management
                  </td>
                  <td className="text-sm font-medium text-[#111111]">Ongoing Digital Care &amp; Support</td>
                  <td>
                    <a
                      href={getWhatsAppInquiryLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#FFD329]"
                    >
                      <span>WhatsApp</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 03 — ACTIVE WORKSPACE PROJECTS */}
      <section className="editorial-section">
        <div className="editorial-section-label">03 — CLIENT WORKSPACE</div>
        <div className="bg-white border border-[#E5E3DF] rounded-[26px] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-badge">
            <span className="editorial-badge-dot editorial-badge-dot--muted" />
            Workspace Status
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
            No Active Projects Yet
          </h3>
          <p className="text-sm sm:text-base text-[#777572] max-w-md mx-auto leading-relaxed">
            Projects managed through the CREOVO workspace will appear here once initiated.
          </p>
          <div className="pt-4">
            <a href="#/contact" className="editorial-pill-btn-yellow">
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
