'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CurrencyContextType {
  currency: string;
  setCurrency: (currency: string) => void;
  exchangeRates: Record<string, number>;
  convertPrice: (price: number, fromCurrency: string, toCurrency?: string) => number;
  formatPrice: (price: number, currency?: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
  EUR: { symbol: '€', name: 'Euro', flag: '🇪🇺' },
  IDR: { symbol: 'Rp', name: 'Indonesian Rupiah', flag: '🇮🇩' },
  JPY: { symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵' },
  AUD: { symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺' },
  SGD: { symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬' },
  MYR: { symbol: 'RM', name: 'Malaysian Ringgit', flag: '🇲🇾' },
  THB: { symbol: '฿', name: 'Thai Baht', flag: '🇹🇭' },
  PHP: { symbol: '₱', name: 'Philippine Peso', flag: '🇵🇭' },
  KRW: { symbol: '₩', name: 'South Korean Won', flag: '🇰🇷' },
};

const DEFAULT_EXCHANGE_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  IDR: 15800,
  JPY: 149,
  AUD: 1.52,
  SGD: 1.35,
  MYR: 4.72,
  THB: 36.5,
  PHP: 56.2,
  KRW: 1310,
};

interface CurrencyProviderProps {
  children: ReactNode;
}

const CurrencyProvider: React.FC<CurrencyProviderProps> = ({ children }) => {
  const [currency, setCurrency] = useState<string>('USD');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(DEFAULT_EXCHANGE_RATES);

  // Load currency preference from localStorage
  useEffect(() => {
    const savedCurrency = localStorage.getItem('preferredCurrency');
    if (savedCurrency && CURRENCIES[savedCurrency as keyof typeof CURRENCIES]) {
      setCurrency(savedCurrency);
    }
  }, []);

  // Save currency preference to localStorage
  useEffect(() => {
    localStorage.setItem('preferredCurrency', currency);
  }, [currency]);

  // Simulate fetching exchange rates from an API
  useEffect(() => {
    // In a real app, you would fetch this from an API like:
    // fetch('https://api.exchangerate-api.com/v4/latest/USD')
    //   .then(response => response.json())
    //   .then(data => setExchangeRates(data.rates));
    
    // For demo purposes, we'll use the default rates with slight variations
    const simulatedRates = { ...DEFAULT_EXCHANGE_RATES };
    
    // Add some random variation to simulate real-time rates
    Object.keys(simulatedRates).forEach((key) => {
      if (key !== 'USD') {
        const variation = 0.95 + Math.random() * 0.1; // Random variation between 0.95 and 1.05
        simulatedRates[key] = parseFloat((simulatedRates[key] * variation).toFixed(2));
      }
    });
    
    setExchangeRates(simulatedRates);
  }, []);

  const convertPrice = (price: number, fromCurrency: string, toCurrency: string = currency): number => {
    if (fromCurrency === toCurrency) return price;
    
    // Convert to USD first, then to target currency
    const priceInUSD = price / exchangeRates[fromCurrency];
    return priceInUSD * exchangeRates[toCurrency];
  };

  const formatPrice = (price: number, targetCurrency: string = currency): string => {
    const convertedPrice = convertPrice(price, 'USD', targetCurrency);
    const currencyInfo = CURRENCIES[targetCurrency as keyof typeof CURRENCIES];
    
    if (targetCurrency === 'IDR') {
      // Use consistent formatting to avoid hydration mismatch
      return `${currencyInfo.symbol}${Math.round(convertedPrice).toLocaleString()}`;
    }
    
    if (targetCurrency === 'JPY' || targetCurrency === 'KRW') {
      return `${currencyInfo.symbol}${Math.round(convertedPrice).toLocaleString()}`;
    }
    
    return `${currencyInfo.symbol}${convertedPrice.toFixed(2)}`;
  };

  const value: CurrencyContextType = {
    currency,
    setCurrency,
    exchangeRates,
    convertPrice,
    formatPrice,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export { CurrencyProvider, useCurrency, CURRENCIES };