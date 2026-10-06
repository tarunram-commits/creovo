import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Layers, Users, Mail, MessageSquare } from 'lucide-react';
import { CREOVO_EMAIL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const DashboardPage: React.FC = () => {
  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — STUDIO OVERVIEW */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — STUDIO OVERVIEW</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Your digital presence,<br />
              built and managed.
            </h1>
            <p className="editorial-lede">
              CREOVO brings website development, design, content, social media, SEO, and ongoing digital management together under one dedicated creative partner.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#/services" className="editorial-pill-btn-primary">
                <span>View All Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#/contact" className="editorial-pill-btn-yellow">
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
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
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-4 w-4 text-[#16845F] mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#111111]">Direct Collaboration</div>
                  <div className="text-xs text-[#777572]">Work directly with core developers and designers</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-4 w-4 text-[#FFD329] mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-[#111111]">Integrated Services</div>
                  <div className="text-xs text-[#777572]">6 core creative capabilities under one roof</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workspace Quick Actions & Hubs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-[#E5E3DF]">
          <a
            href="#/projects"
            className="p-5 bg-white border border-[#E5E3DF] rounded-2xl flex items-center justify-between hover:border-[#111111] hover:bg-[#F5F4F1] transition-all group"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#777572]">
                Workspace // 01
              </span>
              <div className="text-base font-bold text-[#111111] mt-1 group-hover:text-[#111111]">
                Projects
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#777572] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#/messages"
            className="p-5 bg-white border border-[#E5E3DF] rounded-2xl flex items-center justify-between hover:border-[#111111] hover:bg-[#F5F4F1] transition-all group"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#777572]">
                Workspace // 02
              </span>
              <div className="text-base font-bold text-[#111111] mt-1 group-hover:text-[#111111]">
                Messages &amp; Inquiries
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#777572] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#/analytics"
            className="p-5 bg-white border border-[#E5E3DF] rounded-2xl flex items-center justify-between hover:border-[#111111] hover:bg-[#F5F4F1] transition-all group"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#777572]">
                Workspace // 03
              </span>
              <div className="text-base font-bold text-[#111111] mt-1 group-hover:text-[#111111]">
                Technical Standards
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#777572] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#/services"
            className="p-5 bg-white border border-[#E5E3DF] rounded-2xl flex items-center justify-between hover:border-[#111111] hover:bg-[#F5F4F1] transition-all group"
          >
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#777572]">
                Workspace // 04
              </span>
              <div className="text-base font-bold text-[#111111] mt-1 group-hover:text-[#111111]">
                Services Catalog
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-[#777572] group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* 02 — LIVE WORKSPACE ACTIVITY */}
      <section className="editorial-section">
        <div className="editorial-section-label">02 — WORKSPACE ACTIVITY</div>
        <div className="bg-white border border-[#E5E3DF] rounded-[26px] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-badge">
            <span className="editorial-badge-dot editorial-badge-dot--muted" />
            Activity Log
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
            No Active Projects in Queue
          </h2>
          <p className="text-sm sm:text-base text-[#777572] max-w-md mx-auto leading-relaxed">
            Your project activity, deliverables, and production milestones will appear here once projects are initiated.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a href="#/contact" className="editorial-pill-btn-yellow">
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#/projects" className="editorial-pill-btn-secondary">
              <span>View Capability Frameworks</span>
            </a>
          </div>
        </div>
      </section>

      {/* 03 — STUDIO CAPABILITY HUBS */}
      <section className="editorial-section">
        <div className="editorial-section-label">03 — DIRECTORY</div>
        <h2 className="editorial-subheading">Explore Studio Capabilities</h2>
        <p className="editorial-lede">
          Direct navigation to our integrated services, agency philosophy, team roster, and project inquiry desk.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <a href="#/services" className="editorial-card group">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">01</span>
                <ArrowUpRight className="editorial-card-arrow h-5 w-5" />
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="editorial-card-title">Services</h3>
              <p className="editorial-card-body">
                6 integrated digital capabilities tailored for modern business growth.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#111111] flex items-center justify-between">
              <span>View Services</span>
              <span>→</span>
            </div>
          </a>

          <a href="#/about" className="editorial-card group">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">02</span>
                <ArrowUpRight className="editorial-card-arrow h-5 w-5" />
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="editorial-card-title">The Team</h3>
              <p className="editorial-card-body">
                The core developers, designers, and strategists behind CREOVO.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#111111] flex items-center justify-between">
              <span>About CREOVO</span>
              <span>→</span>
            </div>
          </a>

          <a href="#/contact" className="editorial-card group">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">03</span>
                <ArrowUpRight className="editorial-card-arrow h-5 w-5" />
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="editorial-card-title">Project Inquiry</h3>
              <p className="editorial-card-body">
                Submit your project details directly to {CREOVO_EMAIL}.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#111111] flex items-center justify-between">
              <span>Contact Desk</span>
              <span>→</span>
            </div>
          </a>

          <a
            href={getWhatsAppInquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card group"
          >
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">04</span>
                <ArrowUpRight className="editorial-card-arrow h-5 w-5" />
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="editorial-card-title">WhatsApp</h3>
              <p className="editorial-card-body">
                Direct instant chat for quick project discussions.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#111111] flex items-center justify-between">
              <span>Chat Now</span>
              <span>→</span>
            </div>
          </a>
        </div>
      </section>

      {/* 04 — DIRECT CONTACT ACTION */}
      <section className="editorial-section">
        <div className="editorial-section-label">04 — ENGAGEMENT</div>
        <div className="p-8 sm:p-12 bg-white border border-[#E5E3DF] rounded-[26px] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#777572] mb-2 font-bold">
              Ready to build?
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
              Let’s discuss your project.
            </h3>
            <p className="text-sm text-[#777572] mt-1 max-w-md">
              Send your requirements through our contact desk or start a conversation on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#/contact" className="editorial-pill-btn-yellow">
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={getMailtoInquiryLink()} className="editorial-pill-btn-secondary">
              <span>Email Us</span>
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardPage;
