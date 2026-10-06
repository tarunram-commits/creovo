import React, { useState } from 'react';
import { SERVICES } from '../../data/services';
import {
  Code,
  Layout,
  PenTool,
  Share2,
  Search,
  Settings,
  Plus,
  Minus,
  ArrowUpRight,
  Check,
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'website-development':
        return <Code className="w-5 h-5 text-creovo-dark" />;
      case 'ui-ux-design':
        return <Layout className="w-5 h-5 text-creovo-dark" />;
      case 'content-creation':
        return <PenTool className="w-5 h-5 text-creovo-dark" />;
      case 'social-media-management':
        return <Share2 className="w-5 h-5 text-creovo-dark" />;
      case 'seo':
        return <Search className="w-5 h-5 text-creovo-dark" />;
      case 'digital-management':
        return <Settings className="w-5 h-5 text-creovo-dark" />;
      default:
        return <Code className="w-5 h-5 text-creovo-dark" />;
    }
  };

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="services" className="py-24 md:py-32 border-b border-creovo-border bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b-2 border-creovo-dark gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-creovo-yellow border border-creovo-dark inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-creovo-dark font-bold">
                03 // CORE CAPABILITIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter uppercase font-sans text-creovo-dark">
              WHAT WE DO.
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg text-creovo-muted font-sans font-normal">
            Everything you need to build and maintain your digital presence under one accountable creative partner.
          </p>
        </div>

        {/* Editorial Service Rows */}
        <div className="divide-y divide-creovo-border border-b border-creovo-border">
          {SERVICES.map((service) => {
            const isOpen = activeService === service.id;

            return (
              <div
                key={service.id}
                className={`transition-colors duration-200 ${
                  isOpen ? 'bg-creovo-soft' : 'hover:bg-creovo-soft/60'
                }`}
              >
                {/* Main Accordion Row Button */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full text-left py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 focus:outline-none group px-4 sm:px-6"
                  aria-expanded={isOpen}
                  aria-controls={`service-details-${service.id}`}
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-10">
                    <span className="font-mono text-sm md:text-base font-bold bg-creovo-yellow px-2.5 py-1 border border-creovo-dark text-creovo-dark flex-shrink-0">
                      {service.number}
                    </span>

                    <div className="w-10 h-10 border border-creovo-dark bg-white flex items-center justify-center flex-shrink-0 hidden sm:flex">
                      {getServiceIcon(service.id)}
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase text-creovo-dark group-hover:underline font-sans">
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-creovo-muted mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                    <div className="w-10 h-10 border-2 border-creovo-dark bg-white flex items-center justify-center text-creovo-dark group-hover:bg-creovo-yellow transition-colors flex-shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isOpen && (
                  <div
                    id={`service-details-${service.id}`}
                    className="pb-12 pt-2 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start pl-4 sm:pl-16 md:pl-28 animate-fadeIn"
                  >
                    <div className="md:col-span-6 space-y-5">
                      <p className="text-base sm:text-lg text-creovo-dark font-sans leading-relaxed">
                        {service.description}
                      </p>
                      <div>
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase bg-creovo-dark text-white hover:bg-creovo-yellow hover:text-creovo-dark border border-creovo-dark px-5 py-3 transition-colors group shadow-[3px_3px_0px_0px_#FFD21F]"
                        >
                          <span>DISCUSS THIS SERVICE</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>
                    </div>

                    <div className="md:col-span-6 bg-white p-6 sm:p-8 border-2 border-creovo-dark shadow-[4px_4px_0px_0px_#0A0A0A]">
                      <div className="font-mono text-xs text-creovo-dark uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-creovo-yellow border border-creovo-dark inline-block" />
                        <span>INCLUDED DELIVERABLES &amp; CAPABILITIES</span>
                      </div>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-creovo-dark font-sans font-medium"
                          >
                            <span className="w-4 h-4 bg-creovo-yellow border border-creovo-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-creovo-dark" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
