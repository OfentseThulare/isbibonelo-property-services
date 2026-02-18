
import React from 'react';
import { Button } from '../components/ui/Button';
import { FitFinder } from '../components/quiz/FitFinder';
import { PORTFOLIO, SERVICES, FOUNDED_YEAR } from '../constants';
import { trackFunnelClick } from '../services/analytics';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: 1,
    category: 'MARKET TRENDS',
    date: 'February 15, 2026',
    title: 'South African Retail Parks: What Investors Need to Know',
    excerpt: 'Key trends reshaping retail precinct development across Gauteng and beyond — and what they mean for your portfolio.',
  },
  {
    id: 2,
    category: 'DEVELOPMENT',
    date: 'February 10, 2026',
    title: 'Transport Nodes as Catalysts for Community Growth',
    excerpt: 'How strategic transport infrastructure drives economic activity and lasting value in underserved areas.',
  },
  {
    id: 3,
    category: 'MANAGEMENT',
    date: 'February 2, 2026',
    title: 'Maximising Asset Value Through Proactive Facilities Management',
    excerpt: 'Simple strategies to reduce operational costs and maintain long-term property value across your portfolio.',
  }
];

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">

      {/* ── HERO ── Full-bleed aerial city image with left-aligned content */}
      <section className="relative min-h-[92vh] overflow-hidden flex flex-col">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&w=1600&q=80"
          alt="Aerial view of city development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-900/85 via-ink-900/60 to-ink-900/30"></div>

        {/* Main content */}
        <div className="relative flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-28">
          <div className="max-w-xl">
            {/* Monospace label */}
            <p className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase mb-6">
              [WELCOME TO ISIBONELO]
            </p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-[1.05]">
              Find Your Next<br />Great Space
            </h1>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-md">
              Premium property development and management across South Africa — managed with professionalism and care since {FOUNDED_YEAR}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button
                size="lg"
                onClick={() => trackFunnelClick('A', 'hero')}
                className="shadow-xl shadow-brand-600/20"
              >
                Request a Mandate Consult
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                onClick={() => trackFunnelClick('B', 'hero')}
              >
                Leasing Enquiries
              </Button>
            </div>
            {/* Search widget */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex items-center gap-3 max-w-md">
              <svg className="w-4 h-4 text-white/50 shrink-0 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input
                type="text"
                placeholder="Search by city, location, or service type..."
                className="flex-1 bg-transparent text-white placeholder-white/40 outline-none text-sm"
              />
              <Link to="/contact">
                <Button size="sm">Find Space</Button>
              </Link>
            </div>
          </div>

          {/* Right: floating "Talk to an Agent" card */}
          <div className="hidden lg:block absolute right-8 bottom-24">
            <Link to="/contact">
              <div className="bg-surface-50 rounded-2xl p-5 flex items-center gap-4 shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1 cursor-pointer max-w-xs">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-brand-600/20">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=100&h=100&fit=crop&q=80"
                    alt="Property specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-ink-900 text-sm">Talk to an Agent</p>
                  <p className="text-xs text-ink-700/60">Get expert property advice</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-ink-900 flex items-center justify-center text-white text-sm shrink-0">→</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Proof bar at bottom */}
        <div className="relative bg-white/10 backdrop-blur-md border-t border-white/10 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '1999', label: 'Year Founded' },
              { value: 'Pretoria', label: 'Strategic HQ' },
              { value: '25+', label: 'Years Experience' },
              { value: 'Retail Parks', label: 'Primary Focus' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <span className="block text-white font-bold font-heading text-xl">{item.value}</span>
                <span className="text-white/50 font-mono text-[10px] uppercase tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT / STATS ── Dark image card + light stat card */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">/ WHY ISIBONELO</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink-900">Our Commitment to You</h2>
          </div>

          {/* Two big stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {/* Dark image card */}
            <div className="relative rounded-card overflow-hidden min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=800&q=80"
                alt="Modern office building"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-ink-900/75"></div>
              <div className="relative h-full flex flex-col justify-between p-8 min-h-[300px]">
                <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                  Managing a diverse portfolio of landmark developments with care and expertise
                </p>
                <div>
                  <span className="block text-white font-bold font-heading text-8xl leading-none">300+</span>
                  <span className="font-mono text-white/50 text-[10px] uppercase tracking-widest">Properties Managed</span>
                </div>
              </div>
            </div>

            {/* Light stat card */}
            <div className="bg-white rounded-card p-8 flex flex-col justify-between min-h-[300px] border border-border-200">
              <p className="text-ink-700 max-w-xs leading-relaxed">
                Bringing trusted experience to every client and property we serve across South Africa
              </p>
              <div>
                <span className="block text-ink-900 font-bold font-heading text-8xl leading-none">25</span>
                <span className="font-mono text-ink-700/50 text-[10px] uppercase tracking-widest">Years in Real Estate</span>
              </div>
            </div>
          </div>

          {/* 4 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Expert Management', desc: 'From leasing to maintenance, we handle it all with precision and care.' },
              { title: 'Trusted Partners', desc: 'Experienced, responsive, and dedicated to guiding you every step.' },
              { title: 'Tailored Solutions', desc: 'Strategies curated to fit every investment goal and lifestyle.' },
              { title: 'Innovative Approach', desc: 'Market intelligence and technology for optimal property outcomes.' }
            ].map(pillar => (
              <div key={pillar.title} className="bg-white rounded-card p-6 border border-border-200">
                <h4 className="font-bold text-ink-900 mb-2 font-heading">{pillar.title}</h4>
                <p className="text-sm text-ink-700 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── Clean cards on light bg */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">[OUR SERVICES]</p>
              <h2 className="text-4xl font-heading font-bold text-ink-900">Strategic Property Solutions</h2>
            </div>
            <Link to="/services">
              <Button variant="secondary">View All Services</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="bg-surface-50 p-6 rounded-card border border-border-200 hover:shadow-lg hover:border-brand-600/20 transition-all group">
                <div className="w-10 h-10 bg-brand-600/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-brand-600 transition-colors">
                  <span className="text-brand-600 font-bold font-mono text-xs group-hover:text-white transition-colors">0{idx + 1}</span>
                </div>
                <h3 className="font-bold text-ink-900 mb-3 text-sm leading-tight font-heading">{service.title}</h3>
                <p className="text-xs text-ink-700 mb-5 leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-brand-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Explore <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── Dark section */}
      <section className="py-24 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase mb-3">[PORTFOLIO]</p>
              <h2 className="text-4xl font-heading font-bold text-white">Landmark Developments</h2>
              <p className="text-white/50 mt-2 text-sm">Pioneering precinct developments that redefine commercial landscapes.</p>
            </div>
            <Link to="/services">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-ink-900">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO.map(item => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-brand-600/90 text-white px-2.5 py-1 rounded-pill text-[10px] font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-white font-heading group-hover:text-brand-600 transition-colors">{item.title}</h3>
                <p className="text-white/40 text-sm mt-1">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIT FINDER QUIZ ── */}
      <section id="fit-finder" className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">[START YOUR JOURNEY]</p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink-900 mb-6">
                Let's Find Your<br/>Ideal Space
              </h2>
              <p className="text-lg text-ink-700 mb-8 leading-relaxed">
                Whether you are a private owner, government stakeholder, or a business looking for space, our Fit Finder helps map your needs to our expert solutions in under 90 seconds.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Instant service matching based on your role',
                  'Direct routing to relevant specialists',
                  'Priority booking for consult calls'
                ].map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <div className="w-5 h-5 bg-brand-600 text-white rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</div>
                    <span className="text-ink-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              {/* Talk to agent widget */}
              <div className="bg-white rounded-card border border-border-200 p-4 flex items-center gap-4 max-w-sm">
                <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=100&h=100&fit=crop&q=80"
                    alt="Property specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-ink-900 text-sm">Talk to a Specialist</p>
                  <p className="text-xs text-ink-700/60">Get personalised property advice</p>
                </div>
                <Link to="/contact">
                  <button className="w-8 h-8 rounded-full bg-surface-50 border border-border-200 flex items-center justify-center text-ink-900 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all text-sm">
                    →
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <FitFinder />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── Large photo + quote */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">[TESTIMONIALS]</p>
            <h2 className="text-4xl font-heading font-bold text-ink-900">Trusted by Our Community</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Large portrait photo */}
            <div className="relative rounded-card overflow-hidden min-h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&w=700&h=875&fit=crop&q=80"
                alt="Client testimonial"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent p-6">
                <p className="text-white font-bold font-heading">David K.</p>
                <p className="font-mono text-white/60 text-[10px] uppercase tracking-widest">Property Owner, Gauteng</p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-surface-50 rounded-card p-10 flex flex-col justify-between min-h-[480px]">
              <div>
                <p className="text-4xl md:text-5xl font-heading font-bold text-ink-900 leading-tight mb-8">
                  "Their team made selling my property simple and stress-free"
                </p>
                <p className="text-ink-700 leading-relaxed">
                  Isibonelo transformed our underperforming retail precinct into a thriving commercial hub. Their attention to detail and professional approach exceeded every expectation we had going in.
                </p>
              </div>
              <div className="flex items-center gap-3 mt-8">
                <div className="w-8 h-8 bg-brand-600/10 rounded-full flex items-center justify-center">
                  <span className="text-brand-600 font-bold text-xs font-heading">I</span>
                </div>
                <span className="text-sm font-medium text-ink-700">Verified Isibonelo Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG / INSIGHTS ── 3-column cards */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">[BLOG]</p>
              <h2 className="text-4xl font-heading font-bold text-ink-900">Updates, Tips & Living Well</h2>
            </div>
            <Link to="/contact">
              <Button variant="secondary">Subscribe to Updates</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="bg-white rounded-card border border-border-200 p-6 hover:shadow-md transition-all flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-700/50">{post.category}</span>
                  <span className="text-xs text-ink-700/50">{post.date}</span>
                </div>
                <h4 className="font-bold text-ink-900 font-heading text-lg mb-3 leading-tight flex-1">{post.title}</h4>
                <p className="text-sm text-ink-700 mb-6 leading-relaxed">{post.excerpt}</p>
                <a href="#" className="text-ink-700/50 text-sm flex items-center gap-2 hover:text-brand-600 transition-colors font-medium">
                  Read More <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CSR / MFDF ── Dark section with community image */}
      <section className="py-24 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase mb-4">[COMMUNITY IMPACT]</p>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Mthethwa Family Development Foundation
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Our commitment goes beyond bricks and mortar. Through the MFDF, we invest in the future of our communities — supporting primary education, literacy programs, and sports development for the children of South Africa.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white hover:text-ink-900">
                  Learn About Our Impact
                </Button>
              </Link>
            </div>
            <div className="rounded-card overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=800&q=80"
                alt="Community impact and development"
                className="w-full h-full object-cover opacity-75"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── Centered card */}
      <section className="py-24 bg-surface-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-card border border-border-200 p-12 text-center shadow-xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-4">[GET STARTED]</p>
            <h2 className="text-4xl font-heading font-bold text-ink-900 mb-4">
              Let's Build the Future Together
            </h2>
            <p className="text-ink-700 mb-8 max-w-sm mx-auto text-sm leading-relaxed">
              Premium property solutions — managed with professionalism and care since 1999.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg">Request Consultation</Button>
              </Link>
              <Link to="/contact">
                <div className="bg-surface-50 border border-border-200 rounded-card px-4 py-3 flex items-center gap-3 hover:border-brand-600/30 hover:shadow-md transition-all cursor-pointer">
                  <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&w=100&h=100&fit=crop&q=80"
                      alt="Agent"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium text-ink-900">Talk to an Agent →</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
