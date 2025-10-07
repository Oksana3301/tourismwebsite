'use client';

import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Waves, MapPin, Star, Utensils, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExperiencesSEOOptimization } from '@/components/seo/seo';

const experiences = [
  {
    category: 'Surf & Adventure',
    icon: Waves,
    color: 'blue',
    categoryImage: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&h=600&fit=crop',
    items: [
      {
        name: 'Mentawai Surf & Culture Explorer',
        description: 'A balanced itinerary combining surfing, cultural immersion, and nature exploration—perfect for surf-curious travelers who want more than just waves',
        duration: '7 Days / 6 Nights',
        price: { usd: 1600, eur: 1470, idr: 24000000 },
        image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1200&h=800&fit=crop',
        highlights: [
          '4 days of surfing at beginner & intermediate spots',
          'Cultural tour in local Mentawai village',
          'Guided jungle trekking & waterfall visit',
          'Snorkeling adventure in crystal-clear lagoons',
          'Airport transfers (Padang)',
          'All meals (breakfast, lunch, dinner)',
          'Surf gear + local instructor',
          'Boat transfers to islands',
          'English-speaking local guide'
        ],
        bookingInfo: {
          minGuests: 2,
          advanceBooking: '1 month',
          groupDiscount: 'Available for 4+ guests'
        }
      },
      {
        name: 'Ultimate Mentawai Surf Charter',
        description: 'Designed for serious surfers seeking the best waves in the Mentawai Islands aboard a premium surf charter boat',
        duration: '10 Days / 9 Nights',
        price: { usd: 3500, eur: 3220, idr: 52500000 },
        image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1200&h=800&fit=crop',
        highlights: [
          'Access to 20+ surf breaks via boat',
          'Surf up to 3 sessions per day',
          'Sleep aboard fully equipped charter boat',
          'Travel with seasoned surf guide',
          '9 nights aboard surf charter boat',
          '3 chef-prepared meals daily',
          'Professional surf guide + tender boat support',
          'Photography & drone package (optional add-on)'
        ],
        bookingInfo: {
          minGuests: 6,
          advanceBooking: 'Minimum 6 guests per trip (shared charter)',
          groupDiscount: 'Full private charter available (up to 12 pax)',
          departure: 'Departures from Padang port'
        }
      }
    ]
  }
];

const ExperiencesPage = () => {
  return (
    <>
      <ExperiencesSEOOptimization />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-background via-secondary/30 to-background transition-colors duration-300 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-3">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=600&auto=format&fit=crop"
                alt="Decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop"
                alt="Decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=800&auto=format&fit=crop"
                alt="Decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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
                Discover Experiences
              </h2>
              <p 
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                style={{ letterSpacing: '-0.02em' }}
              >
                From world-class surfing to cultural immersion, find the perfect adventure for your West Sumatra journey
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="pt-8 pb-32 bg-gradient-to-b from-background via-secondary/30 to-background transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                Choose Your <span className="text-blue-600 dark:text-blue-400">Adventure</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Browse our curated experiences by category
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {experiences.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
                    {/* Category Preview Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={category.categoryImage}
                        alt={category.category}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Icon Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                          <category.icon className="h-10 w-10 text-black dark:text-white" />
                        </div>
                      </div>
                      
                      {/* Category Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-2xl">{category.category}</h3>
                        <p className="text-sm text-white/90 drop-shadow-lg">{category.items.length} experiences</p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <Button 
                        variant="outline" 
                        className="w-full rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500"
                      >
                        View All
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Grid */}
        <section className="py-32 bg-white dark:bg-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                Featured <span className="text-blue-600 dark:text-blue-400">Experiences</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Handpicked adventures that showcase the best of West Sumatra
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.flatMap(category => 
                category.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${category.category}-${item.name}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (itemIndex * 0.1) + 0.2 }}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl">
                      <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-black/90 text-white border-0 backdrop-blur-sm">{category.category}</Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">{item.name}</h3>
                          <p className="text-sm text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{item.duration}</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-8">
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-black dark:text-white mb-2 text-sm uppercase tracking-wide">Highlights:</h4>
                          <ul className="space-y-2">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mb-4">
                          <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-bold text-black dark:text-white">
                              ${item.price.usd}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">/person</span>
                          </div>
                          <div className="flex gap-3 text-xs text-gray-600 dark:text-gray-300">
                            <span>€{item.price.eur}</span>
                            <span>•</span>
                            <span>Rp {item.price.idr.toLocaleString('id-ID')}</span>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black py-6 text-base font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                          Book Experience
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                We can create custom experiences tailored to your interests and preferences
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Request Custom Experience
              </Button>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default ExperiencesPage;