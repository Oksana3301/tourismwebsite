'use client';
import { motion } from 'framer-motion';
import { Plane, Hotel, Ship, Calendar, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type LegType = 'flight' | 'hotel' | 'ferry' | 'charter';

export interface LegCardProps {
  type: LegType;
  origin?: string;
  destination?: string;
  date: string;
  time?: string;
  duration?: string;
  title: string;
  description?: string;
  verified?: string;
  warning?: string;
  price?: string;
  className?: string;
}

const iconMap: Record<LegType, React.ReactNode> = {
  flight: <Plane className="h-5 w-5" />,
  hotel: <Hotel className="h-5 w-5" />,
  ferry: <Ship className="h-5 w-5" />,
  charter: <Ship className="h-5 w-5" />,
};

const colorMap: Record<LegType, string> = {
  flight: 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20',
  hotel: 'border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20',
  ferry: 'border-l-teal-500 bg-teal-50/50 dark:bg-teal-950/20',
  charter: 'border-l-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/20',
};

export function LegCard({
  type,
  origin,
  destination,
  date,
  time,
  duration,
  title,
  description,
  verified,
  warning,
  price,
  className,
}: LegCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      className={cn('group', className)}
    >
      <Card
        className={cn(
          'relative border-l-4 p-6 transition-all duration-200',
          'hover:shadow-lg hover:shadow-black/5',
          'focus-within:ring-2 focus-within:ring-blue-500/20',
          colorMap[type]
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={cn(
              'p-2 rounded-lg transition-colors duration-200',
              type === 'flight' && 'bg-blue-100 text-blue-600 dark:bg-blue-900/30',
              type === 'hotel' && 'bg-purple-100 text-purple-600 dark:bg-purple-900/30',
              type === 'ferry' && 'bg-teal-100 text-teal-600 dark:bg-teal-900/30',
              type === 'charter' && 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30'
            )}>
              {iconMap[type]}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-tight">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {description}
                </p>
              )}
            </div>
          </div>
          {price && (
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100 tabular-nums">
                {price}
              </p>
            </div>
          )}
        </div>

        {/* Route */}
        {(origin || destination) && (
          <div className="flex items-center gap-3 mb-4">
            {origin && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {origin}
                </span>
              </div>
            )}
            {origin && destination && (
              <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600" />
            )}
            {destination && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {destination}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Time & Date */}
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {date}
            </span>
          </div>
          {time && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700 dark:text-gray-300 tabular-nums">
                {time}
              </span>
            </div>
          )}
          {duration && (
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {duration}
            </span>
          )}
        </div>

        {/* Footer Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {verified && (
            <Badge
              variant="outline"
              className="bg-green-50 border-green-200 text-green-700 dark:bg-green-950/30 dark:border-green-900 dark:text-green-400 text-xs"
            >
              ✓ Last verified {verified}
            </Badge>
          )}
          {warning && (
            <Badge
              variant="outline"
              className="bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-950/30 dark:border-amber-900 dark:text-amber-400 text-xs"
            >
              ⚠ {warning}
            </Badge>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

