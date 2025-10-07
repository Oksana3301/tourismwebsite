'use client';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Wallet } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
}

interface PaymentMethodCardProps {
  selected?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: <CreditCard className="h-5 w-5" />,
    description: 'Visa, Mastercard, Amex',
    badge: 'Instant',
  },
  {
    id: 'apple-pay',
    name: 'Apple Pay',
    icon: <Smartphone className="h-5 w-5" />,
    description: 'One-tap payment',
    badge: 'Fast',
  },
  {
    id: 'google-pay',
    name: 'Google Pay',
    icon: <Smartphone className="h-5 w-5" />,
    description: 'Quick checkout',
    badge: 'Fast',
  },
  {
    id: 'crypto',
    name: 'Cryptocurrency',
    icon: <Wallet className="h-5 w-5" />,
    description: 'USDC, ETH, BTC',
    badge: 'Rate-lock',
  },
];

export function PaymentMethodCard({ selected, onSelect, className }: PaymentMethodCardProps) {
  return (
    <Card className={cn('p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl', className)}>
      <h3 className="text-2xl font-bold text-black dark:text-white mb-6" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
        Payment Method
      </h3>

      <div className="grid grid-cols-1 gap-4">
        {paymentMethods.map((method, index) => (
          <motion.button
            key={method.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            onClick={() => onSelect?.(method.id)}
            className={cn(
              'relative p-5 rounded-xl border-2 text-left transition-all duration-300',
              'hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
              'focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10',
              selected === method.id
                ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-800'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
            )}
          >
            {method.badge && (
              <div className="absolute -top-2 -right-2">
                <span className="inline-flex px-3 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold">
                  {method.badge}
                </span>
              </div>
            )}

            <div className="flex items-start gap-4">
              <div
                className={cn(
                  'p-3 rounded-lg transition-colors duration-200',
                  selected === method.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                )}
              >
                {method.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-black dark:text-white mb-1 text-base">
                  {method.name}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {method.description}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {selected === 'crypto' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-900"
        >
          <p className="text-sm text-amber-900 dark:text-amber-200 mb-2 font-semibold">
            <strong className="font-bold">Rate Lock Timer:</strong> 15:00
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-300">
            Current rate locked. Complete payment within 15 minutes.
          </p>
        </motion.div>
      )}
    </Card>
  );
}

