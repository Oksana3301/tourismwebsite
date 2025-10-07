'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type BannerType = 'warning' | 'info' | 'error';

interface WarningBannerProps {
  type?: BannerType;
  title: string;
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

const styleMap: Record<
  BannerType,
  {
    bg: string;
    border: string;
    icon: React.ReactNode;
    iconBg: string;
  }
> = {
  warning: {
    bg: 'bg-amber-50 dark:bg-amber-950/20',
    border: 'border-amber-200 dark:border-amber-900',
    icon: <AlertTriangle className="h-5 w-5" />,
    iconBg: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-950/20',
    border: 'border-blue-200 dark:border-blue-900',
    icon: <Info className="h-5 w-5" />,
    iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-950/20',
    border: 'border-red-200 dark:border-red-900',
    icon: <AlertCircle className="h-5 w-5" />,
    iconBg: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  },
};

export function WarningBanner({
  type = 'warning',
  title,
  message,
  action,
  className,
}: WarningBannerProps) {
  const styles = styleMap[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'p-5 rounded-xl border-2',
        styles.bg,
        styles.border,
        className
      )}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start gap-4">
        <div className={cn('p-3 rounded-lg shrink-0', styles.iconBg)}>
          {styles.icon}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-black dark:text-white mb-1 text-base">
            {title}
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
            {message}
          </p>
        </div>

        {action && (
          <button
            onClick={action.onClick}
            className={cn(
              'px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-offset-2',
              'hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
              type === 'warning' &&
                'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500',
              type === 'info' &&
                'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
              type === 'error' &&
                'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
            )}
          >
            {action.label}
          </button>
        )}
      </div>
    </motion.div>
  );
}

