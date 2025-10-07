'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

interface TimelineItemProps {
  children: ReactNode;
  isLast?: boolean;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500" />
      
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );
}

export function TimelineItem({ children, isLast = false, className }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn('relative pl-16', className)}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        className="absolute left-4 top-6 w-5 h-5 -ml-2"
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50" />
        <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
      </motion.div>

      {children}
    </motion.div>
  );
}

Timeline.Item = TimelineItem;

