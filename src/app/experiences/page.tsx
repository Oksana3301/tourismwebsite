'use client';

import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Waves, MapPin, Building, Star, Calendar, Users, DollarSign, Utensils, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExperiencesSEOOptimization } from '@/components/seo/seo';

const experiences = [
  {
    category: 'Surf',
    icon: Waves,
    color: 'blue',
    items: [
      {
        name: 'Mentawai Surf Charter',
        description: '7-day luxury surf charter to world-class breaks',
        duration: '7 days',
        price: { usd: 1299, eur: 1195, idr: 19500000 },
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        highlights: ['Luxury boat', 'Professional guides', 'All meals included']
      },
      {
        name: 'Surf Lessons for Beginners',
        description: 'Learn to surf with certified instructors in Padang',
        duration: '3 days',
        price: { usd: 199, eur: 185, idr: 3000000 },
        image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
        highlights: ['Certified instructors', 'Board rental', 'Beachfront location']
      }
    ]
  },
  {
    category: 'Culture',
    icon: MapPin,
    color: 'green',
    items: [
      {
        name: 'Minangkabau Village Tour',
        description: 'Experience authentic village life and traditions',
        duration: '1 day',
        price: { usd: 79, eur: 72, idr: 1185000 },
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        highlights: ['Traditional performances', 'Local lunch', 'Craft workshop']
      },
      {
        name: 'Cultural Heritage Walk',
        description: 'Explore historical sites and colonial architecture',
        duration: 'Half day',
        price: { usd: 45, eur: 41, idr: 675000 },
        image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
        highlights: ['Expert guide', 'Historical insights', 'Photo opportunities']
      }
    ]
  },
  {
    category: 'Food',
    icon: Utensils,
    color: 'orange',
    items: [
      {
        name: 'Padang Food Safari',
        description: 'Taste authentic Padang cuisine at local warungs',
        duration: '4 hours',
        price: { usd: 35, eur: 32, idr: 525000 },
        image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
        highlights: ['10+ food tastings', 'Local guide', 'Market visit']
      },
      {
        name: 'Cooking Class',
        description: 'Learn to prepare traditional Minangkabau dishes',
        duration: '3 hours',
        price: { usd: 45, eur: 41, idr: 675000 },
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        highlights: ['Hands-on cooking', 'Recipe book', 'Meal included']
      }
    ]
  },
  {
    category: 'Adventure',
    icon: Camera,
    color: 'purple',
    items: [
      {
        name: 'Canyon Hiking',
        description: 'Explore dramatic canyons and waterfalls',
        duration: 'Full day',
        price: { usd: 65, eur: 60, idr: 975000 },
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        highlights: ['Professional guide', 'Equipment included', 'Lunch provided']
      },
      {
        name: 'Photography Tour',
        description: 'Capture stunning landscapes with professional guidance',
        duration: 'Half day',
        price: { usd: 55, eur: 50, idr: 825000 },
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
        highlights: ['Photography tips', 'Best viewpoints', 'Editing session']
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-purple-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/experiences/surfing.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 bg-indigo-600 text-white">
                <Star className="mr-2 h-4 w-4" />
                Unforgettable Experiences
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Discover <span className="text-indigo-600">Experiences</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                From world-class surfing to cultural immersion, find the perfect adventure for your West Sumatra journey
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold">
                  Browse All
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                >
                  WhatsApp Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Choose Your <span className="text-indigo-600">Adventure</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 rounded-full bg-${category.color}-100 flex items-center justify-center mx-auto mb-4`}>
                        <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                      </div>
                      <CardTitle className="text-xl">{category.category}</CardTitle>
                      <CardDescription>
                        {category.items.length} experiences available
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <Button 
                        variant="outline" 
                        className="w-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured <span className="text-indigo-600">Experiences</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                    <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="relative h-64 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{ backgroundImage: `url(${item.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary">{category.category}</Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                          <p className="text-sm">{item.duration}</p>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                          <ul className="space-y-1">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                                <div className="w-1 h-1 bg-indigo-500 rounded-full" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-2xl font-bold text-gray-900">
                            ${item.price.usd}
                          </span>
                          <span className="text-sm text-gray-500">
                            €{item.price.eur} • IDR {item.price.idr.toLocaleString('en-US')}
                          </span>
                        </div>
                        
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
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
        <section className="py-20 bg-indigo-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We can create custom experiences tailored to your interests and preferences
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold"
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