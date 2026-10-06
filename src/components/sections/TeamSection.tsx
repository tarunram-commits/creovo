import React from 'react';
import { CREOVO_TEAM } from '../../config/agency';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 border-b border-creovo-border bg-creovo-soft relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b-2 border-creovo-dark gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-creovo-yellow border border-creovo-dark inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-creovo-dark font-bold">
                06 // THE CREATIVE ROSTER
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase font-sans text-creovo-dark">
              THE PEOPLE BEHIND CREOVO.
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-creovo-muted font-sans font-normal">
            The core engineers, designers, and strategists actively building and managing your digital touchpoints.
          </p>
        </div>

        {/* Typographic Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {CREOVO_TEAM.map((member, idx) => (
            <div
              key={member.id}
              className="bg-white border-2 border-creovo-dark p-8 flex flex-col justify-between hover:shadow-[6px_6px_0px_0px_#FFD21F] hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top: Initials Badge & Index */}
              <div>
                <div className="flex items-center justify-between pb-8 border-b border-creovo-border">
                  <div className="w-14 h-14 bg-creovo-dark text-white group-hover:bg-creovo-yellow group-hover:text-creovo-dark transition-colors border border-creovo-dark flex items-center justify-center font-mono text-xl font-bold">
                    {member.initials}
                  </div>
                  <span className="font-mono text-xs text-creovo-muted font-bold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Member Name */}
                <div className="pt-6">
                  <h3 className="text-2xl font-bold tracking-tight uppercase font-sans text-creovo-dark mb-4">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Roles / Pillars */}
              <div className="pt-6 border-t border-creovo-border mt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-creovo-muted font-bold mb-3">
                  DISCIPLINES:
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {member.rolePillars.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className="px-2.5 py-1 bg-creovo-soft border border-creovo-border text-creovo-dark uppercase font-semibold text-[11px]"
                    >
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agency guarantee footer */}
        <div className="mt-12 p-6 bg-white border-2 border-creovo-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <span className="text-creovo-dark font-bold">
            YOU WORK DIRECTLY WITH THIS TEAM ON EVERY STAGE OF YOUR PROJECT.
          </span>
          <span className="text-creovo-muted">
            NO OUTSOURCING · NO ANONYMOUS CONTRACTORS
          </span>
        </div>
      </div>
    </section>
  );
};
