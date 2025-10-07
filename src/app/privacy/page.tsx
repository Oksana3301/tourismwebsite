'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const PrivacyPage = () => {
  const sections = [
    {
      title: 'Information We Collect',
      icon: <Database className="h-6 w-6" />,
      content: [
        'Personal Information: When you book with us, we may collect your name, email address, phone number, and payment information.',
        'Travel Information: We collect details about your travel plans, including destinations, dates, number of travelers, and special requirements.',
        'Device Information: We may collect information about your computer and connection to our website, including your IP address, browser type, and operating system.',
        'Usage Information: We collect information about how you use our website, including pages visited, time spent on our site, and links clicked.',
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: <Eye className="h-6 w-6" />,
      content: [
        'To process and fulfill your booking requests and provide you with the services you have requested.',
        'To communicate with you about your booking, including confirmations, updates, and important information about your trip.',
        'To improve our website, services, and customer experience based on your usage and feedback.',
        'To send you marketing communications with your consent, including information about special offers, new destinations, and travel tips.',
        'To comply with legal obligations and protect our rights and the rights of others.',
      ],
    },
    {
      title: 'Information Sharing and Disclosure',
      icon: <Lock className="h-6 w-6" />,
      content: [
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy.',
        'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, such as payment processors, travel suppliers, and customer support providers.',
        'We may disclose your information if required by law or in good faith belief that such action is necessary to comply with legal processes, protect and defend the rights or property of PT. Kurnia Cahaya Ilahi, or protect the personal safety of users of the public.',
      ],
    },
    {
      title: 'Data Security',
      icon: <Shield className="h-6 w-6" />,
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'We use encryption to protect sensitive information such as credit card details during transmission.',
        'We regularly review our security measures to ensure they are appropriate for the nature of the information we collect and the potential risks to its security.',
      ],
    },
    {
      title: 'Your Rights',
      icon: <Eye className="h-6 w-6" />,
      content: [
        'You have the right to access, update, and correct your personal information.',
        'You have the right to object to or restrict certain processing of your personal information.',
        'You have the right to request the deletion of your personal information in certain circumstances.',
        'You have the right to withdraw your consent for marketing communications at any time.',
        'To exercise these rights, please contact us at privacy@sumateraway.com.',
      ],
    },
    {
      title: 'Cookies',
      icon: <Database className="h-6 w-6" />,
      content: [
        'We use cookies to enhance your experience on our website, analyze site traffic, and for marketing purposes.',
        'A cookie is a small file that is placed on your computer\'s hard drive by a web page server. Cookies do not collect personal information.',
        'You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.',
      ],
    },
    {
      title: 'Changes to This Privacy Policy',
      icon: <Database className="h-6 w-6" />,
      content: [
        'We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.',
        'You are advised to review this privacy policy periodically for any changes.',
      ],
    },
    {
      title: 'Contact Us',
      icon: <Shield className="h-6 w-6" />,
      content: [
        'If you have any questions about this Privacy Policy, please contact us:',
        'Company: PT. Kurnia Cahaya Ilahi (SumateraWay)',
        'Email: privacy@sumateraway.com',
        'Address: Jl. Sudirman No. 123, Padang, West Sumatra, Indonesia',
        'Phone: +62 895-6105-24580',
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=2000&h=1200&fit=crop"
            alt="Privacy Hero"
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
              <Shield className="mr-2 h-4 w-4" />
              Your Privacy Matters
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Privacy <span className="text-blue-400">Policy</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              How we collect, use, and protect your personal information
            </p>

            <div className="inline-block">
              <p className="text-white/80 text-sm">Last Updated: January 15, 2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white dark:from-black dark:via-gray-900/30 dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  This Privacy Policy describes how <span className="font-bold text-black dark:text-white">PT. Kurnia Cahaya Ilahi</span> (operating as SumateraWay) collects, uses, and protects your personal information when you use our website and services.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-black dark:text-white">{section.title}</h2>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <li key={pIndex} className="flex items-start text-gray-700 dark:text-gray-300 leading-relaxed">
                          <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2.5 mr-3 shrink-0" />
                          <span>{paragraph}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Concerns About Your <span className="text-blue-600 dark:text-blue-400">Privacy?</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              If you have any questions or concerns about how we handle your personal information
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
                      <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">Data Protection Officer</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">For specific privacy concerns</p>
                  <a 
                    href="mailto:dpo@sumateraway.com" 
                    className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    Contact DPO
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
                      <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">Terms of Service</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Learn about our terms</p>
                  <Button
                    onClick={() => window.location.href = '/terms'}
                    className="bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    View Terms
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default PrivacyPage;
