import React from 'react';
import { ArrowDown, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BRAND, getWhatsAppInquiryLink } from '../../config/agency';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-between border-b border-creovo-border bg-white overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 architectural-grid-bg opacity-70 pointer-events-none" />

      {/* Decorative Signature Yellow Accent Block */}
      <div className="absolute top-28 right-8 md:right-16 w-32 md:w-64 h-8 bg-creovo-yellow border border-creovo-dark -rotate-1 pointer-events-none hidden sm:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Eyebrow & Agency Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 pb-8 border-b border-creovo-border">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-creovo-yellow border border-creovo-dark inline-block" />
            <span className="font-mono text-xs uppercase tracking-widest text-creovo-dark font-bold">
              {BRAND.eyebrow}
            </span>
          </div>

          <div className="font-mono text-xs text-creovo-muted flex items-center gap-2">
            <span className="px-2 py-0.5 bg-creovo-soft border border-creovo-border text-creovo-dark">
              01 // OVERVIEW
            </span>
            <span className="text-creovo-dark font-medium">WEBSITES · DESIGN · CONTENT · SOCIAL · SEO</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="py-12 md:py-16">
          <div className="inline-block px-3 py-1 bg-creovo-yellow border border-creovo-dark font-mono text-[11px] font-bold uppercase tracking-widest text-creovo-dark mb-6">
            DIGITAL GROWTH &amp; MEDIA
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.94] text-creovo-dark font-sans">
            YOUR DIGITAL PRESENCE, <br />
            <span className="relative inline-block">
              <span className="relative z-10">BUILT &amp; MANAGED.</span>
              <span className="absolute bottom-1 left-0 right-0 h-4 sm:h-6 md:h-8 bg-creovo-yellow -z-0 opacity-90" />
            </span>
          </h1>

          {/* Supporting Text & CTAs */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <p className="text-lg sm:text-xl md:text-2xl text-creovo-dark/85 font-sans font-normal leading-relaxed">
                {BRAND.subheadline}
              </p>
            </div>

            {/* CTAs */}
            <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 pt-1">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-creovo-yellow hover:bg-creovo-dark hover:text-white text-creovo-dark border-2 border-creovo-dark font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2 group shadow-[4px_4px_0px_0px_#0A0A0A]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={getWhatsAppInquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-creovo-soft text-creovo-dark border-2 border-creovo-dark font-mono text-xs uppercase tracking-widest font-bold transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </div>

        {/* Editorial architectural composition footer in Hero */}
        <div className="pt-8 border-t border-creovo-border">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4">
            {[
              { num: "01", name: "WEBSITE DEV", role: "Custom & Responsive" },
              { num: "02", name: "UI/UX & DESIGN", role: "Clear Interfaces" },
              { num: "03", name: "CONTENT", role: "Persuasive Copy" },
              { num: "04", name: "SOCIAL MEDIA", role: "Curated Presence" },
              { num: "05", name: "SEO & MGMT", role: "Search & Care" },
            ].map((col) => (
              <div
                key={col.num}
                className="border-l-2 border-creovo-dark pl-4 py-1 hover:border-creovo-yellow transition-colors group"
              >
                <div className="font-mono text-xs font-bold text-creovo-dark group-hover:text-creovo-muted transition-colors">
                  {col.num} // {col.name}
                </div>
                <div className="text-xs text-creovo-muted font-sans mt-0.5">
                  {col.role}
                </div>
              </div>
            ))}
          </div>

          {/* Quick anchor scroll */}
          <div className="hidden sm:flex justify-between items-center pt-6 text-creovo-muted font-mono text-xs">
            <span>EXPLORE CREOVO</span>
            <a
              href="#about"
              className="flex items-center gap-2 text-creovo-dark hover:text-creovo-muted transition-colors font-bold"
              aria-label="Scroll to About section"
            >
              <span>[01 / 07]</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
