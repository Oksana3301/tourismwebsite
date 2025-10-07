'use client';
import { motion } from 'framer-motion';
import { Plane, Ship, Car } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface TransportOption {
  id: string;
  type: 'flight' | 'ferry' | 'charter' | 'car';
  name: string;
  duration: string;
  price: string;
  icon: React.ReactNode;
  description: string;
  availability: string;
}

interface TransportPickerProps {
  from: string;
  to: string;
  onSelect?: (option: TransportOption) => void;
  className?: string;
}

const transportOptions: TransportOption[] = [
  {
    id: 'flight',
    type: 'flight',
    name: 'Direct Flight',
    duration: '1h 15m',
    price: 'IDR 850K',
    icon: <Plane className="h-5 w-5" />,
    description: 'Padang → Mentawai via Wings Air',
    availability: 'Daily departures',
  },
  {
    id: 'ferry',
    type: 'ferry',
    name: 'Public Ferry',
    duration: '10h',
    price: 'IDR 150K',
    icon: <Ship className="h-5 w-5" />,
    description: 'Overnight ferry from Padang port',
    availability: 'Mon, Wed, Fri',
  },
  {
    id: 'charter',
    type: 'charter',
    name: 'Charter Boat',
    duration: '8h',
    price: 'IDR 2.5M',
    icon: <Ship className="h-5 w-5" />,
    description: 'Private speedboat (up to 8 pax)',
    availability: 'On-demand',
  },
];

export function TransportPicker({ from, to, onSelect, className }: TransportPickerProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: TransportOption) => {
    setSelected(option.id);
    onSelect?.(option);
  };

  return (
    <Card className={cn('p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl', className)}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
          Choose Transport
        </h3>
        <p className="text-base text-gray-700 dark:text-gray-300">
          {from} → {to}
        </p>
      </div>

      <div className="space-y-4">
        {transportOptions.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            onClick={() => handleSelect(option)}
            className={cn(
              'w-full text-left p-5 rounded-xl border-2 transition-all duration-300',
              'hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
              'focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10',
              selected === option.id
                ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-800'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
            )}
          >
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  'p-3 rounded-lg shrink-0 transition-colors duration-200',
                  selected === option.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                )}
              >
                {option.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-black dark:text-white text-base">
                    {option.name}
                  </h4>
                  <span className="text-lg font-bold text-black dark:text-white tabular-nums">
                    {option.price}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {option.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400 font-medium">
                  <span>⏱ {option.duration}</span>
                  <span>• {option.availability}</span>
                </div>
              </div>

              {selected === option.id && (
                <div className="shrink-0">
                  <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white dark:text-black"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </Card>
  );
}

