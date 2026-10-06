import React from 'react';
import { Mail, MessageSquare, ArrowUpRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { CREOVO_EMAIL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

export const MessagesPage: React.FC = () => {
  return (
    <main className="editorial-body-bg editorial-shell">
      {/* 01 — INQUIRY DESK */}
      <section className="editorial-section">
        <div className="editorial-section-label">01 — DIRECT CHANNELS</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-8">
            <h1 className="editorial-heading">
              Direct project<br />
              communications.
            </h1>
            <p className="editorial-lede">
              All project inquiries, briefs, and consultations go directly to the core CREOVO team with no intermediaries.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 justify-end items-start lg:items-end">
            <a
              href={getMailtoInquiryLink()}
              className="editorial-pill-btn-yellow w-full sm:w-auto text-center"
            >
              <span>Email Business Mail</span>
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={getWhatsAppInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-pill-btn-secondary w-full sm:w-auto text-center"
            >
              <span>WhatsApp Direct Line</span>
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Communication Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Channel 1: Official Email */}
          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">01</span>
                <span className="editorial-badge">
                  <span className="editorial-badge-dot editorial-badge-dot--green" />
                  Primary Inbox
                </span>
              </div>
              <div className="p-3 w-fit rounded-2xl bg-[#F5F4F1] mb-6 text-[#111111]">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="editorial-card-title">Official Email</h2>
              <p className="text-sm font-bold text-[#111111] mb-2 font-mono">
                {CREOVO_EMAIL}
              </p>
              <p className="editorial-card-body">
                Best for detailed project briefs, RFP documentation, scope specifications, and formal inquiries.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E5E3DF] flex items-center justify-between">
              <span className="text-xs text-[#777572]">Within 24 hours</span>
              <a
                href={getMailtoInquiryLink()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#FFD329] transition-colors"
              >
                <span>Compose Mail</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Channel 2: WhatsApp Hotline */}
          <div className="editorial-card editorial-card--featured">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">02</span>
                <span className="editorial-badge">
                  <span className="editorial-badge-dot editorial-badge-dot--green" />
                  Instant Chat
                </span>
              </div>
              <div className="p-3 w-fit rounded-2xl bg-white mb-6 text-[#111111]">
                <MessageSquare className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="editorial-card-title">WhatsApp Fast-Track</h2>
              <p className="text-sm font-bold text-[#111111] mb-2 font-mono">
                Direct WhatsApp Channel
              </p>
              <p className="editorial-card-body">
                Best for quick project consultations, pricing inquiries, scope alignment, and urgent requests.
              </p>
            </div>
            <div className="pt-6 border-t border-[#E5E3DF] flex items-center justify-between">
              <span className="text-xs text-[#777572]">Direct Team Line</span>
              <a
                href={getWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#FFD329] transition-colors"
              >
                <span>Start Chat</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INQUIRY PROCESS */}
      <section className="editorial-section">
        <div className="editorial-section-label">02 — INTAKE PROTOCOL</div>
        <h2 className="editorial-subheading">How We Handle Inquiries</h2>
        <p className="editorial-lede">
          Every inquiry is reviewed directly by our principal developers and designers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">01</span>
                <Clock className="h-5 w-5 text-[#777572]" />
              </div>
              <h3 className="editorial-card-title">Prompt Review</h3>
              <p className="editorial-card-body">
                We review your project goals, technical requirements, and target timeline within 24 hours.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#777572]">
              Phase 01
            </div>
          </div>

          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">02</span>
                <ShieldCheck className="h-5 w-5 text-[#16845F]" />
              </div>
              <h3 className="editorial-card-title">Direct Discussion</h3>
              <p className="editorial-card-body">
                You speak directly with the team members who will actually design and code your project.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#777572]">
              Phase 02
            </div>
          </div>

          <div className="editorial-card">
            <div>
              <div className="editorial-card-top">
                <span className="editorial-card-num">03</span>
                <CheckCircle2 className="h-5 w-5 text-[#FFD329]" />
              </div>
              <h3 className="editorial-card-title">Clear Scope</h3>
              <p className="editorial-card-body">
                We provide an honest assessment of deliverables, pricing, and realistic execution milestones.
              </p>
            </div>
            <div className="pt-4 border-t border-[#E5E3DF] text-xs font-semibold text-[#777572]">
              Phase 03
            </div>
          </div>
        </div>
      </section>

      {/* 03 — INBOX THREADS */}
      <section className="editorial-section">
        <div className="editorial-section-label">03 — INBOX LOG</div>
        <div className="bg-white border border-[#E5E3DF] rounded-[26px] p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="editorial-badge">
            <span className="editorial-badge-dot editorial-badge-dot--green" />
            Live Dispatch Active
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#111111]">
            Direct Inquiries Transmitted to Official Channels
          </h3>
          <p className="text-sm sm:text-base text-[#777572] max-w-md mx-auto leading-relaxed">
            All project communications submitted through the inquiry form or WhatsApp are transmitted directly to CRE.OVO11@GMAIL.COM and our configured WhatsApp line.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a href="#/contact" className="editorial-pill-btn-yellow">
              <span>Open Contact Form</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={getWhatsAppInquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-pill-btn-secondary"
            >
              <span>Chat on WhatsApp</span>
              <MessageSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MessagesPage;
