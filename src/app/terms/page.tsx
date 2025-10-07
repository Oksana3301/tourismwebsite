'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { FileText, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const TermsPage = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using PT. Kurnia Cahaya Ilahi (SumateraWay) website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to these terms, you are prohibited from using or accessing this site. The materials contained within this website are protected by applicable copyright and trademark law.',
      ],
    },
    {
      title: '2. Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials on PT. Kurnia Cahaya Ilahi (SumateraWay)\'s website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not:',
        'modify or copy the materials;',
        'use the materials for any commercial purpose, or for any public display;',
        'attempt to decompile or reverse engineer any software contained on PT. Kurnia Cahaya Ilahi (SumateraWay)\'s website;',
        'remove any copyright or other proprietary notations from the materials;',
        'transfer the materials to another person or "mirror" the materials on any other server.',
      ],
    },
    {
      title: '3. Disclaimer',
      content: [
        'The materials on PT. Kurnia Cahaya Ilahi (SumateraWay)\'s website are provided on an "as is" basis. PT. Kurnia Cahaya Ilahi makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, PT. Kurnia Cahaya Ilahi does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
      ],
    },
    {
      title: '4. Limitations',
      content: [
        'In no event shall PT. Kurnia Cahaya Ilahi or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PT. Kurnia Cahaya Ilahi (SumateraWay)\'s website, even if PT. Kurnia Cahaya Ilahi or an authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, in such jurisdictions liability shall be limited to the maximum extent permitted by law.',
      ],
    },
    {
      title: '5. Accuracy of Materials',
      content: [
        'The materials appearing on PT. Kurnia Cahaya Ilahi (SumateraWay)\'s website could include technical, typographical, or photographic errors. PT. Kurnia Cahaya Ilahi does not warrant that any of the materials on its website are accurate, complete, or current. PT. Kurnia Cahaya Ilahi may make changes to the materials contained on its website at any time without notice.',
        'PT. Kurnia Cahaya Ilahi does not, however, make any commitment to update the materials.',
      ],
    },
    {
      title: '6. Links',
      content: [
        'PT. Kurnia Cahaya Ilahi has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by PT. Kurnia Cahaya Ilahi of the site. Use of any such linked website is at the user\'s own risk.',
      ],
    },
    {
      title: '7. Modifications',
      content: [
        'PT. Kurnia Cahaya Ilahi may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
      ],
    },
    {
      title: '8. Governing Law',
      content: [
        'These terms and conditions are governed by and construed in accordance with the laws of Indonesia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.',
      ],
    },
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=2000&h=1200&fit=crop"
            alt="Terms Hero"
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
              <FileText className="mr-2 h-4 w-4" />
              Legal Agreement
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Terms of <span className="text-blue-400">Service</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
              The terms and conditions that govern your use of our website and services
            </p>

            <div className="inline-block">
              <p className="text-white/80 text-sm">Last Updated: January 15, 2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                  Please read these Terms of Service carefully before using <span className="font-bold text-black dark:text-white">PT. Kurnia Cahaya Ilahi (SumateraWay)</span> website and services.
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
                    <h2 className="text-2xl font-bold text-black dark:text-white mb-4">{section.title}</h2>
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
              Questions About Our <span className="text-blue-600 dark:text-blue-400">Terms?</span>
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              If you have any questions about our Terms of Service, please don&apos;t hesitate to contact us
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
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">Email Us</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">For detailed inquiries about our terms</p>
                  <a 
                    href="mailto:admin@sumateraway.com" 
                    className="inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    Contact Legal
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
                      <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-black dark:text-white">Privacy Policy</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">Learn how we protect your data</p>
                  <Button
                    onClick={() => window.location.href = '/privacy'}
                    className="bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    View Privacy
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

export default TermsPage;
