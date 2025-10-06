'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Users, Waves, Mountain, Building2 } from 'lucide-react';
import { useSmoothScroll } from '@/lib/animations';

const destinations = [
  {
    id: 'mentawai',
    title: 'Mentawai Surf Paradise',
    description: 'Experience world-class surf breaks in pristine waters. Perfect waves for all skill levels in an untouched paradise.',
    image: '/images/destinations/mentawai-modern.svg',
    icon: Waves,
    duration: '5-7 days',
    groupSize: '4-8 people',
    difficulty: 'Intermediate',
    features: [
      'Daily surf sessions',
      'Boat transfers',
      'Surf guide & instructor',
      'Beachfront accommodation',
      'All meals included'
    ],
    highlights: [
      '10+ world-class surf spots',
      'Crystal clear waters',
      'White sand beaches',
      'Vibrant coral reefs'
    ],
    price: {
      usd: 899,
      eur: 829,
      idr: 14200000
    },
    rating: 4.9,
    reviews: 328
  },
  {
    id: 'padang',
    title: 'Padang Cultural Journey',
    description: 'Immerse yourself in Minangkabau culture, taste authentic cuisine, and explore historic landmarks.',
    image: '/images/destinations/padang-modern.svg',
    icon: Building2,
    duration: '3-4 days',
    groupSize: '2-12 people',
    difficulty: 'Easy',
    features: [
      'City tours',
      'Cooking classes',
      'Traditional ceremonies',
      'Hotel accommodation',
      'Local guide'
    ],
    highlights: [
      'Authentic Padang restaurants',
      'Minangkabau architecture',
      'Beach Boulevard sunset',
      'Local markets'
    ],
    price: {
      usd: 449,
      eur: 419,
      idr: 7100000
    },
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'bukittinggi',
    title: 'Bukittinggi Highland Adventure',
    description: 'Explore stunning volcanic landscapes, visit traditional villages, and trek through lush valleys.',
    image: '/images/destinations/bukittinggi-modern.svg',
    icon: Mountain,
    duration: '4-5 days',
    groupSize: '4-10 people',
    difficulty: 'Moderate',
    features: [
      'Mountain trekking',
      'Village visits',
      'Nature photography',
      'Boutique hotel',
      'Traditional meals'
    ],
    highlights: [
      'Mount Marapi views',
      'Harau Valley waterfalls',
      'Traditional villages',
      'Local handicrafts'
    ],
    price: {
      usd: 599,
      eur: 549,
      idr: 9500000
    },
    rating: 4.9,
    reviews: 284
  },
];

const DestinationsSection = () => {
  const { scrollTo } = useSmoothScroll();

  const handleBookNow = (destinationId: string) => {
    scrollTo('#booking');
  };

  return (
    <section id="destinations" className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black dark:via-gray-900/30 dark:to-black transition-colors duration-300">
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
            Explore Our Destinations
          </h2>
          <p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.02em' }}
          >
            From world-class surf breaks to cultural treasures, discover the best of West Sumatra
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group"
            >
              <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6">
                    <div className="flex items-start justify-between">
                      <Badge className="bg-black/80 text-white border-0 backdrop-blur-sm px-3 py-1">
                        <destination.icon className="h-3 w-3 mr-1" />
                        <span className="text-xs font-semibold">{destination.difficulty}</span>
                      </Badge>
                      <div className="flex items-center gap-1 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-white text-xs font-semibold">{destination.rating}</span>
                        <span className="text-gray-300 text-xs">({destination.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{destination.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{destination.groupSize}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardHeader className="p-8 pb-4">
                  <CardDescription className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {destination.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-8 pb-8 space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-black dark:text-white mb-3 text-sm uppercase tracking-wide">What's Included</h4>
                    <ul className="space-y-2">
                      {destination.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-black dark:text-white">
                        ${destination.price.usd}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">/person</span>
                    </div>
                    <div className="flex gap-3 text-xs text-gray-500 dark:text-gray-400">
                      <span>€{destination.price.eur}</span>
                      <span>•</span>
                      <span>Rp {destination.price.idr.toLocaleString('id-ID')}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => handleBookNow(destination.id)}
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 py-6 text-base font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-10 py-6 border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 rounded-full text-base font-semibold transition-all duration-300"
          >
            View All Destinations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
