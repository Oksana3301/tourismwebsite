'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Clock, 
  Shield, 
  Star, 
  Smartphone,
  Users,
  Calendar,
  HeadphonesIcon,
  Camera,
  Utensils,
  Waves,
  Mountain
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track your journey in real-time with GPS-enabled guides and live location sharing with family and friends.',
  },
  {
    icon: Clock,
    title: 'Instant Booking',
    description: 'Book your adventure in seconds. No waiting, no complicated forms. Just click and go.',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance included in every package. Travel with peace of mind.',
  },
  {
    icon: Star,
    title: '5-Star Experience',
    description: 'Curated experiences with top-rated guides, accommodations, and activities. Only the best for you.',
  },
  {
    icon: Smartphone,
    title: 'Mobile First',
    description: 'Full mobile experience. Access your itinerary, maps, and support anytime, anywhere.',
  },
  {
    icon: Users,
    title: 'Expert Guides',
    description: 'Local guides with 10+ years experience. They know the hidden gems and best spots.',
  },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Free cancellation up to 24 hours before departure. Plans change, we understand.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support via WhatsApp, phone, or email. We are always here.',
  },
  {
    icon: Camera,
    title: 'Photo Package',
    description: 'Professional photography included. Capture every moment of your adventure.',
  },
  {
    icon: Utensils,
    title: 'Local Cuisine',
    description: 'Authentic Padang cuisine experiences. Taste the real flavors of West Sumatra.',
  },
  {
    icon: Waves,
    title: 'Surf Lessons',
    description: 'World-class surf instruction for all levels. From beginners to pros.',
  },
  {
    icon: Mountain,
    title: 'Adventure Tours',
    description: 'Hiking, trekking, and mountain expeditions with certified guides.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black dark:text-white mb-6 tracking-tight leading-tight"
            style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
          >
            Everything you've ever wanted
            <br className="hidden sm:block" />
            to know about your trip—and more.
          </h2>
          <p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.02em' }}
          >
            Wisata Padang keeps you informed by tracking more information about your journey than any other service.
          </p>
        </motion.div>

        {/* Features Grid - Consistent spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-8 rounded-2xl">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-black dark:bg-white">
                      <feature.icon className="h-6 w-6 text-white dark:text-black" />
                    </div>
                    <CardTitle className="text-xl font-bold text-black dark:text-white pt-2">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold shadow-sm">
            <Star className="h-4 w-4 fill-current" />
            <span>Everything you need, in one place.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
