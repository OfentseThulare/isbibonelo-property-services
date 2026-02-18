
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
    // Simulate API call
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

  if (success) {
    const rec = getRecommendation();
    return (
      <div className="bg-white rounded-card shadow-xl p-8 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-success-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">We found your fit!</h3>
        <p className="text-ink-700 mb-6">Based on your answers, we recommend:</p>
        <div className="bg-surface-50 p-6 rounded-card mb-8 border border-border-200">
          <span className="text-brand-600 font-bold text-xl block mb-2">{rec}</span>
          <p className="text-sm">Our team specializes in {rec.toLowerCase()} for projects like yours.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => window.open(CONTACT_INFO.booking, '_blank')}>Book a Consult</Button>
          <Button variant="outline" onClick={() => setSuccess(false)}>Restart Quiz</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-card shadow-xl overflow-hidden max-w-3xl mx-auto border border-border-200">
      <div className="bg-ink-900 px-8 py-4 flex justify-between items-center">
        <span className="text-white font-medium">Mandate & Leasing Fit Finder</span>
        <span className="text-brand-600 text-sm font-bold">Step {step} of 6</span>
      </div>
      
      <div className="p-8 min-h-[400px] flex flex-col justify-center">
        {step === 1 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">I am identifying as a...</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Property Owner', 'Government Official', 'Traditional Leader', 'Tenant / Business Owner', 'Broker'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('role', opt)}
                  className="p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 hover:bg-surface-50 transition-all font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">What is your primary goal?</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Develop a new precinct or retail park', val: 'Develop' },
                { label: 'Optimize management of an existing asset', val: 'Optimize' },
                { label: 'Find new commercial or retail space to lease', val: 'Lease' },
                { label: 'Outsource facility operations', val: 'Facilities' }
              ].map(opt => (
                <button 
                  key={opt.val}
                  onClick={() => handleSelect('objective', opt.val)}
                  className="p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 transition-all font-medium"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-8 text-ink-700 underline text-sm">Go Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">Which asset type fits your needs?</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Retail Park', 'Transport Node', 'Mixed-use', 'Precinct', 'Rural Hub', 'CBD Office'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('assetType', opt)}
                  className="p-4 border-2 border-border-200 rounded-card text-center hover:border-brand-600 transition-all font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-8 text-ink-700 underline text-sm">Go Back</button>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">Where is the asset located?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Pretoria / Tshwane', 'Johannesburg / Gauteng', 'Other SA Province', 'Outside South Africa'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('location', opt)}
                  className="p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 transition-all font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-8 text-ink-700 underline text-sm">Go Back</button>
          </div>
        )}

        {step === 5 && (
          <div className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">What is your project timeline?</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Immediate / Urgent', '3 - 6 Months', '6 - 12 Months', 'Planning Phase (12+ Months)'].map(opt => (
                <button 
                  key={opt}
                  onClick={() => handleSelect('timeline', opt)}
                  className="p-4 border-2 border-border-200 rounded-card text-left hover:border-brand-600 transition-all font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="mt-8 text-ink-700 underline text-sm">Go Back</button>
          </div>
        )}

        {step === 6 && (
          <form onSubmit={handleSubmit} className="animate-fadeIn">
            <h3 className="text-2xl font-bold mb-6">Final Step: Your Details</h3>
            <div className="space-y-4">
              <input 
                required
                placeholder="Full Name"
                className="w-full p-3 border border-border-200 rounded-lg focus:ring-2 focus:ring-brand-600"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
              />
              <input 
                required
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border border-border-200 rounded-lg focus:ring-2 focus:ring-brand-600"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
              />
              <input 
                placeholder="Organization / Company (Optional)"
                className="w-full p-3 border border-border-200 rounded-lg focus:ring-2 focus:ring-brand-600"
                value={formData.organization}
                onChange={e => setFormData(p => ({ ...p, organization: e.target.value }))}
              />
            </div>
            <div className="mt-8 flex gap-4">
              <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Submitting...' : 'Get Results'}
              </Button>
            </div>
            <button type="button" onClick={prevStep} className="mt-4 text-ink-700 underline text-sm">Go Back</button>
          </form>
        )}
      </div>
    </div>
  );
};
