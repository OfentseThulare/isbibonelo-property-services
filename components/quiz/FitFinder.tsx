
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { trackEvent } from '../../services/analytics';
import { CONTACT_INFO } from '../../constants';

export const FitFinder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    role: '',
    objective: '',
    assetType: '',
    location: '',
    timeline: '',
    name: '',
    email: '',
    organization: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (step < 6) nextStep();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    trackEvent('quiz_complete', formData);
    setLoading(false);
    setSuccess(true);
  };

  const getRecommendation = () => {
    if (formData.role === 'Tenant' || formData.role === 'Broker') return 'Leasing & Brokerage';
    if (formData.objective === 'Develop') return 'Development & Project Management';
    if (formData.objective === 'Optimize') return 'Asset Management';
    if (formData.assetType === 'Retail' || formData.assetType === 'Mixed-use') return 'Property Management';
    return 'Facilities Management';
  };

  /* Progress bar width */
  const progress = Math.round((step / 6) * 100);

  if (success) {
    const rec = getRecommendation();
    return (
      <div className="bg-white rounded-card shadow-xl p-6 sm:p-8 text-center max-w-2xl mx-auto border border-border-200">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-success-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-ink-700/50 mb-2">[YOUR FIT]</p>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-2">We found your fit!</h3>
        <p className="text-ink-700 mb-5 sm:mb-6 text-sm">Based on your answers, we recommend:</p>
        <div className="bg-surface-50 p-5 sm:p-6 rounded-card mb-6 sm:mb-8 border border-border-200">
          <span className="text-brand-600 font-bold text-lg sm:text-xl block mb-2 font-heading">{rec}</span>
          <p className="text-sm text-ink-700">Our team specialises in {rec.toLowerCase()} for projects like yours.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button onClick={() => window.open(CONTACT_INFO.booking, '_blank')}>Book a Consult</Button>
          <Button variant="outline" onClick={() => { setSuccess(false); setStep(1); }}>Restart Quiz</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card shadow-xl overflow-hidden max-w-3xl mx-auto border border-border-200">
      {/* Header with progress */}
      <div className="bg-ink-900 px-5 sm:px-8 py-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white font-medium text-sm sm:text-base">Mandate & Leasing Fit Finder</span>
          <span className="text-brand-600 text-xs sm:text-sm font-bold font-mono">Step {step} / 6</span>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="p-5 sm:p-8 min-h-[360px] sm:min-h-[400px] flex flex-col justify-center">

        {/* Step 1 */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">I am identifying as a...</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Property Owner', 'Government Official', 'Traditional Leader', 'Tenant / Business Owner', 'Broker'].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect('role', opt)}
                  className="p-3 sm:p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 hover:bg-surface-50 transition-all font-medium text-sm sm:text-base"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">What is your primary goal?</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Develop a new precinct or retail park', val: 'Develop' },
                { label: 'Optimise management of an existing asset', val: 'Optimize' },
                { label: 'Find new commercial or retail space to lease', val: 'Lease' },
                { label: 'Outsource facility operations', val: 'Facilities' }
              ].map(opt => (
                <button
                  key={opt.val}
                  onClick={() => handleSelect('objective', opt.val)}
                  className="p-3 sm:p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 transition-all font-medium text-sm sm:text-base"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-5 sm:mt-8 text-ink-700/60 hover:text-ink-900 text-sm transition-colors">← Go Back</button>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">Which asset type fits your needs?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {['Retail Park', 'Transport Node', 'Mixed-use', 'Precinct', 'Rural Hub', 'CBD Office'].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect('assetType', opt)}
                  className="p-3 sm:p-4 border-2 border-border-200 rounded-card text-center hover:border-brand-600 transition-all font-medium text-xs sm:text-sm"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-5 sm:mt-8 text-ink-700/60 hover:text-ink-900 text-sm transition-colors">← Go Back</button>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">Where is the asset located?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Pretoria / Tshwane', 'Johannesburg / Gauteng', 'Other SA Province', 'Outside South Africa'].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect('location', opt)}
                  className="p-3 sm:p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 transition-all font-medium text-sm sm:text-base"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-5 sm:mt-8 text-ink-700/60 hover:text-ink-900 text-sm transition-colors">← Go Back</button>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">What is your project timeline?</h3>
            <div className="grid grid-cols-1 gap-3">
              {['Immediate / Urgent', '3 – 6 Months', '6 – 12 Months', 'Planning Phase (12+ Months)'].map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect('timeline', opt)}
                  className="p-3 sm:p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 transition-all font-medium text-sm sm:text-base"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-5 sm:mt-8 text-ink-700/60 hover:text-ink-900 text-sm transition-colors">← Go Back</button>
          </div>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <form onSubmit={handleSubmit} className="animate-fadeIn">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-ink-900 mb-5 sm:mb-6">Final Step: Your Details</h3>
            <div className="space-y-3 sm:space-y-4">
              <input
                required
                placeholder="Full Name"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
              />
              <input
                placeholder="Organisation / Company (Optional)"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-border-200 rounded-xl bg-surface-50 focus:ring-2 focus:ring-brand-600 outline-none text-sm"
                value={formData.organization}
                onChange={e => setFormData(p => ({ ...p, organization: e.target.value }))}
              />
            </div>
            <div className="mt-5 sm:mt-8">
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Submitting...' : 'Get My Results'}
              </Button>
            </div>
            <button type="button" onClick={prevStep} className="mt-3 sm:mt-4 text-ink-700/60 hover:text-ink-900 text-sm transition-colors w-full text-center">← Go Back</button>
          </form>
        )}

      </div>
    </div>
  );
};
