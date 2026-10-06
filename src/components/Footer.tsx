import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CREOVO_EMAIL, CREOVO_INSTAGRAM_URL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../config/agency';

const navItems = [
  { label: 'Home', path: '#/' },
  { label: 'About', path: '#/about' },
  { label: 'Services', path: '#/services' },
  { label: 'Dashboard', path: '#/dashboard' },
  { label: 'Contact', path: '#/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-black/10 bg-[#0A0A0A] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src="/creovo-logo-white.png"
              alt="CREOVO"
              className="h-6 w-auto max-w-[130px] object-contain"
            />
          </div>
          <p className="max-w-xs text-sm text-white/70">
            Creative Digital Agency
          </p>
        </div>

        <nav className="space-y-3 text-sm text-white/70">
          {navItems.map((item) => (
            <a key={item.label} href={item.path} className="block transition-colors hover:text-[#FFD21F]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="space-y-4 text-sm text-white/70">
          {CREOVO_INSTAGRAM_URL && (
            <a href={CREOVO_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#FFD21F]">
              <span>Instagram</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}

          <a href={getMailtoInquiryLink()} className="block hover:text-[#FFD21F]">
            {CREOVO_EMAIL}
          </a>

          <a href={getWhatsAppInquiryLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#FFD21F]">
            <span>WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] uppercase tracking-[0.22em] text-white/60 sm:px-8">
        © CREOVO
      </div>
    </footer>
  );
};

export default Footer;
