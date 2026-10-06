import React, { useState, useEffect } from 'react';
import { BRAND } from '../../config/agency';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-creovo-border py-4 shadow-sm'
          : 'bg-transparent border-b border-black/5 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#/"
          className="group flex items-center gap-2 transition-opacity hover:opacity-90"
          aria-label="CREOVO Home"
        >
          <img
            src="/creovo-logo.png"
            alt="CREOVO"
            className="h-6 sm:h-7 w-auto max-w-[125px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 font-mono text-xs uppercase tracking-widest text-creovo-dark">
          {BRAND.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-creovo-muted hover:text-creovo-dark transition-colors duration-200 py-1 font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#/contact"
            className="px-5 py-2.5 text-xs font-mono tracking-widest uppercase bg-creovo-yellow hover:bg-creovo-dark hover:text-white text-creovo-dark border border-creovo-dark transition-all duration-200 flex items-center gap-2 group font-bold shadow-sm"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-creovo-dark p-2 border border-creovo-border focus:border-creovo-dark bg-white"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-white z-40 flex flex-col justify-between p-8 border-t border-creovo-border md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6 pt-4">
            <div className="font-mono text-xs text-creovo-muted tracking-widest uppercase">
              INDEX
            </div>
            <nav className="flex flex-col space-y-4">
              {BRAND.navigation.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-3xl font-bold tracking-tight text-creovo-dark hover:text-creovo-dark transition-colors font-sans flex items-center justify-between border-b border-creovo-border pb-3"
                >
                  <span>0{idx + 1} // {item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-creovo-muted" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 pb-4 space-y-4 border-t border-creovo-border mt-8">
            <a
              href="#/contact"
              onClick={closeMenu}
              className="w-full py-4 text-sm font-mono tracking-widest uppercase bg-creovo-yellow text-creovo-dark text-center font-bold hover:bg-creovo-dark hover:text-white transition-colors flex items-center justify-center gap-2 border border-creovo-dark"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex justify-between items-center text-xs font-mono text-creovo-muted pt-2">
              <span>{BRAND.positioning}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
