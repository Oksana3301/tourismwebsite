'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FAQSEOOptimization } from '@/components/seo/seo';
import { BreadcrumbSchema } from '@/components/seo/structured-data';

const FAQPage = () => {
  const faqCategories = [
    {
      title: 'Booking & Reservations',
      description: 'Find answers about booking your adventure',
      items: [
        {
          question: 'How do I make a booking?',
          answer: 'You can make a booking by selecting your desired destination and dates on our website, then filling out the booking form. Once submitted, you will receive a confirmation email with payment instructions.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including credit/debit cards (via Stripe), bank transfers, and cryptocurrency (Bitcoin, Ethereum). All payments are processed securely.',
        },
        {
          question: 'Is a deposit required to secure my booking?',
          answer: 'Yes, a 30% deposit is required to secure your booking. The remaining balance is due 30 days before your departure date.',
        },
        {
          question: 'Can I modify or cancel my booking?',
          answer: 'Yes, you can modify your booking up to 30 days before departure with no additional fees. Cancellations made more than 30 days before departure receive a full refund minus a 5% processing fee.',
        },
      ],
    },
    {
      title: 'Travel Information',
      description: 'Everything you need to know about your trip',
      items: [
        {
          question: 'What should I pack for my trip?',
          answer: 'We provide a detailed packing list specific to your destination. Generally, you should bring lightweight clothing, swimwear, reef-safe sunscreen, a hat, sunglasses, and any personal medications.',
        },
        {
          question: 'Do you provide airport transfers?',
          answer: 'Yes, we provide airport transfers for all our packages. Our driver will meet you at the airport with a sign displaying your name.',
        },
        {
          question: 'What is the best time to visit West Sumatra?',
          answer: 'The best time to visit is during the dry season, from May to September. However, West Sumatra is beautiful year-round, with the Mentawai Islands offering consistent surf conditions throughout the year.',
        },
        {
          question: 'Do I need travel insurance?',
          answer: 'We strongly recommend purchasing travel insurance that covers trip cancellation, medical emergencies, and adventure activities. We can provide recommendations for suitable policies.',
        },
      ],
    },
    {
      title: 'Safety & Health',
      description: 'Your safety and well-being are our priority',
      items: [
        {
          question: 'How do you ensure safety during activities?',
          answer: 'All our activities are led by certified professionals with extensive experience. We maintain high safety standards, provide proper equipment, and conduct thorough safety briefings before each activity.',
        },
        {
          question: 'What medical facilities are available?',
          answer: 'We have partnerships with local clinics and hospitals in all our destinations. Our guides are trained in first aid and carry comprehensive medical kits. For serious emergencies, we have arrangements for medical evacuation.',
        },
        {
          question: 'Are there any health requirements or vaccinations needed?',
          answer: 'We recommend consulting with a travel health specialist 4-6 weeks before your trip. Standard vaccinations like Hepatitis A, Typhoid, and Tetanus are generally recommended. Malaria prophylaxis may be advised depending on your destination.',
        },
        {
          question: 'What happens in case of bad weather?',
          answer: 'We continuously monitor weather conditions and have contingency plans. In case of unsafe conditions, we will reschedule activities or offer alternative experiences. Your safety is our top priority.',
        },
      ],
    },
    {
      title: 'Accommodation & Amenities',
      description: 'Details about where you will stay',
      items: [
        {
          question: 'What type of accommodation can I expect?',
          answer: 'We offer a range of accommodation options from eco-lodges to beachfront bungalows, depending on your chosen destination. All accommodations are carefully selected for comfort, safety, and sustainability.',
        },
        {
          question: 'Are meals included in the packages?',
          answer: 'Yes, all our packages include daily meals featuring local and international cuisine. We can accommodate dietary restrictions with advance notice.',
        },
        {
          question: 'Is Wi-Fi available at the accommodations?',
          answer: 'Most of our accommodations offer Wi-Fi, though the speed and reliability may vary depending on the location. We will provide you with specific details about connectivity when you book.',
        },
        {
          question: 'Can I request specific room types or preferences?',
          answer: 'Yes, we do our best to accommodate room preferences based on availability. Please let us know your requirements when booking, and we will do our best to fulfill them.',
        },
      ],
    },
  ];

  return (
    <>
      <FAQSEOOptimization />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sumateraway.com/' },
          { name: 'FAQ', url: 'https://sumateraway.com/faq' }
        ]}
      />
      <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=2000&h=1200&fit=crop"
            alt="FAQ Hero"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Badge className="mb-6 bg-white/90 dark:bg-black/90 text-black dark:text-white backdrop-blur-sm">
              <HelpCircle className="mr-2 h-4 w-4" />
              Frequently Asked Questions
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              How Can We <span className="text-blue-400">Help You?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Find answers to common questions about our tours, booking process, and travel arrangements
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black dark:via-gray-900/30 dark:to-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              Browse <span className="text-blue-600 dark:text-blue-400">FAQ Categories</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Select a category to find the information you need
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {category.description}
                    </p>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem 
                          key={itemIndex} 
                          value={`item-${index}-${itemIndex}`}
                          className="border-b border-gray-200 dark:border-gray-800"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4 text-black dark:text-white font-semibold">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4 leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-32 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              Still Have <span className="text-blue-600 dark:text-blue-400">Questions?</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Our team is here to help with any additional questions you might have
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">Email Support</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Get detailed answers within 24 hours</p>
                  <a 
                    href="mailto:admin@sumateraway.com" 
                    className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    Send Email
                  </a>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">WhatsApp Chat</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Chat with our support team</p>
                  <Button
                    onClick={() => window.open('https://wa.me/62895610524580', '_blank')}
                    className="bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full">
                      <Phone className="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">Emergency</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">24/7 emergency assistance</p>
                  <a 
                    href="tel:+62895610524580" 
                    className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    Call Now
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
    </>
  );
};

export default FAQPage;
