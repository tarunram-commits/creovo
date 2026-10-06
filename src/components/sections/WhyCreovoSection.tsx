import React from 'react';
import { ArrowRight } from 'lucide-react';

export const WhyCreovoSection: React.FC = () => {
  const pillars = [
    {
      title: "BUILD WELL",
      text: "Engineered from scratch for speed, accessibility, and high performance. No sluggish templates or abandoned code.",
    },
    {
      title: "COMMUNICATE CLEARLY",
      text: "Persuasive messaging that speaks directly to your customers' problems and articulates your true value.",
    },
    {
      title: "KEEP IT ACTIVE",
      text: "Consistent social media assets, fresh announcements, and continuous design updates so you always stay relevant.",
    },
    {
      title: "KEEP IT GROWING",
      text: "Disciplined search engine optimization and continuous presence management that compounds over time.",
    },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-creovo-border bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b-2 border-creovo-dark gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-creovo-yellow border border-creovo-dark inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-creovo-dark font-bold">
                05 // THE CREOVO ADVANTAGE
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase font-sans text-creovo-dark leading-[0.95]">
              ONE TEAM. <br />
              <span className="bg-creovo-yellow px-2 border border-creovo-dark inline-block mt-2">
                ONE DIGITAL PRESENCE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-creovo-muted font-sans font-normal">
            Instead of managing separate people for websites, content, social media and digital growth, CREOVO brings these services together through one dedicated creative team.
          </p>
        </div>

        {/* Comparison System Box */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Fragmented Vendors (Traditional) */}
          <div className="lg:col-span-5 border-2 border-creovo-border bg-creovo-soft p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs font-bold text-creovo-muted uppercase tracking-widest mb-3">
                THE COMMON WAY
              </div>
              <h3 className="text-2xl font-bold uppercase font-sans text-creovo-dark mb-4">
                Fragmented Vendors
              </h3>
              <p className="text-sm text-creovo-muted font-sans leading-relaxed mb-6">
                You hire a freelancer for a website, an agency for SEO, a part-time creator for social media, and write copy yourself. Nobody takes end-to-end responsibility.
              </p>
            </div>

            <ul className="space-y-3 font-mono text-xs text-creovo-muted border-t border-creovo-border pt-6">
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Inconsistent brand messaging</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Unmaintained websites after launch</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Vendor finger-pointing</span>
              </li>
            </ul>
          </div>

          {/* CREOVO System */}
          <div className="lg:col-span-7 border-2 border-creovo-dark bg-white p-8 sm:p-10 shadow-[6px_6px_0px_0px_#0A0A0A] flex flex-col justify-between relative">
            <div className="absolute top-4 right-4 bg-creovo-yellow border border-creovo-dark px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest">
              THE CREOVO WAY
            </div>

            <div>
              <div className="font-mono text-xs font-bold text-creovo-dark uppercase tracking-widest mb-3">
                INTEGRATED DIGITAL PARTNERSHIP
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase font-sans text-creovo-dark mb-4">
                Unified Creative Direction
              </h3>
              <p className="text-base text-creovo-dark/85 font-sans leading-relaxed mb-8">
                Your website, visual design, social media strategy, written copy, and search visibility work together seamlessly as one unified asset.
              </p>

              {/* 4 Pillars in 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((item) => (
                  <div key={item.title} className="p-4 bg-creovo-soft border border-creovo-dark">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 bg-creovo-yellow border border-creovo-dark inline-block" />
                      <h4 className="font-bold text-xs uppercase font-sans text-creovo-dark">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-creovo-muted font-sans leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-creovo-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <span className="font-bold text-creovo-dark">
                DIRECT ACCESS TO CREATORS · NO LAYERS OF RED TAPE
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-bold text-creovo-dark hover:underline"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
