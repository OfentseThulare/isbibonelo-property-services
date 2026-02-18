
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { CONTACT_INFO, HQ_ADDRESS, POSTAL_ADDRESS } from '../constants';
import { trackEvent } from '../services/analytics';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    type: 'mandate',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    trackEvent('contact_submit', formData);
    setLoading(false);
    setSubmitted(true);
  };

  const faqs = [
    { q: "Do you work outside Pretoria?", a: "Yes, while our HQ is in Pretoria, we manage and develop properties across Gauteng and other South African provinces, including Mpumalanga and bordering regions." },
    { q: "How do we start a mandate consultation?", a: "The best way is to book a consult via our online link or fill out the form here. We typically arrange an initial site visit or strategic discovery call within 48 hours." },
    { q: "Do you support government partnerships?", a: "Absolutely. Isibonelo has a long history of partnering with government agencies and traditional leadership structures for precinct and transport node developments." },
    { q: "What information helps you provide a quote?", a: "Knowing the asset location, current occupancy status, development goals (retail, mixed-use, etc.), and timeline helps us prepare a tailored proposal." }
  ];

  return (
    <div className="animate-fadeIn">

      {/* ── HEADER ── */}
      <section className="bg-surface-50 py-20 sm:py-24 border-b border-border-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-4">[CONTACT US]</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-ink-900 mb-4">
            Let's Build the<br className="hidden sm:block" />Future Together
          </h1>
          <p className="text-ink-700 max-w-xl text-base sm:text-lg leading-relaxed">
            Our team is ready to help you leave an indelible fingerprint on your property assets.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">

            {/* Contact info + map */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="bg-surface-50 p-5 sm:p-6 rounded-card border border-border-200">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-brand-600 mb-3">Pretoria HQ</div>
                  <p className="text-sm text-ink-900 font-medium mb-3 leading-relaxed">{HQ_ADDRESS}</p>
                  <p className="font-mono text-[10px] text-ink-700/50 leading-relaxed">Postal: {POSTAL_ADDRESS}</p>
                </div>
                <div className="bg-surface-50 p-5 sm:p-6 rounded-card border border-border-200">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-brand-600 mb-3">Reach Out</div>
                  <p className="text-sm font-medium text-ink-900 mb-1 break-all">E: {CONTACT_INFO.email}</p>
                  <p className="text-sm font-medium text-ink-900 mb-4">P: {CONTACT_INFO.phone}</p>
                  <button
                    onClick={() => window.open(`https://wa.me/${CONTACT_INFO.whatsapp}`, '_blank')}
                    className="text-success-600 font-mono text-[10px] font-bold uppercase tracking-widest hover:underline"
                  >
                    WhatsApp Message →
                  </button>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-card overflow-hidden border border-border-200 bg-surface-50 h-[280px] sm:h-[360px] flex items-center justify-center">
                <div className="text-center max-w-xs p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-card border border-border-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-ink-900/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <p className="font-heading font-bold text-ink-900 mb-1 text-sm sm:text-base">Hazeldean Office Park</p>
                  <p className="text-sm text-ink-700/60">Silver Lakes Road, Pretoria</p>
                  <p className="font-mono text-[10px] text-ink-700/30 mt-4">[MAP_EMBED_PLACEHOLDER]</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-card border border-border-200 shadow-xl p-6 sm:p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-10 sm:py-12 animate-fadeIn">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-ink-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-ink-700/50 mb-3">[SUCCESS]</p>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-4">Message Sent!</h3>
                  <p className="text-ink-700 mb-7 sm:mb-8 leading-relaxed text-sm sm:text-base">Thanks for reaching out. We will reply shortly. Want to speed this up?</p>
                  <Button onClick={() => window.open(CONTACT_INFO.booking, '_blank')}>Book a Time on Calendar</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="mb-4 sm:mb-6">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-ink-700/50 mb-2">[SEND AN ENQUIRY]</p>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900">Get in Touch</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-700/60">Full Name *</label>
                      <input
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm transition-all"
                        value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-700/60">Email Address *</label>
                      <input
                        required
                        type="email"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm transition-all"
                        value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-700/60">Organisation</label>
                      <input
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm transition-all"
                        value={formData.organization}
                        onChange={e => setFormData(p => ({ ...p, organization: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-700/60">Enquiry Type</label>
                      <select
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm transition-all"
                        value={formData.type}
                        onChange={e => setFormData(p => ({ ...p, type: e.target.value }))}
                      >
                        <option value="mandate">Mandate Consultation</option>
                        <option value="leasing">Leasing Enquiry</option>
                        <option value="other">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase tracking-widest text-ink-700/60">Your Message *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none resize-none text-sm transition-all"
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    ></textarea>
                  </div>

                  <Button type="submit" fullWidth size="lg" disabled={loading}>
                    {loading ? 'Processing...' : 'Send Message'}
                  </Button>
                  <p className="font-mono text-[10px] text-ink-700/40 text-center tracking-wide">
                    By submitting, you agree to our POPIA-compliant privacy notice.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-surface-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="font-mono text-[11px] tracking-[0.2em] text-ink-700/50 uppercase mb-3">/ FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-ink-900">Everything You Need to Know—Upfront</h2>
            <p className="text-ink-700 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              We've helped property owners and real estate teams across South Africa — here's what most clients ask before working with us.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-border-200 rounded-card overflow-hidden">
                <button
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center text-left hover:bg-surface-50 transition-colors gap-4"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-ink-900 font-heading text-sm sm:text-base">{faq.q}</span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-border-200 flex items-center justify-center shrink-0 transition-all ${openFaq === idx ? 'bg-ink-900 border-ink-900' : 'bg-white'}`}>
                    <span className={`text-base sm:text-lg font-bold leading-none transition-colors ${openFaq === idx ? 'text-white' : 'text-ink-900'}`}>
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-ink-700 text-sm leading-relaxed border-t border-border-200 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
