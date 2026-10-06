import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CREOVO_EMAIL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => (
  <main className="editorial-body-bg editorial-shell">
    <section className="editorial-section">
      <div className="editorial-section-label">01 — CONTACT DESK</div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
        <div className="lg:col-span-5 space-y-6">
          <h1 className="editorial-heading">
            Let’s build<br />
            something.
          </h1>
          <p className="editorial-lede">
            Tell us about your business, your idea, and what you need help with. We review every inquiry directly.
          </p>

          <div className="p-6 bg-white border border-[#E5E3DF] rounded-2xl space-y-4">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#777572]">
              Direct Inquiries
            </div>
            <div>
              <a
                href={getMailtoInquiryLink()}
                className="text-sm font-bold text-[#111111] hover:underline flex items-center gap-1.5"
              >
                <span>{CREOVO_EMAIL}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="pt-2 border-t border-[#E5E3DF]">
              <a
                href={getWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#111111] hover:text-emerald-700 flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-emerald-600" />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white border border-[#E5E3DF] rounded-[26px] p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
          <ContactForm />
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
