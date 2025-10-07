'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Waves,
  Heart
} from 'lucide-react';
import { WhatsAppContact } from './whatsapp-contact';

const footerLinks = {
  destinations: [
    { name: 'Mentawai Islands', href: '/destinations/mentawai' },
    { name: 'Padang City', href: '/destinations/padang' },
    { name: 'Bukittinggi', href: '/destinations/bukittinggi' },
  ],
  experiences: [
    { name: 'Surf Packages', href: '/experiences' },
    { name: 'Cultural Tours', href: '/experiences' },
    { name: 'Custom Itineraries', href: '/itineraries' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Trip Planner', href: '/trip-planner' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-background text-foreground border-t border-border overflow-hidden transition-colors duration-300">
      {/* Very subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-sm">
                <Waves className="h-5 w-5 text-white dark:text-black" />
              </div>
              <span className="text-xl font-bold text-foreground">SumateraWay</span>
            </div>
            
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Plan, book, and glide across West Sumatra. Experience world-class surfing and rich culture with our expert-guided tours.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-black dark:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-black dark:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-105"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-black dark:text-white" />
              </a>
            </div>

            {/* WhatsApp Contact */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 font-medium">Need help? Contact us</p>
              <WhatsAppContact variant="button" className="w-full bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-100 text-white dark:text-black border-0" />
            </div>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Destinations</h3>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Experiences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Experiences</h3>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-black dark:text-white">Support</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors text-sm inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Padang, West Sumatra<br />Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+62 895-6105-24580</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>hello@sumateraway.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <span>© {new Date().getFullYear()} SumateraWay</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 fill-red-500 text-red-500" /> in Indonesia
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-700 dark:text-gray-300">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium">Bitcoin Accepted</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium">Secure Payments</span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
