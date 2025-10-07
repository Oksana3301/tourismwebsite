'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppContact } from './whatsapp-contact';

const WhatsAppFloatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <WhatsAppContact variant="icon" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-80"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-green-500 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">WisataPadang Support</h3>
                    <p className="text-xs opacity-90">Typically replies in minutes</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Message */}
              <div className="p-4">
                <p className="text-gray-600 mb-4">
                  Hi there! 👋 I'm here to help you plan your perfect Mentawai surf or Padang culture adventure. 
                  How can I assist you today?
                </p>
                
                <div className="space-y-2">
                  <WhatsAppContact 
                    tourName="Mentawai Surf Package" 
                    variant="button"
                    className="w-full"
                  />
                  
                  <WhatsAppContact 
                    tourName="Padang Culture Tour" 
                    variant="button"
                    className="w-full"
                  />
                  
                  <WhatsAppContact 
                    message="I have a general question about tours" 
                    variant="button"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 p-3 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>+{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '62 895-6105-24580'}</span>
                  </div>
                  <WhatsAppContact variant="icon" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center"
      >
        <Phone className="h-6 w-6" />
      </motion.button>
    </>
  );
};

export default WhatsAppFloatButton;