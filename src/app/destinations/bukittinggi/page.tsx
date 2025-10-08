'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Building, Star, Calendar, Users, DollarSign, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BukittinggiSEOOptimization } from '@/components/seo/seo';
import { BreadcrumbSchema } from '@/components/seo/structured-data';

const BukittinggiPage = () => {
  const attractions = [
    {
      name: 'Fort de Kock',
      description: 'Historic Dutch colonial fortress with panoramic city views',
      category: 'Historical Site',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Jam Gadang',
      description: 'Iconic clock tower and symbol of Bukittinggi',
      category: 'Landmark',
      image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Ngarai Sianok',
      description: 'Dramatic canyon with lush vegetation and hiking trails',
      category: 'Natural Wonder',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Lobang Jepang',
      description: 'Japanese WWII tunnels with historical exhibits',
      category: 'Historical Site',
      image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const activities = [
    {
      name: 'Canyon Hiking',
      description: 'Explore Ngarai Sianok with professional guides',
      duration: 'Half day',
      difficulty: 'Moderate',
      price: { usd: 35, eur: 32, idr: 525000 },
      includes: ['Guide', 'Equipment', 'Transportation', 'Snacks']
    },
    {
      name: 'Traditional Dance Show',
      description: 'Experience authentic Minangkabau cultural performances',
      duration: '2 hours',
      difficulty: 'Easy',
      price: { usd: 25, eur: 23, idr: 375000 },
      includes: ['Show ticket', 'Refreshments', 'Photo opportunity']
    },
    {
      name: 'Coffee Plantation Tour',
      description: 'Visit local coffee farms and learn about processing',
      duration: '3 hours',
      difficulty: 'Easy',
      price: { usd: 30, eur: 27, idr: 450000 },
      includes: ['Tour guide', 'Tasting session', 'Souvenir discount']
    }
  ];

  const packages = [
    {
      name: '3-Day Mountain Escape',
      duration: '3 Days / 2 Nights',
      price: { usd: 249, eur: 225, idr: 3750000 },
      includes: ['Mountain lodge', 'Daily breakfast', 'Guided tours', 'Transportation'],
      highlights: ['Canyon hiking', 'Cultural shows', 'Local cuisine']
    },
    {
      name: '5-Day Adventure Package',
      duration: '5 Days / 4 Nights',
      price: { usd: 399, eur: 365, idr: 6000000 },
      includes: ['Luxury resort', 'All meals', 'Extended tours', 'Expert guide', 'Photo package'],
      highlights: ['Multiple attractions', 'Coffee experience', 'Traditional crafts']
    }
  ];

  return (
    <>
      <BukittinggiSEOOptimization />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sumateraway.com/' },
          { name: 'Destinations', url: 'https://sumateraway.com/#destinations' },
          { name: 'Bukittinggi', url: 'https://sumateraway.com/destinations/bukittinggi' }
        ]}
      />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-blue-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/destinations/bukittinggi.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 bg-purple-600 text-white">
                <Mountain className="mr-2 h-4 w-4" />
                Mountain Paradise
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Bukittinggi <span className="text-purple-600">Highlands</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Discover the charm of Bukittinggi&apos;s cool climate, colonial architecture, and stunning natural landscapes
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold">
                  Book Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
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
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cool Climate</h3>
                <p className="text-muted-foreground">Escape the tropical heat in highlands</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Colonial Heritage</h3>
                <p className="text-muted-foreground">Historic architecture and landmarks</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Beauty</h3>
                <p className="text-muted-foreground">Stunning canyons and landscapes</p>
              </motion.div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Visit Bukittinggi?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cool Mountain Air</h3>
                  <p className="text-muted-foreground">
                    Located 930 meters above sea level, Bukittinggi offers a refreshing escape from the tropical heat with its cool, pleasant climate.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Rich History</h3>
                  <p className="text-muted-foreground">
                    From Dutch colonial forts to Japanese WWII tunnels, Bukittinggi is steeped in history waiting to be explored.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Wonders</h3>
                  <p className="text-muted-foreground">
                    The dramatic Ngarai Sianok canyon and surrounding landscapes offer breathtaking views and outdoor adventures.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Hub</h3>
                  <p className="text-muted-foreground">
                    Experience authentic Minangkabau culture through traditional performances, crafts, and cuisine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Section */}
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
                Top <span className="text-purple-600">Attractions</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore the must-see landmarks and natural wonders of Bukittinggi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {attractions.map((attraction, index) => (
                <motion.div
                  key={attraction.name}
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
                        style={{ backgroundImage: `url(${attraction.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1 drop-shadow-2xl">{attraction.name}</h3>
                        <Badge variant="secondary" className="drop-shadow-lg">{attraction.category}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{attraction.description}</p>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
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
                Activities & <span className="text-blue-600">Experiences</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Engage with local culture and nature through our curated experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl">{activity.name}</CardTitle>
                      <CardDescription>{activity.duration} • {activity.difficulty}</CardDescription>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${activity.price.usd}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Includes:</h4>
                        <ul className="space-y-1">
                          {activity.includes.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-primary rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Book Activity
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
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
                Choose Your <span className="text-purple-600">Package</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                All-inclusive mountain adventures tailored to your preferences
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
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
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
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
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

export default BukittinggiPage;