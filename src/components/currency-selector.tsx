'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useCurrency, CURRENCIES } from '@/contexts/currency-context';

const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);

  const currencyInfo = CURRENCIES[currency as keyof typeof CURRENCIES];

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center space-x-2 h-10 px-4"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{currencyInfo.flag} {currency}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      
      <PopoverContent className="w-64 p-0" align="end">
        <div className="max-h-80 overflow-y-auto">
          {Object.entries(CURRENCIES).map(([code, info]) => (
            <motion.button
              key={code}
              className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 transition-colors"
              onClick={() => {
                setCurrency(code);
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-xl">{info.flag}</span>
              <div className="flex-1">
                <div className="font-medium">{code}</div>
                <div className="text-sm text-gray-500">{info.name}</div>
              </div>
              <div className="font-medium">{info.symbol}</div>
            </motion.button>
          ))}
        </div>
        
        <div className="border-t border-gray-200 p-3 text-center">
          <p className="text-xs text-gray-500">
            Exchange rates update every 24 hours
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CurrencySelector;