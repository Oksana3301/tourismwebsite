'use client';
import { motion } from 'framer-motion';
import { MapPin, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface DestinationCardProps {
  name: string;
  description: string;
  duration: string;
  highlights: string[];
  image?: string;
  price?: string;
  onAdd?: () => void;
  className?: string;
}

export function DestinationCard({
  name,
  description,
  duration,
  highlights,
  image,
  price,
  onAdd,
  className,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn('group', className)}
    >
      <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-all duration-200 hover:shadow-xl">
        {/* Image */}
        {image ? (
          <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-200" />
          </div>
        ) : (
          <div className="relative h-48 bg-gradient-to-br from-blue-500 to-teal-500 overflow-hidden" />
        )}

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {name}
              </h3>
            </div>
            {price && (
              <div className="text-right">
                <p className="text-sm text-gray-600 dark:text-gray-400">from</p>
                <p className="text-lg font-bold text-gray-900 dark:text-gray-100 tabular-nums">
                  {price}
                </p>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Duration */}
          <Badge variant="outline" className="mb-4">
            {duration}
          </Badge>

          {/* Highlights */}
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Highlights:
            </p>
            <ul className="space-y-1">
              {highlights.slice(0, 3).map((highlight, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Add Button */}
          <Button
            onClick={onAdd}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 group/btn"
          >
            <Plus className="h-4 w-4 mr-2 group-hover/btn:rotate-90 transition-transform duration-200" />
            Add to Itinerary
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

