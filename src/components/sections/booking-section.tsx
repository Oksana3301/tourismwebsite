'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Mail, Phone, User, CreditCard, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    travelers: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to payment page or show booking confirmation
    window.location.href = '/payment';
  };

  const features = [
    { icon: Shield, text: 'Travel insurance included' },
    { icon: Calendar, text: 'Free cancellation up to 24h' },
    { icon: CreditCard, text: 'Secure payment processing' },
    { icon: Check, text: 'Instant confirmation' },
  ];

  return (
    <section id="booking" className="relative py-32 bg-gradient-to-b from-background via-secondary/30 to-background transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Image */}
      <div className="absolute inset-0 pointer-events-none opacity-3 dark:opacity-2">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1400&auto=format&fit=crop"
          alt="West Sumatra travel booking - Plan your adventure today"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/95 to-background/98" />
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
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 tracking-tight leading-tight"
            style={{ fontWeight: 900, letterSpacing: '-0.05em' }}
          >
            Book Your Adventure
          </h2>
          <p 
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            style={{ letterSpacing: '-0.02em' }}
          >
            Start your journey in seconds. Simple, secure, and hassle-free booking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-12 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Trip Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Trip Details</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6" suppressHydrationWarning>
                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-sm font-semibold text-black dark:text-white">
                        Destination
                      </Label>
                      <Select
                        value={formData.destination}
                        onValueChange={(value) => handleInputChange('destination', value)}
                      >
                        <SelectTrigger className="h-12 rounded-xl border-gray-300 dark:border-gray-700">
                          <SelectValue placeholder="Choose destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mentawai">Mentawai Surf Paradise</SelectItem>
                          <SelectItem value="padang">Padang Cultural Journey</SelectItem>
                          <SelectItem value="bukittinggi">Bukittinggi Highland Adventure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-semibold text-black dark:text-white">
                        Departure Date
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                          className="h-12 pl-10 rounded-xl border-gray-300 dark:border-gray-700"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="travelers" className="text-sm font-semibold text-black dark:text-white">
                        Number of Travelers
                      </Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="travelers"
                          type="number"
                          min="1"
                          max="12"
                          value={formData.travelers}
                          onChange={(e) => handleInputChange('travelers', e.target.value)}
                          className="h-12 pl-10 rounded-xl border-gray-300 dark:border-gray-700"
                          placeholder="1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Personal Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6" suppressHydrationWarning>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-black dark:text-white">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="h-12 pl-10 rounded-xl border-gray-300 dark:border-gray-700"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-black dark:text-white">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="h-12 pl-10 rounded-xl border-gray-300 dark:border-gray-700"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-semibold text-black dark:text-white">
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-12 pl-10 rounded-xl border-gray-300 dark:border-gray-700"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-900 dark:hover:bg-gray-100 h-14 text-lg font-semibold rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Continue to Payment
                  </Button>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                    You won't be charged yet. Review your booking before payment.
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Features */}
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 rounded-2xl">
              <CardContent className="p-0 space-y-6">
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Why Book With Us</h3>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-black dark:bg-white mt-0.5">
                      <feature.icon className="h-4 w-4 text-white dark:text-black" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="bg-black border-0 p-8 rounded-2xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-3 text-white">Need Help?</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Our team is available 24/7 to assist you with any questions.
                </p>
                <Button
                  className="w-full bg-white text-black hover:bg-black hover:text-white border-2 border-white h-12 rounded-full font-semibold transition-all duration-300"
                  onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                >
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
