'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'California, USA',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=000000&color=ffffff&size=128&bold=true',
    rating: 5,
    quote: 'The best surf trip of my life! The waves in Mentawai were absolutely incredible, and the guides knew every single secret spot. Professional photography captured memories I will treasure forever.',
    trip: 'Mentawai Surf Paradise',
    date: 'September 2024'
  },
  {
    name: 'David Chen',
    location: 'Singapore',
    avatar: 'https://ui-avatars.com/api/?name=David+Chen&background=000000&color=ffffff&size=128&bold=true',
    rating: 5,
    quote: 'Wisata Padang exceeded all expectations. The cultural immersion was authentic, the food was phenomenal, and our guide made us feel like family. Booking was seamless and support was instant.',
    trip: 'Padang Cultural Journey',
    date: 'August 2024'
  },
  {
    name: 'Emma Williams',
    location: 'London, UK',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Williams&background=000000&color=ffffff&size=128&bold=true',
    rating: 5,
    quote: 'Absolutely stunning! The highland trek through Bukittinggi was breathtaking. Perfect organization, incredible views, and the local village experience was something I will never forget.',
    trip: 'Bukittinggi Highland Adventure',
    date: 'July 2024'
  },
  {
    name: 'Michael Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Rodriguez&background=000000&color=ffffff&size=128&bold=true',
    rating: 5,
    quote: 'Top-notch service from start to finish. The mobile app made everything easy, real-time tracking gave us peace of mind, and the included travel insurance was comprehensive. Highly recommended!',
    trip: 'Mentawai Surf Paradise',
    date: 'October 2024'
  },
  {
    name: 'Sophie Martin',
    location: 'Paris, France',
    avatar: 'https://ui-avatars.com/api/?name=Sophie+Martin&background=000000&color=ffffff&size=128&bold=true',
    rating: 5,
    quote: 'What an adventure! The cooking class in Padang was a highlight - now I can make authentic Rendang at home. Every detail was thoughtfully planned. Worth every penny!',
    trip: 'Padang Cultural Journey',
    date: 'September 2024'
  },
  {
    name: 'James Anderson',
    location: 'Melbourne, Australia',
    avatar: 'https://ui-avatars.com/api/?name=James+Anderson&background=000000&color=ffffff&size=128&bold=true',
    rating: 5,
    quote: 'Perfect for adventure seekers! The blend of trekking, culture, and nature in Bukittinggi was phenomenal. Guides were knowledgeable and accommodations were comfortable. Best trip ever!',
    trip: 'Bukittinggi Highland Adventure',
    date: 'August 2024'
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-32 bg-white dark:bg-black transition-colors duration-300">
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
            What Our Travelers Say
          </h2>
          <p 
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.02em' }}
          >
            Real experiences from adventurers who discovered the magic of West Sumatra with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-8 rounded-2xl flex flex-col">
                <CardContent className="flex-grow p-0 flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-black dark:text-white opacity-20" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  {/* Trip Info */}
                  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm font-semibold text-black dark:text-white">{testimonial.trip}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-gray-200 dark:border-gray-800">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-black dark:bg-white text-white dark:text-black font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-black dark:text-white text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              4.9
            </div>
            <div className="flex items-center justify-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
          </div>
          
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              10K+
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Happy Travelers</p>
          </div>
          
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              98%
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
          </div>
          
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              15+
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
