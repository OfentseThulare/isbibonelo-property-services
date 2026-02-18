
import React from 'react';
import { Button } from '../components/ui/Button';
import { FOUNDED_YEAR } from '../constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">

      {/* ── PAGE HEADER ── Full-bleed hero */}
      <section className="relative bg-ink-900 py-24 sm:py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=1600&q=80"
          alt="Isibonelo office"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">[ABOUT US]</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-4">Our Indelible Fingerprint</h1>
          <p className="text-white/60 max-w-2xl text-base sm:text-lg leading-relaxed">
            Founded in {FOUNDED_YEAR}, Isibonelo has grown from a vision into a leader of South African property solutions.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16 sm:py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-card overflow-hidden shadow-2xl aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=800&h=800&fit=crop&q=80"
                  alt="Isibonelo development project"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-4">[OUR STORY]</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">Built on Trust and Partnership</h2>
              <div className="space-y-4 sm:space-y-5 text-ink-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Isibonelo Property Services was established in 1999 with a specific focus on the Pretoria region. Our journey began with a simple philosophy: to leave a lasting, positive impact on every project we touch.
                </p>
                <p>
                  Over two decades later, we have solidified our reputation as a key partner for government agencies, traditional leadership structures, and private stakeholders. We specialise in identifying and developing transport nodes and retail precincts that bring convenience and economic activity to both urban and rural communities.
                </p>
                <p>
                  Our headquarters at Hazeldean Office Park in Pretoria serves as the heart of our operations, coordinating developments across Gauteng and surrounding provinces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-16 sm:py-24 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6 sm:mb-8">[LEADERSHIP]</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl">
            {/* CEO Photo — uses actual Shadrack image from /public/ */}
            <div className="relative rounded-card overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0 w-full">
              <img
                src="/shadrack-mthethwa.jpg"
                alt="Shadrack Mthethwa — Founder & CEO"
                className="w-full h-full object-cover object-top"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=600&h=800&fit=crop&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/90 p-5 sm:p-6">
                <p className="text-white font-bold font-heading text-lg sm:text-xl">Shadrack Mthethwa</p>
                <p className="font-mono text-white/50 text-[10px] uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] text-brand-600 uppercase block mb-3 sm:mb-4">Our Founder & CEO</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">Shadrack Mthethwa</h2>
              <div className="bg-brand-600/10 border-l-4 border-brand-600 p-3 sm:p-4 mb-5 sm:mb-6 rounded-r-lg">
                <p className="text-white/80 text-sm font-medium italic">Recipient of the Sithwalandwe 2014 Pioneer Award</p>
              </div>
              <p className="text-white/60 mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Under Shadrack's leadership, Isibonelo has championed the concept of precinct-led development. His vision integrates socio-economic needs with modern architectural excellence, ensuring that our projects benefit all stakeholders.
              </p>
              <p className="text-xs text-white/30 font-mono">[Executive team details available on request]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ── */}
      <section className="py-16 sm:py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">[FOCUS AREAS]</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink-900">Strategic Focus Areas</h2>
            <p className="text-ink-700 mt-3 max-w-xl mx-auto text-sm sm:text-base">Where we focus our expertise to drive maximum community and commercial value.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: '01', title: 'Transport Nodes', desc: 'Developing strategic hubs that facilitate movement and commerce.' },
              { number: '02', title: 'Retail Parks', desc: 'Bringing world-class shopping convenience to rural and CBD areas.' },
              { number: '03', title: 'Mixed-Use Precincts', desc: 'Creating vibrant spaces for living, working, and recreation.' },
              { number: '04', title: 'Rural & CBD Convenience', desc: 'Bridging the gap in essential retail services across diverse locations.' }
            ].map(focus => (
              <div key={focus.title} className="bg-white p-6 sm:p-8 rounded-card border border-border-200 hover:border-brand-600/30 hover:shadow-md transition-all">
                <span className="font-mono text-brand-600 text-sm font-bold block mb-3 sm:mb-4">{focus.number}</span>
                <h3 className="font-bold font-heading text-ink-900 mb-2 sm:mb-3">{focus.title}</h3>
                <p className="text-sm text-ink-700 leading-relaxed">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY IMPACT ── */}
      <section id="community" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-4">[COMMUNITY IMPACT]</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">Community Impact via MFDF</h2>
              <p className="text-ink-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg">
                The Mthethwa Family Development Foundation (MFDF) is Isibonelo's primary vehicle for corporate social responsibility. We believe that true development is measured by the growth of the people who live in the precincts we build.
              </p>
              <div className="space-y-4 sm:space-y-5">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-surface-50 rounded-card flex items-center justify-center border border-border-200 shrink-0 text-lg sm:text-xl">📚</div>
                  <div>
                    <h4 className="font-bold font-heading text-ink-900">Literacy Programs</h4>
                    <p className="text-sm text-ink-700 mt-1 leading-relaxed">Supporting primary schools with resources to improve reading and writing outcomes.</p>
                  </div>
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-surface-50 rounded-card flex items-center justify-center border border-border-200 shrink-0 text-lg sm:text-xl">⚽</div>
                  <div>
                    <h4 className="font-bold font-heading text-ink-900">Sports & Arts</h4>
                    <p className="text-sm text-ink-700 mt-1 leading-relaxed">Fostering talent through grassroots sport initiatives and cultural arts development.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-card overflow-hidden aspect-[4/3] border-4 border-brand-600/20">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=800&q=80"
                alt="Community development and children"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 bg-surface-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-4">[PARTNER WITH US]</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink-900 mb-4">Partner with us for your next development</h2>
          <p className="text-ink-700 mb-7 sm:mb-8 leading-relaxed text-sm sm:text-base">Ready to create something that leaves an indelible fingerprint?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"><Button size="lg" fullWidth>Request Consultation</Button></Link>
            <Link to="/services"><Button size="lg" variant="secondary" fullWidth>Browse Services</Button></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
