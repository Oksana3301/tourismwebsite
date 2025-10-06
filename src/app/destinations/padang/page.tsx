'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { MapPin, Star, Calendar, Users, DollarSign, Building, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PadangSEOOptimization } from '@/components/seo/seo';

const PadangPage = () => {
  const culturalSites = [
    {
      name: 'Pagaruyung Palace',
      description: 'The royal palace of Minangkabau kings with traditional architecture',
      category: 'Historical Site',
      image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Adityawarman Museum',
      description: 'Showcasing Minangkabau history and cultural artifacts',
      category: 'Museum',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Jam Gadang',
      description: 'Iconic clock tower and symbol of Bukittinggi',
      category: 'Landmark',
      image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Siti Nurbaya Bridge',
      description: 'Historic bridge with panoramic views of Padang city',
      category: 'Landmark',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const culinaryExperiences = [
    {
      name: 'Rendang Making Class',
      description: 'Learn to prepare the world-famous Minangkabau beef dish',
      duration: '3 hours',
      price: { usd: 45, eur: 40, idr: 675000 },
      includes: ['Ingredients', 'Apron', 'Recipe book', 'Certificate']
    },
    {
      name: 'Padang Food Tour',
      description: 'Taste authentic Padang cuisine at local warungs',
      duration: '4 hours',
      price: { usd: 35, eur: 32, idr: 525000 },
      includes: ['Food samples', 'Beverages', 'Local guide', 'Transportation']
    },
    {
      name: 'Coffee Culture Experience',
      description: 'Discover Minangkabau coffee traditions and tasting',
      duration: '2 hours',
      price: { usd: 25, eur: 23, idr: 375000 },
      includes: ['Coffee tasting', 'Traditional snacks', 'Brewing demo']
    }
  ];

  const packages = [
    {
      name: '3-Day Cultural Immersion',
      duration: '3 Days / 2 Nights',
      price: { usd: 299, eur: 275, idr: 4500000 },
      includes: ['Accommodation', 'Daily breakfast', 'Cultural tours', 'Local guide', 'Transportation'],
      highlights: ['Traditional performances', 'Village visits', 'Cooking classes']
    },
    {
      name: '5-Day Ultimate Experience',
      duration: '5 Days / 4 Nights',
      price: { usd: 499, eur: 455, idr: 7500000 },
      includes: ['Luxury accommodation', 'All meals', 'Extended tours', 'Expert guide', 'Photo package'],
      highlights: ['Custom itinerary', 'Private performances', 'Souvenir workshop']
    }
  ];

  return (
    <>
      <PadangSEOOptimization />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-blue-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/hero/padang-hero.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 bg-green-600 text-white">
                <MapPin className="mr-2 h-4 w-4" />
                Cultural Heritage Experience
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Padang <span className="text-green-600">Culture</span> & Traditions
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Immerse yourself in the rich Minangkabau culture, traditions, and culinary delights of Padang
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
                  Book Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-green-600 text-green-600 hover:bg-green-50"
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
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Richness</h3>
                <p className="text-gray-600">Experience authentic Minangkabau traditions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Culinary Delights</h3>
                <p className="text-gray-600">Taste world-famous Padang cuisine</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Historical Sites</h3>
                <p className="text-gray-600">Explore ancient palaces and landmarks</p>
              </motion.div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Visit Padang?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Minangkabau Culture</h3>
                  <p className="text-gray-600">
                    Padang is the heart of Minangkabau culture, known for its matrilineal society, unique architecture, 
                    and rich traditions that have been preserved for centuries.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">World-Class Cuisine</h3>
                  <p className="text-gray-600">
                    Renowned worldwide for its spicy and flavorful dishes, Padang cuisine offers an unforgettable culinary adventure.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Warm Hospitality</h3>
                  <p className="text-gray-600">
                    Experience the famous Minangkabau hospitality - friendly, welcoming, and always ready to share their culture.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Beauty</h3>
                  <p className="text-gray-600">
                    From stunning beaches to lush highlands, Padang offers diverse landscapes waiting to be explored.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Sites Section */}
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
                Cultural <span className="text-green-600">Sites</span> & Landmarks
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover the historical and cultural treasures of Padang and surrounding areas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culturalSites.map((site, index) => (
                <motion.div
                  key={site.name}
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
                        style={{ backgroundImage: `url(${site.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold mb-1">{site.name}</h3>
                        <Badge variant="secondary">{site.category}</Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <p className="text-gray-600 mb-4">{site.description}</p>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culinary Experiences Section */}
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
                Culinary <span className="text-blue-600">Experiences</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Taste the authentic flavors of Padang through hands-on experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {culinaryExperiences.map((experience, index) => (
                <motion.div
                  key={experience.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-xl">{experience.name}</CardTitle>
                      <CardDescription>{experience.duration}</CardDescription>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${experience.price.usd}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm">{experience.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Includes:</h4>
                        <ul className="space-y-1">
                          {experience.includes.map((item, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                              <div className="w-1 h-1 bg-blue-500 rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Book Experience
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
                Choose Your <span className="text-green-600">Package</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                All-inclusive cultural adventures tailored to your interests
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
                            <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                        <ul className="space-y-2">
                          {pkg.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700">
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

export default PadangPage;