'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        'We may disclose your information if required by law or in good faith belief that such action is necessary to comply with legal processes, protect and defend the rights or property of Wisata Padang, or protect the personal safety of users of the public.',
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
        'To exercise these rights, please contact us at privacy@wisatapadang.com.',
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
      title: 'Third-Party Links',
      icon: <Lock className="h-6 w-6" />,
      content: [
        'Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party\'s site.',
        'We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
      ],
    },
    {
      title: 'Children\'s Privacy',
      icon: <Shield className="h-6 w-6" />,
      content: [
        'Our website is not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.',
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
        'Email: privacy@wisatapadang.com',
        'Address: Jl. Sudirman No. 123, Padang, West Sumatra, Indonesia',
        'Phone: +62 812-3456-7890',
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
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-purple-600">Policy</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Last Updated: October 1, 2023</CardTitle>
                <CardDescription>
                  This Privacy Policy describes how Wisata Padang collects, uses, and protects your personal information when you use our website and services.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <div className="flex items-center mb-3">
                      <div className="text-purple-600 mr-3">
                        {section.icon}
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    <ul className="space-y-2">
                      {section.content.map((paragraph, pIndex) => (
                        <li key={pIndex} className="text-gray-700">
                          {paragraph}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Concerns about your privacy?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              If you have any questions or concerns about how we handle your personal information, please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Data Protection Officer</h3>
                  <p className="text-gray-600 mb-4">For specific privacy concerns</p>
                  <a href="mailto:dpo@wisatapadang.com" className="text-purple-600 hover:text-purple-800 font-medium">
                    dpo@wisatapadang.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Lock className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Terms of Service</h3>
                  <p className="text-gray-600 mb-4">Learn about our terms and conditions</p>
                  <a href="/terms" className="text-purple-600 hover:text-purple-800 font-medium">
                    View Terms of Service
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

export default PrivacyPage;