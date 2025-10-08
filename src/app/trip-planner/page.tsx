'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Ship, Clock, Calendar, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TripPlannerSEOOptimization } from '@/components/seo/seo';
import { TripSchema, BreadcrumbSchema } from '@/components/seo/structured-data';
import { Timeline } from '@/components/trip-planner/timeline';
import { LegCard } from '@/components/trip-planner/leg-card';
import { SeasonDial } from '@/components/trip-planner/season-dial';
import { TransportPicker } from '@/components/trip-planner/transport-picker';
import { DestinationCard } from '@/components/trip-planner/destination-card';
import { PaymentMethodCard } from '@/components/trip-planner/payment-method-card';
import { WarningBanner } from '@/components/trip-planner/warning-banner';
import { useState } from 'react';

const destinations = [
  {
    name: 'Padang',
    description: 'Gateway to West Sumatra with rich Minangkabau culture, stunning beaches, and legendary cuisine.',
    duration: '2-3 days',
    highlights: ['Minangkabau cuisine', 'Beach sunset', 'Cultural sites'],
    price: 'IDR 1.5M',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&h=600&fit=crop',
  },
  {
    name: 'Bukittinggi',
    description: 'Highland town with cool climate, colonial architecture, and spectacular natural wonders.',
    duration: '2-3 days',
    highlights: ['Ngarai Sianok canyon', 'Jam Gadang clock tower', 'Cultural villages'],
    price: 'IDR 2M',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
  },
  {
    name: 'Harau Valley',
    description: 'Hidden gem with towering cliffs, rice fields, and cascading waterfalls.',
    duration: '1-2 days',
    highlights: ['Rock climbing', 'Waterfall trekking', 'Rice terraces'],
    price: 'IDR 1.2M',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop',
  },
  {
    name: 'Mentawai Islands',
    description: 'World-class surf destination with pristine beaches and traditional villages.',
    duration: '5-10 days',
    highlights: ['World-class surf breaks', 'Island hopping', 'Traditional culture'],
    price: 'IDR 8M',
    image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&h=600&fit=crop',
  },
];

const TripPlannerPage = () => {
  const [selectedTransport, setSelectedTransport] = useState<string | undefined>(undefined);
  const [selectedPayment, setSelectedPayment] = useState<string | undefined>(undefined);

  return (
    <>
      <TripPlannerSEOOptimization />
      <TripSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sumateraway.com/' },
          { name: 'Trip Planner', url: 'https://sumateraway.com/trip-planner' }
        ]}
      />
      <PageWrapper>
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-b from-background via-secondary/30 to-background transition-colors duration-300 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-3">
            <div className="absolute top-20 right-10 w-64 h-64 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=600&fit=crop"
                alt="Plan your perfect West Sumatra itinerary"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&h=600&fit=crop"
                alt="Surfing and island hopping itinerary planner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop"
                alt="Custom adventure tour planning for West Sumatra"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-black dark:bg-white text-white dark:text-black px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                SumateraWay Trip Planner
              </Badge>
              
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black dark:text-white mb-6 tracking-tight leading-tight"
                style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
              >
                Plan Your Perfect Journey
              </h1>
              
              <p
                className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                style={{ letterSpacing: '-0.02em' }}
              >
                Build your perfect itinerary with real-time ferry schedules, flight connections, and verified stays
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button
                  size="lg"
                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 px-10 py-6 text-base font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Build Itinerary
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-10 py-6 border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 rounded-full text-base font-semibold transition-all duration-300"
                >
                  <Ship className="mr-2 h-5 w-5" />
                  See Ferry Windows
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="font-medium">Live ferry updates</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-medium">Verified operators</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="font-medium">24/7 support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-32 bg-white dark:bg-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                <SeasonDial />
                
                <WarningBanner
                  type="info"
                  title="Ferry Schedule Note"
                  message="Ferry to Mentawai operates Mon, Wed, Fri. Plan buffer nights in Padang accordingly."
                />
              </div>

              {/* Right Column - Main Timeline */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <h2
                    className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-3"
                    style={{ fontWeight: 800, letterSpacing: '-0.03em' }}
                  >
                    Sample Itinerary
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    A typical 10-day West Sumatra & Mentawai adventure
                  </p>
                </div>

                <Timeline>
                  <Timeline.Item>
                    <LegCard
                      type="flight"
                      origin="Jakarta (CGK)"
                      destination="Padang (PDG)"
                      date="Mon, June 15, 2025"
                      time="08:00"
                      duration="1h 30m"
                      title="Arrival Flight"
                      description="Lion Air LNI 123"
                      verified="2 days ago"
                      price="IDR 850K"
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <LegCard
                      type="hotel"
                      destination="Padang City"
                      date="Mon-Tue, June 15-16"
                      title="Buffer Night in Padang"
                      description="Hotel Pangeran Beach (4★)"
                      verified="1 week ago"
                      warning="Buffer night suggested for ferry connection"
                      price="IDR 450K"
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <LegCard
                      type="ferry"
                      origin="Padang Port"
                      destination="Mentawai (Tua Pejat)"
                      date="Wed, June 17, 2025"
                      time="20:00"
                      duration="10h overnight"
                      title="Ferry to Mentawai"
                      description="Public ferry - Economy class"
                      verified="Today"
                      price="IDR 150K"
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <LegCard
                      type="charter"
                      origin="Tua Pejat"
                      destination="Surf Resort"
                      date="Thu, June 18, 2025"
                      time="08:00"
                      duration="2h"
                      title="Charter to Resort"
                      description="Speedboat transfer included"
                      verified="3 days ago"
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <LegCard
                      type="hotel"
                      destination="Mentawai Islands"
                      date="June 18-25, 2025"
                      title="Island Stay (7 nights)"
                      description="Macaronis Surf Resort - Full board"
                      verified="1 week ago"
                      price="IDR 21M"
                    />
                  </Timeline.Item>

                  <Timeline.Item>
                    <LegCard
                      type="flight"
                      origin="Mentawai (RKO)"
                      destination="Padang (PDG)"
                      date="Fri, June 26, 2025"
                      time="14:00"
                      duration="45m"
                      title="Return Flight"
                      description="Charter flight"
                      verified="5 days ago"
                      price="IDR 1.2M"
                    />
                  </Timeline.Item>

                  <Timeline.Item isLast>
                    <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-2xl border-2 border-green-200 dark:border-green-900">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Trip Complete!
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Total: IDR 24.05M (~USD 1,600)
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1" variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button className="flex-1" variant="outline">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share Trip
                        </Button>
                      </div>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black dark:via-gray-900/30 dark:to-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
                className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                style={{ letterSpacing: '-0.02em' }}
              >
                From world-class surf breaks to cultural treasures, discover the best of West Sumatra
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
              <motion.div
                  key={destination.name}
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <DestinationCard
                    name={destination.name}
                    description={destination.description}
                    duration={destination.duration}
                    highlights={destination.highlights}
                    price={destination.price}
                    image={destination.image}
                    onAdd={() => console.log(`Added ${destination.name}`)}
                  />
                </motion.div>
              ))}
            </div>
                </div>
        </section>

        {/* Transport & Payment Section */}
        <section className="py-32 bg-white dark:bg-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <TransportPicker
                  from="Padang"
                  to="Mentawai"
                  onSelect={(option) => setSelectedTransport(option.id)}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <PaymentMethodCard
                  selected={selectedPayment}
                  onSelect={setSelectedPayment}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black dark:via-gray-900/30 dark:to-black transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white mb-6 tracking-tight leading-tight"
                style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
              >
                Ready to Start Your Adventure?
              </h2>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Contact us via WhatsApp for personalized trip planning assistance
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-base font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </Button>
            </motion.div>
          </div>
        </section>
      </PageWrapper>
    </>
  );
};

export default TripPlannerPage;