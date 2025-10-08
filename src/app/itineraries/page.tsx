'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, DollarSign, Star, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ItinerariesSEOOptimization } from '@/components/seo/seo';
import { BreadcrumbSchema } from '@/components/seo/structured-data';

const itineraries = [
  {
    id: 'surf-adventure',
    title: 'Mentawai Surf Adventure',
    description: '7 days of world-class surfing in the Mentawai Islands',
    duration: '7 Days / 6 Nights',
    difficulty: 'Intermediate',
    groupSize: 'Max 8 surfers',
    price: { usd: 1299, eur: 1195, idr: 19500000 },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: [
      '4 surf sessions daily',
      'Luxury surf charter',
      'Professional surf guides',
      'All meals included',
      'Airport transfers'
    ],
    destinations: ['Macaronis', 'Lance\'s Right', 'Hollow Trees', 'Rifles'],
    bestTime: 'April - October'
  },
  {
    id: 'cultural-immersion',
    title: 'Minangkabau Cultural Journey',
    description: '5 days exploring the rich culture and traditions of West Sumatra',
    duration: '5 Days / 4 Nights',
    difficulty: 'Easy',
    groupSize: 'Small group (max 12)',
    price: { usd: 499, eur: 455, idr: 7500000 },
    image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Traditional village visits',
      'Cultural performances',
      'Cooking classes',
      'Historical sites',
      'Local homestay experience'
    ],
    destinations: ['Padang', 'Pagaruyung Palace', 'Batusangkar', 'Koto Gadang'],
    bestTime: 'Year-round'
  },
  {
    id: 'mountain-explorer',
    title: 'Bukittinggi Highlands Explorer',
    description: '4 days discovering the cool mountain air and colonial charm',
    duration: '4 Days / 3 Nights',
    difficulty: 'Moderate',
    groupSize: 'Small group (max 10)',
    price: { usd: 399, eur: 365, idr: 6000000 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Ngarai Sianok canyon',
      'Fort de Kock',
      'Jam Gadang',
      'Coffee plantation tour',
      'Traditional dance show'
    ],
    destinations: ['Bukittinggi', 'Ngarai Sianok', 'Fort de Kock', 'Jam Gadang'],
    bestTime: 'May - September'
  },
  {
    id: 'coastal-discovery',
    title: 'West Sumatra Coastal Discovery',
    description: '6 days exploring beaches, islands, and coastal culture',
    duration: '6 Days / 5 Nights',
    difficulty: 'Easy',
    groupSize: 'Small group (max 8)',
    price: { usd: 699, eur: 640, idr: 10500000 },
    image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Padang beaches',
      'Siberut Island',
      'Fresh seafood',
      'Island hopping',
      'Snorkeling spots'
    ],
    destinations: ['Padang', 'Siberut Island', 'Pasumpahan Island', 'Sikuai Island'],
    bestTime: 'March - November'
  },
  {
    id: 'ultimate-experience',
    title: 'Ultimate West Sumatra Experience',
    description: '10 days covering all highlights of West Sumatra',
    duration: '10 Days / 9 Nights',
    difficulty: 'Moderate',
    groupSize: 'Small group (max 12)',
    price: { usd: 1899, eur: 1735, idr: 28500000 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Mentawai surfing',
      'Cultural immersion',
      'Mountain exploration',
      'Coastal discovery',
      'Luxury accommodations',
      'Private guide'
    ],
    destinations: ['Mentawai', 'Padang', 'Bukittinggi', 'Harau Valley'],
    bestTime: 'April - October'
  },
  {
    id: 'food-lover',
    title: 'Padang Food Lover\'s Tour',
    description: '4 days dedicated to exploring Padang\'s culinary delights',
    duration: '4 Days / 3 Nights',
    difficulty: 'Easy',
    groupSize: 'Small group (max 8)',
    price: { usd: 399, eur: 365, idr: 6000000 },
    image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Food tours',
      'Cooking classes',
      'Market visits',
      'Restaurant recommendations',
      'Local food experts'
    ],
    destinations: ['Padang', 'Padang Pariaman', 'Pariaman', 'Bukittinggi'],
    bestTime: 'Year-round'
  }
];

const ItinerariesPage = () => {
  return (
    <>
      <ItinerariesSEOOptimization />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sumateraway.com/' },
          { name: 'Itineraries', url: 'https://sumateraway.com/itineraries' }
        ]}
      />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-orange-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/hero/padang-hero.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 bg-amber-600 text-white">
                <MapPin className="mr-2 h-4 w-4" />
                Curated Journeys
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Explore <span className="text-amber-600">Itineraries</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                Pre-planned routes that showcase the best of West Sumatra, tailored to your interests
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold">
                  Browse All Itineraries
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  WhatsApp Inquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50">
                All Itineraries
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Surf Adventures
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Cultural Tours
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Mountain Escapes
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Food Tours
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Family Friendly
              </Button>
            </div>
          </div>
        </section>

        {/* Itineraries Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itineraries.map((itinerary, index) => (
                <motion.div
                  key={itinerary.id}
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
                        style={{ backgroundImage: `url(${itinerary.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{itinerary.difficulty}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                        <Clock className="h-4 w-4 text-amber-600" />
                        <span className="text-sm font-medium">{itinerary.duration}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1 drop-shadow-2xl">{itinerary.title}</h3>
                        <p className="text-sm opacity-90 drop-shadow-lg">{itinerary.description}</p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ${itinerary.price.usd}
                          </span>
                          <span className="text-sm text-gray-500">/person</span>
                        </div>
                        <div className="flex space-x-1 text-xs text-gray-500">
                          <span>€{itinerary.price.eur}</span>
                          <span>•</span>
                          <span>IDR {itinerary.price.idr.toLocaleString('en-US')}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{itinerary.groupSize}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{itinerary.bestTime}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Destinations:</h4>
                        <div className="flex flex-wrap gap-1">
                          {itinerary.destinations.slice(0, 3).map((dest, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {dest}
                            </Badge>
                          ))}
                          {itinerary.destinations.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{itinerary.destinations.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                        <ul className="space-y-1">
                          {itinerary.highlights.slice(0, 2).map((highlight, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                              <div className="w-1 h-1 bg-amber-500 rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                          {itinerary.highlights.length > 2 && (
                            <li className="text-xs text-gray-500">
                              +{itinerary.highlights.length - 2} more highlights
                            </li>
                          )}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Want a Custom Itinerary?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our travel experts can create a personalized journey based on your interests, budget, and timeframe
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Request Custom Itinerary
              </Button>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default ItinerariesPage;