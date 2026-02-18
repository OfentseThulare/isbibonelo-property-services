
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { SERVICES, PORTFOLIO } from '../constants';
import { trackEvent } from '../services/analytics';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'A' | 'B'>('A');
  const [filter, setFilter] = useState('All');

  const filteredServices = SERVICES.filter(s => s.category === activeTab);

  const allTags = ['All', ...Array.from(new Set(PORTFOLIO.flatMap(p => p.tags)))];
  const filteredPortfolio = filter === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.tags.includes(filter));

  return (
    <div className="animate-fadeIn">

      {/* ── HEADER ── */}
      <section className="relative bg-ink-900 py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=1600&q=80"
          alt="Property services"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">[OUR SERVICES]</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Strategic Property Solutions</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Expertise spanning the entire property lifecycle, from mandate to management.
          </p>
        </div>
      </section>

      {/* ── SERVICE TABS ── */}
      <section className="py-16 bg-surface-50 border-b border-border-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab switcher */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveTab('A')}
              className={`px-8 py-4 rounded-card font-bold transition-all text-sm ${activeTab === 'A' ? 'bg-ink-900 text-white shadow-lg' : 'bg-white text-ink-900 border border-border-200 hover:border-ink-900/20'}`}
            >
              Owners & Partners
            </button>
            <button
              onClick={() => setActiveTab('B')}
              className={`px-8 py-4 rounded-card font-bold transition-all text-sm ${activeTab === 'B' ? 'bg-ink-900 text-white shadow-lg' : 'bg-white text-ink-900 border border-border-200 hover:border-ink-900/20'}`}
            >
              Leasing & Brokers
            </button>
          </div>

          {/* Service cards */}
          <div className="space-y-6">
            {filteredServices.map((service, idx) => (
              <div key={service.id} className="bg-white rounded-card border border-border-200 overflow-hidden hover:shadow-md transition-all">
                <div className="flex flex-col lg:flex-row">
                  {/* Content */}
                  <div className="lg:w-3/5 p-8 md:p-12">
                    <span className="font-mono text-[10px] tracking-widest text-brand-600 uppercase block mb-2">Service Excellence · 0{idx + 1}</span>
                    <h3 className="text-3xl font-heading font-bold text-ink-900 mb-4">{service.title}</h3>
                    <p className="text-ink-700 mb-8 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-700/50 mb-4">Typical Outcomes</h4>
                        <ul className="space-y-2">
                          {service.outcomes.map(o => (
                            <li key={o} className="flex gap-2 items-start text-sm text-ink-700">
                              <span className="text-success-600 font-bold mt-0.5">↑</span> {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-700/50 mb-4">Deliverables</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map(d => (
                            <li key={d} className="flex gap-2 items-start text-sm text-ink-700">
                              <span className="text-brand-600 font-bold">✓</span> {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button>{activeTab === 'A' ? 'Request Mandate' : 'Enquire About Space'}</Button>
                    </Link>
                  </div>
                  {/* Image */}
                  <div className="lg:w-2/5 bg-surface-50 min-h-[280px] overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${['1486325212027-8081e485255e', '1497366754035-f200968a6e72', '1486406146926-c627a92ad1ab', '1541888946425-d81bb19240f5', '1472099645785-5658abf4ff4e'][idx % 5]}?auto=format&w=600&h=400&fit=crop&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">[PORTFOLIO]</p>
            <h2 className="text-4xl font-heading font-bold text-ink-900 mb-3">Our Portfolio & Developments</h2>
            <p className="text-ink-700 mb-8 max-w-xl mx-auto">
              A look at some of the landmark projects we have managed and developed across South Africa.
            </p>
            {/* Filter pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-4 py-2 rounded-pill text-xs font-medium transition-all font-mono tracking-wide ${filter === tag ? 'bg-ink-900 text-white' : 'bg-surface-50 text-ink-700 border border-border-200 hover:border-ink-900/20'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map(item => (
              <div key={item.id} className="group border border-border-200 rounded-card overflow-hidden bg-surface-50 hover:shadow-lg transition-all">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {item.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-600">{tag}</span>
                    ))}
                  </div>
                  <h4 className="font-bold font-heading text-ink-900 text-lg mb-1">{item.title}</h4>
                  <p className="text-xs text-ink-700/60 mb-3 font-mono uppercase tracking-wide">{item.location}</p>
                  <p className="text-sm text-ink-700 mb-5 leading-relaxed line-clamp-3">{item.description}</p>
                  <Button variant="outline" size="sm" fullWidth disabled title="Brochure available on request">
                    Download Brochure
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-brand-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/60 uppercase mb-4">[GET MATCHED]</p>
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Need a tailored solution?</h2>
          <p className="text-xl mb-10 text-white/80 leading-relaxed">
            Use our Fit Finder to see which of our services matches your asset requirements.
          </p>
          <Link to="/">
            <Button variant="secondary" size="lg">Take the Fit Finder Quiz</Button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
