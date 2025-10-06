import { useState, useEffect, useCallback } from 'react';

interface AccessibilityOptions {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
}

const defaultOptions: AccessibilityOptions = {
  highContrast: false,
  reducedMotion: false,
  fontSize: 'medium',
  screenReader: false,
};

export function useAccessibility() {
  const [options, setOptions] = useState<AccessibilityOptions>(defaultOptions);

  // Load saved options from localStorage
  useEffect(() => {
    const savedOptions = localStorage.getItem('accessibilityOptions');
    if (savedOptions) {
      try {
        const parsed = JSON.parse(savedOptions);
        setOptions({ ...defaultOptions, ...parsed });
      } catch (e) {
        console.error('Failed to parse accessibility options', e);
      }
    }
  }, []);

  // Apply accessibility options to the document
  useEffect(() => {
    if (options.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    if (options.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    // Apply font size
    document.documentElement.style.fontSize = {
      small: '14px',
      medium: '16px',
      large: '18px',
    }[options.fontSize];

    // Save options to localStorage
    localStorage.setItem('accessibilityOptions', JSON.stringify(options));
  }, [options]);

  const updateOption = useCallback((key: keyof AccessibilityOptions, value: any) => {
    setOptions(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetOptions = useCallback(() => {
    setOptions(defaultOptions);
  }, []);

  return {
    options,
    updateOption,
    resetOptions,
  };
}