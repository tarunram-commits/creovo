import React from 'react';
import { BRAND, CREOVO_EMAIL, CREOVO_INSTAGRAM_URL, getWhatsAppInquiryLink, getMailtoInquiryLink } from '../../config/agency';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-creovo-dark text-white pt-20 pb-12 border-t-2 border-creovo-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/creovo-logo-white.png"
                alt="CREOVO"
                className="h-8 w-auto max-w-[150px] object-contain"
              />
            </div>
            <div className="font-mono text-xs text-creovo-yellow font-bold uppercase tracking-wider">
              {BRAND.headline}
            </div>
            <p className="text-neutral-400 text-sm max-w-sm font-sans leading-relaxed">
              CREOVO is a digital media agency focused on helping ambitious businesses build, manage, and scale their complete digital presence.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-creovo-yellow font-bold mb-4">
              NAVIGATION
            </div>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-wider">
              <li>
                <a href="#/" className="text-neutral-300 hover:text-creovo-yellow transition-colors">
                  01 // HOME
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-300 hover:text-creovo-yellow transition-colors">
                  02 // ABOUT
                </a>
              </li>
              <li>
                <a href="#services" className="text-neutral-300 hover:text-creovo-yellow transition-colors">
                  03 // SERVICES
                </a>
              </li>
              <li>
                <a href="#process" className="text-neutral-300 hover:text-creovo-yellow transition-colors">
                  04 // PROCESS
                </a>
              </li>
              <li>
                <a href="#team" className="text-neutral-300 hover:text-creovo-yellow transition-colors">
                  05 // TEAM
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-creovo-yellow transition-colors">
                  06 // CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-creovo-yellow font-bold mb-4">
              SERVICES
            </div>
            <ul className="space-y-2 font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
              <li>Website Development</li>
              <li>UI/UX &amp; Design</li>
              <li>Content Creation</li>
              <li>Social Media</li>
              <li>SEO</li>
              <li>Digital Management</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="md:col-span-2 space-y-3">
            <div className="font-mono text-xs uppercase tracking-widest text-creovo-yellow font-bold mb-4">
              CHANNELS
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div>
                <span className="text-neutral-400 block text-[10px] mb-1">EMAIL</span>
                <a
                  href={getMailtoInquiryLink()}
                  className="text-white hover:text-creovo-yellow transition-colors flex items-center gap-1 group"
                >
                  <span className="truncate">{CREOVO_EMAIL}</span>
                  <ArrowUpRight className="w-3 h-3 text-creovo-yellow flex-shrink-0" />
                </a>
              </div>

              <div>
                <span className="text-neutral-400 block text-[10px] mb-1">DIRECT CHAT</span>
                <a
                  href={getWhatsAppInquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-creovo-yellow transition-colors flex items-center gap-1 group"
                >
                  <span>WhatsApp Creovo</span>
                  <ArrowUpRight className="w-3 h-3 text-creovo-yellow flex-shrink-0" />
                </a>
              </div>

              {CREOVO_INSTAGRAM_URL && (
                <div>
                  <span className="text-neutral-400 block text-[10px] mb-1">SOCIAL</span>
                  <a
                    href={CREOVO_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-creovo-yellow transition-colors flex items-center gap-1 group"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3 text-creovo-yellow flex-shrink-0" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-400">
          <div>
            &copy; 2026 CREOVO. All rights reserved.
          </div>
          <div className="text-creovo-yellow font-bold">
            ONE TEAM · ONE DIGITAL PRESENCE
          </div>
        </div>
      </div>
    </footer>
  );
};
