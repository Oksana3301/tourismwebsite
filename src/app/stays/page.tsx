'use client';

import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Building, Star, MapPin, Wifi, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { StaysSEOOptimization } from '@/components/seo/seo';

const stays = [
  {
    name: 'Surf Camp Mentawai',
    location: 'Mentawai Islands',
    type: 'Surf Camp',
    rating: 4.8,
    price: { usd: 110, eur: 101, idr: 1650000 },
    duration: '5 Nights',
    perNight: true,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop',
    amenities: ['WiFi', 'Filtered water', 'Surfboard storage', 'Daily surf transport'],
    highlights: [
      'Steps away from popular surf spots',
      'Communal meals and beach bonfires',
      'Optional yoga or cultural activities',
      'Shared bungalow accommodation',
      '3 daily meals included'
    ],
    bookingInfo: {
      minNights: 3,
      discount: 'Discounts for stays >7 nights',
      upgrade: 'Optional private room upgrade'
    }
  },
  {
    name: 'Island Resort Getaway',
    location: 'Mentawai Islands',
    type: 'Beach Resort',
    rating: 4.9,
    price: { usd: 180, eur: 165, idr: 2700000 },
    duration: '7 Nights',
    perNight: true,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop',
    amenities: ['WiFi', 'Infinity pool', 'Spa', 'Sunset bar'],
    highlights: [
      'Private beachfront villas',
      'On-site spa & massage',
      'Infinity pool + sunset bar',
      'Daily breakfast buffet',
      'Welcome cocktail & fruit platter',
      'Free use of kayaks, paddleboards',
      'Airport & boat transfers'
    ],
    bookingInfo: {
      minNights: 4,
      packages: 'Honeymoon & couple packages available',
      upgrade: 'Premium villa options'
    }
  },
  {
    name: 'Boutique Eco-Lodge',
    location: 'Mentawai Islands',
    type: 'Eco-Lodge',
    rating: 4.7,
    price: { usd: 145, eur: 133, idr: 2175000 },
    duration: '3–10 Nights',
    perNight: true,
    image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop',
    amenities: ['WiFi', 'Solar power', 'Ocean view', 'Surf concierge'],
    highlights: [
      'Solar-powered bungalows with ocean views',
      'Cliff-top sunset deck',
      'Reef access via private steps',
      'In-house surf concierge',
      'Daily breakfast + afternoon tea',
      'On-site water refill',
      'Shared boat to main surf break (once/day)'
    ],
    bookingInfo: {
      minNights: 3,
      packages: 'Private round-trip transfer add-on',
      upgrade: 'DBL share accommodation'
    }
  },
  {
    name: 'Budget Homestay Near Breaks',
    location: 'Mentawai Islands',
    type: 'Homestay',
    rating: 4.5,
    price: { usd: 65, eur: 60, idr: 975000 },
    duration: '2–14 Nights',
    perNight: true,
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200&h=800&fit=crop',
    amenities: ['WiFi', 'Fan room', 'Board storage', 'Laundry'],
    highlights: [
      'Simple, clean rooms run by local family',
      '10–15 min walk to beach break',
      'Community dinners',
      'Board rack & repair corner',
      'Fan room, mosquito net',
      'Breakfast included (local style)',
      'Laundry (small fee)'
    ],
    bookingInfo: {
      minNights: 2,
      packages: 'Great value for long-stay surfers',
      upgrade: 'Cashless payments accepted'
    }
  },
  {
    name: 'Luxury Beachfront Villa + Private Chef',
    location: 'Mentawai Islands',
    type: 'Private Villa',
    rating: 5.0,
    price: { usd: 1290, eur: 1186, idr: 19350000 },
    duration: '5–7 Nights',
    perNight: true,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop',
    amenities: ['Private pool', 'Private chef', 'Boat dock', 'Concierge'],
    highlights: [
      'Full-service private villa for groups/families',
      'Infinity pool & sunken lounge',
      'Private dock & tender boat',
      'Chef-curated Western/Asian menu',
      'Daily breakfast + private chef service',
      'Housekeeping & concierge',
      '1x boat trip to nearby island (per stay)',
      'Sleeps 6–8 guests'
    ],
    bookingInfo: {
      minNights: 5,
      packages: 'Security deposit required',
      upgrade: 'Add-on: surf guide / yoga teacher'
    }
  },
  {
    name: 'Private Island Micro-Resort',
    location: 'Mentawai Islands',
    type: 'All-Inclusive Resort',
    rating: 5.0,
    price: { usd: 440, eur: 405, idr: 6600000 },
    duration: '4–7 Nights',
    perNight: true,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
    amenities: ['All-inclusive', 'Private island', 'House reef', 'Catamaran'],
    highlights: [
      'Small-key resort occupying its own sand-fringed islet',
      'Only 6–10 keys for exclusivity',
      'House-reef snorkeling steps from room',
      'Sunset catamaran sail (weekly)',
      'All meals & non-alcoholic beverages',
      'Round-trip transfers from Padang',
      'Daily guided activity (rotating schedule)',
      'Ideal for honeymoons or special occasions'
    ],
    bookingInfo: {
      minNights: 4,
      packages: 'Adults 12+ only on select weeks',
      upgrade: 'All-inclusive pricing'
    }
  }
];

const StaysPage = () => {
  return (
    <>
      <StaysSEOOptimization />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-background via-secondary/30 to-background transition-colors duration-300 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-3">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=600&auto=format&fit=crop"
                alt="Decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop"
                alt="Decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop"
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
                Find Your Perfect Stay
              </h2>
              <p 
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                style={{ letterSpacing: '-0.02em' }}
              >
                From luxury resorts to authentic homestays, discover accommodations that match your travel style
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-6">
                All Stays
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 px-6">
                Surf Resorts
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 px-6">
                Boutique Hotels
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 px-6">
                Mountain Resorts
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 px-6">
                Beach Bungalows
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 px-6">
                Homestays
              </Button>
            </div>
          </div>
        </section>

        {/* Stays Grid */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900">
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
                  <Card className="h-full overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                    <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                      <img
                        src={stay.image}
                        alt={stay.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black/90 text-white border-0 backdrop-blur-sm drop-shadow-lg">{stay.type}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full drop-shadow-lg">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-white">{stay.rating}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">{stay.name}</h3>
                        <div className="flex items-center space-x-1 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                          <MapPin className="h-4 w-4 text-white" />
                          <span className="text-sm text-white">{stay.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                        <div>
                          <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${stay.price.usd}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">/night</span>
                        </div>
                        <div className="flex space-x-1 text-xs text-gray-500 dark:text-gray-400">
                          <span>€{stay.price.eur}</span>
                          <span>•</span>
                          <span>Rp {stay.price.idr.toLocaleString('id-ID')}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Amenities:</h4>
                        <div className="flex flex-wrap gap-2">
                          {stay.amenities.slice(0, 3).map((amenity, i) => (
                            <div key={i} className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs text-gray-700 dark:text-gray-300">
                              {amenity === 'WiFi' ? <Wifi className="h-3 w-3" /> : <Check className="h-3 w-3" />}
                              <span>{amenity}</span>
                            </div>
                          ))}
                          {stay.amenities.length > 3 && (
                            <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full text-xs text-gray-700 dark:text-gray-300 font-medium">
                              +{stay.amenities.length - 3} more
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm uppercase tracking-wide">Highlights:</h4>
                        <ul className="space-y-2">
                          {stay.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black py-6 text-base font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Need Help Finding the Perfect Stay?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Our accommodation specialists can help you find the perfect place to stay based on your preferences and budget
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                className="bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black px-8 py-6 text-lg font-semibold rounded-full shadow-lg"
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