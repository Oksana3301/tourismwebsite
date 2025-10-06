'use client';

import { useEffect, useState } from 'react';

interface PriceDisplayProps {
  price: number;
  currency?: 'USD' | 'EUR' | 'IDR';
  className?: string;
}

const PriceDisplay = ({ price, currency = 'IDR', className = '' }: PriceDisplayProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const formatPrice = (amount: number, curr: string) => {
    if (!isClient) {
      // Server-side rendering: return simple format
      if (curr === 'IDR') return `IDR ${amount}`;
      if (curr === 'EUR') return `€${amount}`;
      return `$${amount}`;
    }

    // Client-side rendering: use proper formatting
    if (curr === 'IDR') {
      return `IDR ${amount.toLocaleString()}`;
    }
    if (curr === 'EUR') {
      return `€${amount}`;
    }
    return `$${amount}`;
  };

  return (
    <span className={className}>
      {formatPrice(price, currency)}
    </span>
  );
};

export default PriceDisplay;