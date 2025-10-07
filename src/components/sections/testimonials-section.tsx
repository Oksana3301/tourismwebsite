'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcus T.',
    location: 'Perth, Australia',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    quote: 'Honestly didn\'t expect much but wow... the waves were firing! Our guide Adi knew exactly where to go each day based on swell. Got some of the best barrels of my life. Only downside was having to leave haha',
    trip: 'Mentawai Surf Charter',
    date: 'October 2024'
  },
  {
    name: 'Rachel K.',
    location: 'Vancouver, Canada',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    quote: 'My husband and I wanted something different from the usual Bali trip. This was perfect. The local village visit was eye-opening and the food... omg the rendang! Also appreciated the WhatsApp support when we had questions.',
    trip: 'Culture & Nature Package',
    date: 'September 2024'
  },
  {
    name: 'Tom H.',
    location: 'Manchester, UK',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    quote: 'Travelled solo, was a bit nervous tbh. But the group was brilliant and the guides made everyone feel welcome. Bukittinggi highlands are mental - like nothing I\'ve seen before. Already planning to come back next year.',
    trip: 'Highland Trekking',
    date: 'August 2024'
  },
  {
    name: 'Lisa M.',
    location: 'California, USA',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    quote: 'Found this on Reddit and took a chance. Zero regrets. The surf camp was super chill, meals were included which was great, and met some awesome people. Price was fair compared to other quotes I got.',
    trip: 'Surf Camp Mentawai',
    date: 'November 2024'
  },
  {
    name: 'Johan S.',
    location: 'Stockholm, Sweden',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    quote: 'Booked the family package for me, wife and two kids (9 and 12). They loved it! Snorkeling was amazing, the village craft workshop was educational, and accommodations were clean and comfortable. Highly recommend for families.',
    trip: 'Family Island Discovery',
    date: 'July 2024'
  },
  {
    name: 'Priya N.',
    location: 'Singapore',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=faces',
    rating: 5,
    quote: 'Did the wellness retreat with my sister. It was exactly what we needed - morning yoga, afternoon surf, healthy food. Not too structured but enough activities. The sunset views from the villa were insane. Will def be back!',
    trip: 'Wellness & Waves Retreat',
    date: 'September 2024'
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
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-gray-200 dark:border-gray-700 ring-2 ring-offset-2 ring-gray-100 dark:ring-gray-800 dark:ring-offset-gray-900">
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white font-semibold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-black dark:text-white text-base">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
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
            <p className="text-sm text-gray-700 dark:text-gray-300">Average Rating</p>
          </div>
          
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              10K+
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Happy Travelers</p>
          </div>
          
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              98%
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Satisfaction Rate</p>
          </div>
          
          <div className="text-center">
            <div 
              className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2"
              style={{ fontWeight: 900, letterSpacing: '-0.03em' }}
            >
              15+
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
