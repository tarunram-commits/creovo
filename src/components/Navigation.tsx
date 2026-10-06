import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CREOVO_INSTAGRAM_URL } from '../config/agency';

interface NavigationProps {
  currentPath: string;
}

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Contact', path: '/contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentPath }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
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

  return (
    <header className="floating-nav-container" role="banner">
      <nav className="floating-nav-pill" aria-label="Main Navigation">
        {/* Brand identity */}
        <a href="#/" className="floating-nav-brand inline-flex items-center" aria-label="Go to CREOVO home">
          <img
            src="/creovo-logo.png"
            alt="CREOVO"
            className="h-5 sm:h-6 w-auto max-w-[115px] object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="floating-nav-menu" role="menubar">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={`#${item.path}`}
                role="menuitem"
                className={`floating-nav-item ${isActive ? 'floating-nav-item--active' : ''}`}
              >
                {isActive && <span className="floating-nav-active-dot" aria-hidden="true" />}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a href="#/contact" className="floating-nav-cta">
            <span>Start a Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-full border border-[#E5E3DF] bg-white text-[#111111] md:hidden hover:bg-[#F5F4F1] transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[76px] z-50 bg-[#FCFBF9] px-6 py-8 flex flex-col justify-between border-t border-[#E5E3DF] md:hidden overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-[#E5E3DF]">
              <img
                src="/creovo-logo.png"
                alt="CREOVO"
                className="h-6 w-auto max-w-[120px] object-contain"
              />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#777572]">
                INDEX
              </span>
            </div>

            <nav className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = currentPath === item.path;
                return (
                  <a
                    key={item.path}
                    href={`#${item.path}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 border-b border-[#E5E3DF] text-xl font-bold font-sans transition-colors ${
                      isActive ? 'text-[#111111]' : 'text-[#777572]'
                    }`}
                  >
                    <span>
                      {String(index + 1).padStart(2, '0')} // {item.label}
                    </span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-[#FFD329]" />}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 space-y-4">
            <a
              href="#/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="editorial-pill-btn-yellow w-full justify-center text-sm font-semibold"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {CREOVO_INSTAGRAM_URL && (
              <a
                href={CREOVO_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs font-mono font-semibold text-[#777572] hover:text-[#111111] transition-colors py-2"
              >
                <span>Instagram Profile</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
