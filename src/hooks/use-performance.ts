import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  firstContentfulPaint: number | null;
  largestContentfulPaint: number | null;
  firstInputDelay: number | null;
  cumulativeLayoutShift: number | null;
  timeToInteractive: number | null;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    firstInputDelay: null,
    cumulativeLayoutShift: null,
    timeToInteractive: null,
  });

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Get navigation timing
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics(prev => ({
        ...prev,
        loadTime: navigation.loadEventEnd - navigation.fetchStart,
      }));
    }

    // Get paint timing
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach((entry: PerformanceEntry) => {
      if (entry.name === 'first-contentful-paint') {
        setMetrics(prev => ({
          ...prev,
          firstContentfulPaint: entry.startTime,
        }));
      }
    });

    // Get LCP (Largest Contentful Paint)
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({
            ...prev,
            largestContentfulPaint: entry.startTime,
          }));
        }
      }
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Get FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as any;
          setMetrics(prev => ({
            ...prev,
            firstInputDelay: fidEntry.processingStart - fidEntry.startTime,
          }));
        }
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Get CLS (Cumulative Layout Shift)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      setMetrics(prev => ({
        ...prev,
        cumulativeLayoutShift: clsValue,
      }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Get TTI (Time to Interactive)
    const ttiObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as any;
          if (navEntry.interactive) {
            setMetrics(prev => ({
              ...prev,
              timeToInteractive: navEntry.interactive,
            }));
          }
        }
      }
    });
    ttiObserver.observe({ entryTypes: ['navigation'] });

    // Clean up observers
    return () => {
      observer.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      ttiObserver.disconnect();
    };
  }, []);

  return metrics;
}