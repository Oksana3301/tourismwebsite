'use client';
import { motion } from 'framer-motion';
import { Sun, Cloud, Waves } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface SeasonDialProps {
  className?: string;
}

const seasons = [
  {
    name: 'Dry Season',
    months: 'May - Sep',
    icon: Sun,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50 dark:bg-amber-950/20',
    description: 'Best for surfing, clear skies',
    ideal: true,
  },
  {
    name: 'Wet Season',
    months: 'Oct - Apr',
    icon: Cloud,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    description: 'Occasional rain, lush landscapes',
    ideal: false,
  },
];

export function SeasonDial({ className }: SeasonDialProps) {
  const currentMonth = new Date().getMonth(); // 0-11
  const isDrySeason = currentMonth >= 4 && currentMonth <= 8; // May-Sep (4-8)

  return (
    <Card className={cn('p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl', className)}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-teal-100 dark:bg-teal-900/30">
          <Waves className="h-6 w-6 text-teal-600 dark:text-teal-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-black dark:text-white" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
            Season Guide
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Plan your trip for the best conditions
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {seasons.map((season, index) => {
          const isCurrentSeason =
            (isDrySeason && season.ideal) || (!isDrySeason && !season.ideal);
          const Icon = season.icon;

          return (
            <motion.div
              key={season.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              className={cn(
                'relative p-5 rounded-xl border-2 transition-all duration-300',
                isCurrentSeason
                  ? 'border-black dark:border-white bg-gray-50 dark:bg-gray-800'
                  : 'border-gray-200 dark:border-gray-700 opacity-70 hover:opacity-100 hover:border-gray-400 dark:hover:border-gray-600'
              )}
            >
              {isCurrentSeason && (
                <div className="absolute -top-2 -right-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold">
                    <span className="animate-pulse">●</span> Current
                  </span>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className={cn('p-3 rounded-lg', season.bgColor)}>
                  <Icon className={cn('h-5 w-5', season.color)} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-black dark:text-white">
                      {season.name}
                    </h4>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      ({season.months})
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {season.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-900">
        <p className="text-sm text-blue-900 dark:text-blue-200 font-medium">
          <strong className="font-bold">Pro tip:</strong> Ferry schedules vary by season. Charter boats are available year-round for flexible departures.
        </p>
      </div>
    </Card>
  );
}

