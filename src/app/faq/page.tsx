'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FAQPage = () => {
  const faqCategories = [
    {
      title: 'Booking & Reservations',
      description: 'Find answers about booking your adventure',
      items: [
        {
          question: 'How do I make a booking?',
          answer: 'You can make a booking by selecting your desired destination and dates on our website, then filling out the booking form. Once submitted, you\'ll receive a confirmation email with payment instructions.',
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
      description: 'Details about where you\'ll stay',
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
          answer: 'Most of our accommodations offer Wi-Fi, though the speed and reliability may vary depending on the location. We\'ll provide you with specific details about connectivity when you book.',
        },
        {
          question: 'Can I request specific room types or preferences?',
          answer: 'Yes, we do our best to accommodate room preferences based on availability. Please let us know your requirements when booking, and we\'ll do our best to fulfill them.',
        },
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-pink-900/20"></div>
          <div className="absolute inset-0 bg-[url('/images/hero/padang-hero.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-purple-100 rounded-full">
                <HelpCircle className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Find answers to common questions about our tours, booking process, and travel arrangements
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                          <AccordionTrigger className="text-left hover:no-underline">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
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

      {/* Additional Help Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still have questions?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Our team is here to help with any additional questions you might have about your adventure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">Get detailed answers within 24 hours</p>
                  <a href="mailto:info@wisatapadang.com" className="text-purple-600 hover:text-purple-800 font-medium">
                    info@wisatapadang.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <HelpCircle className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Chat with our support team</p>
                  <button className="text-purple-600 hover:text-purple-800 font-medium">
                    Start Chat
                  </button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-red-100 rounded-full">
                      <AlertCircle className="h-8 w-8 text-red-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Emergency</h3>
                  <p className="text-gray-600 mb-4">24/7 emergency assistance</p>
                  <a href="tel:+6281234567890" className="text-purple-600 hover:text-purple-800 font-medium">
                    +62 812-3456-7890
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FAQPage;