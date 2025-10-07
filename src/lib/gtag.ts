/**
 * Google Analytics 4 Integration
 * 
 * Setup Instructions:
 * 1. Get your GA4 Measurement ID from https://analytics.google.com
 * 2. Add to .env.local: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * 3. The analytics will automatically track page views and events
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Check if GA is enabled
export const isGAEnabled = () => {
  return !!GA_TRACKING_ID && typeof window !== 'undefined';
};

// Page view tracking
export const pageview = (url: string) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Event tracking
interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Common events for travel website
export const trackBookingIntent = (packageName: string, price: number) => {
  event({
    action: 'booking_intent',
    category: 'engagement',
    label: packageName,
    value: price,
  });
};

export const trackWhatsAppClick = (source: string) => {
  event({
    action: 'whatsapp_click',
    category: 'contact',
    label: source,
  });
};

export const trackEmailClick = (source: string) => {
  event({
    action: 'email_click',
    category: 'contact',
    label: source,
  });
};

export const trackDestinationView = (destination: string) => {
  event({
    action: 'destination_view',
    category: 'content',
    label: destination,
  });
};

export const trackExperienceView = (experienceName: string) => {
  event({
    action: 'experience_view',
    category: 'content',
    label: experienceName,
  });
};

export const trackStayView = (stayName: string) => {
  event({
    action: 'stay_view',
    category: 'content',
    label: stayName,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

