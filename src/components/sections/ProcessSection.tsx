import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      subtitle: "Strategic Understanding",
      description: "We understand your business, audience and goals to establish a clear digital roadmap.",
      points: ["Business model analysis", "Audience intent mapping", "Architecture roadmap"],
    },
    {
      number: "02",
      title: "BUILD",
      subtitle: "Design & Development",
      description: "We design and develop the right digital experience, pairing custom code with persuasive content.",
      points: ["Modern responsive code", "Clear UX & UI design", "Conversion copywriting"],
    },
    {
      number: "03",
      title: "LAUNCH",
      subtitle: "Deployment & Verification",
      description: "We test, refine and launch your digital presence with complete search optimization and fast loading.",
      points: ["Performance testing", "Search engine setup", "Production deployment"],
    },
    {
      number: "04",
      title: "GROW",
      subtitle: "Stewardship & Expansion",
      description: "We help maintain and improve your presence over time through active updates and digital support.",
      points: ["Routine site updates", "Content refreshes", "Direct WhatsApp priority"],
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 border-b border-creovo-border bg-creovo-soft relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b-2 border-creovo-dark gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-creovo-yellow border border-creovo-dark inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-creovo-dark font-bold">
                04 // METHODOLOGY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase font-sans text-creovo-dark">
              HOW WE WORK.
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-creovo-muted font-sans font-normal">
            A disciplined four-phase progression from initial strategic discovery to long-term digital growth and ongoing maintenance.
          </p>
        </div>

        {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white border-2 border-creovo-dark p-8 flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_#FFD21F] transition-all duration-300 relative group"
            >
              {/* Top Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-creovo-border">
                  <span className="font-mono text-xl font-bold bg-creovo-yellow px-2.5 py-0.5 border border-creovo-dark text-creovo-dark">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-creovo-muted uppercase font-semibold">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <div className="pt-6">
                  <h3 className="text-2xl font-bold tracking-tight uppercase font-sans text-creovo-dark mb-1">
                    {step.title}
                  </h3>
                  <div className="font-mono text-xs text-creovo-muted mb-4 uppercase tracking-wider">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-creovo-dark/85 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Points */}
              <div className="pt-6 mt-6 border-t border-creovo-border">
                <div className="font-mono text-[10px] text-creovo-muted uppercase tracking-widest font-bold mb-3">
                  KEY ACTIONS:
                </div>
                <ul className="space-y-2">
                  {step.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-creovo-dark font-medium">
                      <span className="w-1.5 h-1.5 bg-creovo-dark mt-1.5 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
