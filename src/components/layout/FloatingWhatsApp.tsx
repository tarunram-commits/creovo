import React from 'react';
import { getWhatsAppInquiryLink } from '../../config/agency';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={getWhatsAppInquiryLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly with CREOVO on WhatsApp"
        className="flex items-center gap-2.5 bg-creovo-dark text-white hover:bg-creovo-yellow hover:text-creovo-dark border-2 border-creovo-dark px-4 py-3 shadow-xl transition-all duration-300 font-mono text-xs uppercase tracking-wider font-bold rounded-none"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
        <MessageSquare className="w-4 h-4 flex-shrink-0" />
        <span className="hidden sm:inline">CHAT ON WHATSAPP</span>
      </a>
    </aside>
  );
};
