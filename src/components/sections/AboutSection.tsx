import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "BUILD WELL",
      description: "Create useful, modern digital experiences built on clean code and reliable infrastructure.",
    },
    {
      number: "02",
      title: "COMMUNICATE CLEARLY",
      description: "Make brands easier to understand and remember through sharp, human, and confident communication.",
    },
    {
      number: "03",
      title: "KEEP IT ACTIVE",
      description: "Keep websites and social channels consistently updated so your business never looks abandoned.",
    },
    {
      number: "04",
      title: "KEEP IT GROWING",
      description: "Improve the digital presence over time with search optimization, content refinements, and ongoing care.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-creovo-border bg-creovo-soft relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-8 border-b border-creovo-border font-mono text-xs text-creovo-muted tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-creovo-yellow border border-creovo-dark inline-block" />
            <span className="text-creovo-dark font-bold">02 // ABOUT CREOVO</span>
          </div>
          <span>AGENCY PROFILE</span>
        </div>

        {/* Content Layout */}
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Accent */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 bg-creovo-yellow border border-creovo-dark font-mono text-[11px] font-bold uppercase tracking-widest text-creovo-dark">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase font-sans text-creovo-dark leading-[1.05]">
              WE HELP BUSINESSES BUILD THEIR DIGITAL PRESENCE.
            </h2>
            <div className="w-16 h-2 bg-creovo-yellow border border-creovo-dark" />
          </div>

          {/* Right Column: Narrative & 4 Principles */}
          <div className="lg:col-span-7 space-y-8 font-sans">
            <p className="text-xl sm:text-2xl text-creovo-dark font-normal leading-relaxed">
              CREOVO is a digital media agency focused on helping businesses create a stronger and more consistent presence online.
            </p>

            <p className="text-base sm:text-lg text-creovo-muted font-normal leading-relaxed">
              We bring website development, design, content, social media, SEO and ongoing digital management together so businesses can build and maintain their digital presence through one creative team.
            </p>

            {/* The 4 Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-creovo-border">
              {principles.map((p) => (
                <div
                  key={p.number}
                  className="border-2 border-creovo-dark bg-white p-6 hover:shadow-[4px_4px_0px_0px_#0A0A0A] transition-all duration-200 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-creovo-dark bg-creovo-yellow px-2 py-0.5 font-bold border border-creovo-dark">
                      {p.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-creovo-dark uppercase font-sans mb-2 group-hover:text-creovo-dark">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-creovo-muted leading-relaxed font-sans">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between font-mono text-xs text-creovo-dark border-t border-creovo-border">
              <span>ONE CREATIVE TEAM · COMPLETE RESPONSIBILITY</span>
              <a href="#services" className="hover:underline font-bold flex items-center gap-1">
                <span>VIEW SERVICES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
