import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/services';

export const ServiceAccordion: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveService((current) => (current === id ? null : id));
  };

  return (
    <div className="service-list">
      {SERVICES.map((service) => {
        const isOpen = activeService === service.id;

        return (
          <div
            key={service.id}
            className={[
              'service-item',
              isOpen ? 'service-item--open' : '',
            ].join(' ')}
          >
            <button
              type="button"
              className="service-row"
              onClick={() => toggleService(service.id)}
              aria-expanded={isOpen}
              aria-controls={`service-panel-${service.id}`}
            >
              <div className="service-row__main">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
              </div>

              <div className="service-toggle" aria-hidden="true">
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </div>
            </button>

            <div
              id={`service-panel-${service.id}`}
              className={['service-panel', isOpen ? 'service-panel--open' : ''].join(' ')}
            >
              <div className="service-panel__content">
                <p>{service.description}</p>

                <a href="#/contact" className="service-link">
                  <span>Discuss this service</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <ul className="service-deliverables">
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <span className="service-deliverable-mark">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceAccordion;
