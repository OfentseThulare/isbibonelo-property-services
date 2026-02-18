
type EventName = 'cta_click' | 'quiz_complete' | 'brochure_download_click' | 'contact_submit';

export const trackEvent = (name: EventName, params?: Record<string, any>) => {
  // TODO: Implement GA4/GTM here
  console.log(`[Analytics] Event: ${name}`, params || {});
};

export const trackFunnelClick = (funnel: 'A' | 'B', location: string) => {
  trackEvent('cta_click', { funnel, location });
};
