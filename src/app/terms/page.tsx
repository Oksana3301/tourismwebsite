'use client';
import PageWrapper from '@/components/layout/page-wrapper';
import { motion } from 'framer-motion';
import { FileText, Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TermsPage = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using Wisata Padang website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to these terms, you are prohibited from using or accessing this site. The materials contained within this website are protected by applicable copyright and trademark law.',
      ],
    },
    {
      title: '2. Use License',
      content: [
        'Permission is granted to temporarily download one copy of the materials on Wisata Padang\'s website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not:',
        'modify or copy the materials;',
        'use the materials for any commercial purpose, or for any public display;',
        'attempt to decompile or reverse engineer any software contained on Wisata Padang\'s website;',
        'remove any copyright or other proprietary notations from the materials;',
        'transfer the materials to another person or "mirror" the materials on any other server.',
      ],
    },
    {
      title: '3. Disclaimer',
      content: [
        'The materials on Wisata Padang\'s website are provided on an "as is" basis. Wisata Padang makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        'Further, Wisata Padang does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.',
      ],
    },
    {
      title: '4. Limitations',
      content: [
        'In no event shall Wisata Padang or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Wisata Padang\'s website, even if Wisata Padang or a Wisata Padang authorized representative has been notified orally or in writing of the possibility of such damage.',
        'Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, in such jurisdictions liability shall be limited to the maximum extent permitted by law.',
      ],
    },
    {
      title: '5. Accuracy of Materials',
      content: [
        'The materials appearing on Wisata Padang\'s website could include technical, typographical, or photographic errors. Wisata Padang does not warrant that any of the materials on its website are accurate, complete, or current. Wisata Padang may make changes to the materials contained on its website at any time without notice.',
        'Wisata Padang does not, however, make any commitment to update the materials.',
      ],
    },
    {
      title: '6. Links',
      content: [
        'Wisata Padang has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Wisata Padang of the site. Use of any such linked website is at the user\'s own risk.',
      ],
    },
    {
      title: '7. Modifications',
      content: [
        'Wisata Padang may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.',
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
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-purple-600">Service</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto">
              The terms and conditions that govern your use of our website and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                  Please read these Terms of Service carefully before using our website and services.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions about our terms?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              If you have any questions about our Terms of Service, please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-gray-600 mb-4">For detailed inquiries about our terms</p>
                  <a href="mailto:legal@wisatapadang.com" className="text-purple-600 hover:text-purple-800 font-medium">
                    legal@wisatapadang.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Privacy Policy</h3>
                  <p className="text-gray-600 mb-4">Learn how we protect your data</p>
                  <a href="/privacy" className="text-purple-600 hover:text-purple-800 font-medium">
                    View Privacy Policy
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

export default TermsPage;