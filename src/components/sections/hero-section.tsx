'use client';

import { memo, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, Star, Award, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSmoothScroll } from '@/lib/animations';

const HeroSection = () => {
  const { scrollTo } = useSmoothScroll();
  const shouldReduceMotion = useReducedMotion();

  const handleBookNow = useCallback(() => {
    scrollTo('#booking');
  }, [scrollTo]);

  const handleExplore = useCallback(() => {
    scrollTo('#features');
  }, [scrollTo]);

  // Optimize animations based on reduced motion preference
  const fadeInVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleVariant = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop"
          alt="Beautiful tropical beach in West Sumatra - Paradise destination for surf and culture tours"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      </div>
      
      {/* Subtle Decorative Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/40 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-32 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-6xl mx-auto gpu-accelerate"
        >
          {/* Awards Badge - Flighty style with black badges */}
          <motion.div
            variants={scaleVariant}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-black text-white hover:bg-gray-900 rounded-full border-0 shadow-sm">
              <Award className="h-4 w-4 mr-2 text-yellow-400" />
              <span>5-Star Rated</span>
            </Badge>
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-black text-white hover:bg-gray-900 rounded-full border-0 shadow-sm">
              <Users className="h-4 w-4 mr-2" />
              <span>10,000+ Travelers</span>
            </Badge>
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold bg-black text-white hover:bg-gray-900 rounded-full border-0 shadow-sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              <span>Top Rated</span>
            </Badge>
          </motion.div>

          {/* Main Heading - MASSIVE Flighty Style */}
          <motion.h1
            variants={fadeInVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-black dark:text-white mb-8 tracking-tight leading-[0.9] gpu-transform"
            style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
          >
            The most complete
            <br />
            travel experience
          </motion.h1>

          {/* Subtitle - Clean and simple */}
          <motion.p
            variants={fadeInVariant}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-14 max-w-4xl mx-auto font-normal leading-relaxed"
            style={{ letterSpacing: '-0.02em' }}
          >
            Experience world-class surfing, rich culture, and unforgettable adventures. Your perfect Indonesian journey awaits.
          </motion.p>

          {/* CTA Buttons - Pure Flighty style */}
          <motion.div
            variants={fadeInVariant}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <Button
              onClick={handleBookNow}
              size="lg"
              className="bg-black hover:bg-gray-900 text-white px-10 py-7 text-lg font-semibold rounded-full shadow-sm hover:shadow-md"
            >
              Book Your Adventure
            </Button>
            
            <Button
              onClick={handleExplore}
              size="lg"
              variant="outline"
              className="px-10 py-7 text-lg font-semibold rounded-full border-2 border-gray-400 dark:border-gray-600 text-black dark:text-white bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 shadow-sm"
            >
              Explore Experiences
            </Button>
          </motion.div>

          {/* Social Proof Stats - Ultra Clean Flighty cards */}
          <motion.div
            variants={fadeInVariant}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            <div className="flex flex-col items-center justify-center space-y-2 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl font-bold text-black dark:text-white" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>10K+</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Travelers</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl font-bold text-black dark:text-white" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>50+</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Destinations</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center gap-1 text-4xl font-bold text-black dark:text-white" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>
                4.9
                <Star className="h-7 w-7 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Rating</div>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2 p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="text-4xl font-bold text-black dark:text-white" style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>15+</div>
              <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Years</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Simplified for performance */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center gpu-transform"
          >
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

// Memoize to prevent unnecessary re-renders
export default memo(HeroSection);
