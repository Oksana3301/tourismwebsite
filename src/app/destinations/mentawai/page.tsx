'use client';
'use client';

import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Waves, Star, MapPin, Calendar, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MentawaiSEOOptimization } from '@/components/seo/seo';
import { BreadcrumbSchema } from '@/components/seo/structured-data';

const MentawaiPage = () => {
  const surfSpots = [
    {
      name: 'Macaronis',
      description: 'Perfect left-hand point break with long, peeling waves',
      difficulty: 'Intermediate',
      bestTime: 'April - October',
      image: '/images/destinations/mentawai.svg'
    },
    {
      name: 'Lance\'s Right',
      description: 'Powerful right-hand reef break with challenging barrels',
      difficulty: 'Advanced',
      bestTime: 'April - October',
      image: '/images/destinations/mentawai.svg'
    },
    {
      name: 'Hollow Trees',
      description: 'Epic left-hand barrel that breaks over shallow reef',
      difficulty: 'Advanced',
      bestTime: 'May - September',
      image: '/images/destinations/mentawai.svg'
    },
    {
      name: 'Rifles',
      description: 'Long, fast left-hand point break for experienced surfers',
      difficulty: 'Advanced',
      bestTime: 'April - October',
      image: '/images/destinations/mentawai.svg'
    }
  ];

  const packages = [
    {
      name: '7-Day Surf Adventure',
      duration: '7 Days / 6 Nights',
      price: { usd: 1299, eur: 1195, idr: 19500000 },
      includes: ['Accommodation', 'Meals', 'Transfers', 'Guide', 'Board rental'],
      highlights: ['4 surf sessions per day', 'Professional surf guide', 'All-inclusive']
    },
    {
      name: '14-Day Ultimate Experience',
      duration: '14 Days / 13 Nights',
      price: { usd: 2299, eur: 2095, idr: 34500000 },
      includes: ['Luxury accommodation', 'All meals', 'Transfers', 'Expert guide', 'Board rental', 'Photo package'],
      highlights: ['6 surf sessions', 'Professional photographer', 'VIP treatment']
    }
  ];

  return (
    <>
      <MentawaiSEOOptimization />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sumateraway.com/' },
          { name: 'Destinations', url: 'https://sumateraway.com/#destinations' },
          { name: 'Mentawai', url: 'https://sumateraway.com/destinations/mentawai' }
        ]}
      />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-green-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/destinations/mentawai.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 bg-blue-600 text-white">
                <Waves className="mr-2 h-4 w-4" />
                World-Class Surf Destination
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Mentawai <span className="text-blue-600">Surf</span> Paradise
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Experience legendary waves in the Mentawai Islands with our expert-guided surf adventures
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Book Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  WhatsApp Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5-Star Experience</h3>
                <p className="text-muted-foreground">Rated by hundreds of satisfied surfers</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">15+ Surf Spots</h3>
                <p className="text-muted-foreground">Access to world-class breaks</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Year-Round Surf</h3>
                <p className="text-muted-foreground">Consistent swells all year</p>
              </motion.div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Mentawai?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Legendary Waves</h3>
                  <p className="text-muted-foreground">
                    Mentawai is home to some of the best waves on the planet. From perfect barrels to long, peeling walls, 
                    there's something for every level of surfer.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Guides</h3>
                  <p className="text-muted-foreground">
                    Our local surf guides know every break intimately. They'll help you find the best waves and ensure your safety.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">All-Inclusive Packages</h3>
                  <p className="text-muted-foreground">
                    We take care of everything - accommodation, meals, transfers, and equipment. All you need to do is surf.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Tourism</h3>
                  <p className="text-muted-foreground">
                    We're committed to preserving Mentawai's natural beauty. Our tours support local communities and minimize environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Surf Spots Section */}
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
                Top <span className="text-blue-600">Surf Spots</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover the legendary breaks that make Mentawai a surfer's paradise
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {surfSpots.map((spot, index) => (
                <motion.div
                  key={spot.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-64 overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${spot.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1 drop-shadow-2xl">{spot.name}</h3>
                        <div className="flex items-center space-x-2 drop-shadow-lg">
                          <Badge variant="secondary" className="drop-shadow-lg">{spot.difficulty}</Badge>
                          <span className="text-sm">{spot.bestTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{spot.description}</p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
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
                Choose Your <span className="text-blue-600">Package</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                All-inclusive surf adventures tailored to your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                      <CardDescription className="text-lg">{pkg.duration}</CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900">
                          ${pkg.price.usd}
                        </span>
                        <span className="text-sm text-gray-500 ml-2">/person</span>
                      </div>
                      <div className="flex justify-center space-x-4 text-xs text-gray-500 mt-1">
                        <span>€{pkg.price.eur}</span>
                        <span>IDR {pkg.price.idr.toLocaleString('en-US')}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {pkg.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Book This Package
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default MentawaiPage;