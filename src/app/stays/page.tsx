'use client';

import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Building, Star, MapPin, Wifi, Car, Utensils, WifiOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StaysSEOOptimization } from '@/components/seo/seo';

const stays = [
  {
    name: 'Surf Lodge Mentawai',
    location: 'Tua Pejat, Mentawai Islands',
    type: 'Surf Resort',
    rating: 4.9,
    price: { usd: 299, eur: 275, idr: 4500000 },
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi', 'Restaurant', 'Surfboard rental', 'Airport transfer'],
    highlights: ['Beachfront location', 'Professional surf guides', 'All-inclusive packages']
  },
  {
    name: 'Minang Heritage Hotel',
    location: 'Padang City Center',
    type: 'Boutique Hotel',
    rating: 4.7,
    price: { usd: 89, eur: 82, idr: 1350000 },
    image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi', 'Restaurant', 'Swimming pool', 'Spa'],
    highlights: ['Traditional architecture', 'Cultural performances', 'Central location']
  },
  {
    name: 'Mountain View Resort',
    location: 'Bukittinggi Highlands',
    type: 'Mountain Resort',
    rating: 4.8,
    price: { usd: 129, eur: 118, idr: 1950000 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi', 'Restaurant', 'Mountain view', 'Hiking trails'],
    highlights: ['Cool climate', 'Panoramic views', 'Nature activities']
  },
  {
    name: 'Beach Bungalow',
    location: 'Padang Beach',
    type: 'Beach Bungalow',
    rating: 4.6,
    price: { usd: 69, eur: 63, idr: 1050000 },
    image: 'https://images.unsplash.com/photo-1542601906-925d9c3a4d52?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi', 'Kitchen', 'Beach access', 'Bicycle rental'],
    highlights: ['Direct beach access', 'Local atmosphere', 'Budget-friendly']
  },
  {
    name: 'Luxury Villa',
    location: 'Sungai Pagu, Mentawai',
    type: 'Private Villa',
    rating: 5.0,
    price: { usd: 599, eur: 545, idr: 9000000 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi', 'Private pool', 'Butler service', 'Helipad'],
    highlights: ['Ultimate privacy', 'Personal chef', 'Luxury amenities']
  },
  {
    name: 'Cultural Homestay',
    location: 'Koto Gadang, Bukittinggi',
    type: 'Homestay',
    rating: 4.5,
    price: { usd: 35, eur: 32, idr: 525000 },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    amenities: ['WiFi', 'Home-cooked meals', 'Cultural activities'],
    highlights: ['Authentic experience', 'Local family', 'Cultural immersion']
  }
];

const StaysPage = () => {
  return (
    <>
      <StaysSEOOptimization />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-blue-900/20"></div>
            <div className="absolute inset-0 bg-[url('/images/stays/hotel.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Badge className="mb-6 bg-teal-600 text-white">
                <Building className="mr-2 h-4 w-4" />
                Perfect Stays
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Find Your <span className="text-teal-600">Perfect Stay</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
                From luxury resorts to authentic homestays, discover accommodations that match your travel style
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold">
                  Browse All Stays
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                  className="px-8 py-4 text-lg font-semibold border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
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
              <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
                All Stays
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Surf Resorts
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Boutique Hotels
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Mountain Resorts
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Beach Bungalows
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100">
                Homestays
              </Button>
            </div>
          </div>
        </section>

        {/* Stays Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stays.map((stay, index) => (
                <motion.div
                  key={stay.name}
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
                        style={{ backgroundImage: `url(${stay.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{stay.type}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-full">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{stay.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{stay.name}</h3>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{stay.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">
                            ${stay.price.usd}
                          </span>
                          <span className="text-sm text-gray-500">/night</span>
                        </div>
                        <div className="flex space-x-1 text-xs text-gray-500">
                          <span>€{stay.price.eur}</span>
                          <span>•</span>
                          <span>IDR {stay.price.idr.toLocaleString('en-US')}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Amenities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {stay.amenities.slice(0, 3).map((amenity, i) => (
                            <div key={i} className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded text-xs">
                              {amenity === 'WiFi' ? <Wifi className="h-3 w-3" /> : <WifiOff className="h-3 w-3" />}
                              <span>{amenity}</span>
                            </div>
                          ))}
                          {stay.amenities.length > 3 && (
                            <div className="bg-gray-100 px-2 py-1 rounded text-xs">
                              +{stay.amenities.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Highlights:</h4>
                        <ul className="space-y-1">
                          {stay.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center space-x-2 text-xs text-gray-600">
                              <div className="w-1 h-1 bg-teal-500 rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Need Help Finding the Perfect Stay?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our accommodation specialists can help you find the perfect place to stay based on your preferences and budget
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Get Personalized Recommendations
              </Button>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default StaysPage;