import React, { useEffect, useMemo, useState } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navigation } from './components/Navigation';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';
import { DashboardPage } from './pages/Dashboard';
import { ProjectsPage } from './pages/Projects';
import { MessagesPage } from './pages/Messages';
import { AnalyticsPage } from './pages/Analytics';

const getCurrentHashPath = () => {
  const hash = window.location.hash || '#/';
  if (hash.startsWith('#/')) {
    return hash.slice(1) || '/';
  }

  return '/';
};

const routes: Record<string, React.ComponentType> = {
  '/': HomePage,
  '/dashboard': DashboardPage,
  '/projects': ProjectsPage,
  '/services': ServicesPage,
  '/messages': MessagesPage,
  '/analytics': AnalyticsPage,
  '/about': AboutPage,
  '/contact': ContactPage,
};

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => getCurrentHashPath());
  const [isIntroVisible, setIsIntroVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('intro_replay') || searchParams.has('intro_hold')) return true;
    return !window.sessionStorage.getItem('creovo-intro-seen');
  });
  const [cursor, setCursor] = useState({ x: 0, y: 0, hover: false });

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(getCurrentHashPath());
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isIntroVisible) {
      window.sessionStorage.setItem('creovo-intro-seen', 'true');
    }
  }, [isIntroVisible]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY }));
    };

    const handleHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target && target.closest('a, button, input, textarea, select');
      setCursor((current) => ({ ...current, hover: Boolean(interactive) }));
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('mouseover', handleHoverState);
    window.addEventListener('mouseout', handleHoverState);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseover', handleHoverState);
      window.removeEventListener('mouseout', handleHoverState);
    };
  }, []);

  const ActivePage = useMemo(() => routes[currentPath] ?? HomePage, [currentPath]);

  return (
    <div className="app-shell">
      <div
        className={['custom-cursor', cursor.hover ? 'custom-cursor--active' : ''].join(' ')}
        aria-hidden="true"
        style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}
      />

      {isIntroVisible && <IntroAnimation onComplete={() => setIsIntroVisible(false)} />}

      <Navigation currentPath={currentPath} />

      <div className="page-transition">
        <ActivePage />
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
