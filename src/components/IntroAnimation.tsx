import React, { useEffect, useState, useCallback, useRef } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const OFFICIAL_SERVICES = [
  { num: '01', title: 'WEBSITE DEVELOPMENT' },
  { num: '02', title: 'UI/UX & DESIGN' },
  { num: '03', title: 'CONTENT CREATION' },
  { num: '04', title: 'SOCIAL MEDIA MANAGEMENT' },
  { num: '05', title: 'SEO' },
  { num: '06', title: 'DIGITAL MANAGEMENT' },
];

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [isFadingOut, setIsFadingOut] = useState(false);
  const completedRef = useRef(false);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Check reduced motion preference
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setIsReducedMotion(media.matches);
    updateMotion();
    media.addEventListener('change', updateMotion);

    // Desktop pointer movement for subtle cinematic depth
    const handlePointerMove = (e: PointerEvent) => {
      // Small parallax: maximum ±8px
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      setPointer({ x, y });
    };

    // Keyboard support: Escape immediately completes intro
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleFinish();
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    // Timeline durations
    // Normal: 2550ms fade start, 2850ms complete
    // Reduced motion: 550ms fade start, 750ms complete
    const isDebugHold = new URLSearchParams(window.location.search).has('intro_hold');
    if (isDebugHold) {
      return () => {
        media.removeEventListener('change', updateMotion);
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    const fadeOutDelay = media.matches ? 550 : 2550;
    const totalDuration = media.matches ? 750 : 2850;

    const fadeTimer = window.setTimeout(() => {
      setIsFadingOut(true);
    }, fadeOutDelay);

    const finishTimer = window.setTimeout(() => {
      handleFinish();
    }, totalDuration);

    return () => {
      media.removeEventListener('change', updateMotion);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(finishTimer);
    };
  }, [handleFinish]);

  // Reduced motion: ultra-clean minimal sequence
  if (isReducedMotion) {
    return (
      <div
        className={`cinematic-intro-root ${isFadingOut ? 'cinematic-intro-fade-out' : ''}`}
        role="presentation"
        aria-label="CREOVO introduction"
      >
        <div className="cinematic-reduced-content">
          <div className="cinematic-wordmark-reduced">
            <img
              src="/creovo-logo-white.png"
              alt="CREOVO"
              className="h-10 sm:h-12 w-auto max-w-[240px] object-contain mx-auto"
            />
          </div>
          <div className="cinematic-tagline-reduced">CREATIVE DIGITAL AGENCY</div>
        </div>
      </div>
    );
  }

  return (
    <aside
      className={`cinematic-intro-root ${isFadingOut ? 'cinematic-intro-fade-out' : ''}`}
      aria-label="CREOVO introduction animation"
      role="presentation"
    >
      {/* 0.00s–0.35s: Restrained background light movement & architectural grid */}
      <div
        className="cinematic-intro-depth"
        style={{
          transform: `translate3d(${pointer.x * 0.4}px, ${pointer.y * 0.4}px, 0)`,
        }}
      >
        <div className="cinematic-ambient-beam" />
        <div className="cinematic-grid-lines" />
        <div className="cinematic-corner-mark cinematic-corner-tl">+</div>
        <div className="cinematic-corner-mark cinematic-corner-tr">+</div>
        <div className="cinematic-corner-mark cinematic-corner-bl">+</div>
        <div className="cinematic-corner-mark cinematic-corner-br">+</div>
      </div>

      {/* 0.85s–1.55s: The 6 Official Services Streams */}
      <div className="cinematic-services-container" aria-hidden="true">
        {/* Stream 1: Left to right */}
        <div className="cinematic-service-stream cinematic-stream-top">
          <div className="cinematic-service-track track-slide-right">
            {OFFICIAL_SERVICES.slice(0, 3).map((svc) => (
              <span key={svc.num} className="cinematic-service-pill">
                <span className="cinematic-pill-num">{svc.num}</span>
                <span className="cinematic-pill-title">{svc.title}</span>
                <span className="cinematic-pill-divider">/</span>
              </span>
            ))}
            {OFFICIAL_SERVICES.slice(0, 3).map((svc) => (
              <span key={`dup-${svc.num}`} className="cinematic-service-pill">
                <span className="cinematic-pill-num">{svc.num}</span>
                <span className="cinematic-pill-title">{svc.title}</span>
                <span className="cinematic-pill-divider">/</span>
              </span>
            ))}
          </div>
        </div>

        {/* Stream 2: Right to left */}
        <div className="cinematic-service-stream cinematic-stream-bottom">
          <div className="cinematic-service-track track-slide-left">
            {OFFICIAL_SERVICES.slice(3, 6).map((svc) => (
              <span key={svc.num} className="cinematic-service-pill">
                <span className="cinematic-pill-num">{svc.num}</span>
                <span className="cinematic-pill-title">{svc.title}</span>
                <span className="cinematic-pill-divider">/</span>
              </span>
            ))}
            {OFFICIAL_SERVICES.slice(3, 6).map((svc) => (
              <span key={`dup-${svc.num}`} className="cinematic-service-pill">
                <span className="cinematic-pill-num">{svc.num}</span>
                <span className="cinematic-pill-title">{svc.title}</span>
                <span className="cinematic-pill-divider">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Centerpiece: Official CREOVO Logo with precise reveal and convergence */}
      <div
        className="cinematic-centerpiece"
        style={{
          transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)`,
        }}
      >
        <div className="cinematic-wordmark-wrapper">
          <img
            src="/creovo-logo-white.png"
            alt="CREOVO"
            className="cinematic-logo-image"
          />
          {/* 2.15s–2.55s: Premium sheen sweep across identity */}
          <div className="cinematic-sheen-line" />
        </div>

        <div className="cinematic-subtitle-wrapper">
          <span className="cinematic-subtitle">CREATIVE DIGITAL AGENCY</span>
          <span className="cinematic-subtitle-bar" />
        </div>
      </div>

      {/* Accessible Skip Button */}
      <button
        type="button"
        className="cinematic-skip-button"
        onClick={handleFinish}
        aria-label="Skip introduction animation"
      >
        <span>SKIP</span>
        <span className="cinematic-skip-key">[ESC]</span>
      </button>
    </aside>
  );
};

export default IntroAnimation;
