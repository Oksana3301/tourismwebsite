import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import './globals.css';
import './performance.css';
import { Providers } from '@/components/providers/providers';
import LenisProvider from '@/components/providers/lenis-provider';
import WhatsAppFloatButton from '@/components/layout/whatsapp-float-button';
import { HomeSEO } from '@/components/seo/seo';

export const metadata: Metadata = {
  title: 'Wisata Padang - West Sumatra Adventure Tours',
  description: 'Experience the beauty of West Sumatra with our adventure tours, surf trips, cultural experiences, and eco-friendly accommodations. Book your Mentawai Islands adventure today!',
  keywords: 'West Sumatra, Mentawai Islands, surf trips, adventure tours, cultural experiences, eco-tourism, Indonesia travel',
  authors: [{ name: 'Wisata Padang' }],
  creator: 'Wisata Padang',
  publisher: 'Wisata Padang',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: 'https://wisatapadang.com',
    title: 'Wisata Padang - West Sumatra Adventure Tours',
    description: 'Experience the beauty of West Sumatra with our adventure tours, surf trips, cultural experiences, and eco-friendly accommodations.',
    siteName: 'Wisata Padang',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wisata Padang - West Sumatra Adventure Tours',
    description: 'Experience the beauty of West Sumatra with our adventure tours, surf trips, cultural experiences, and eco-friendly accommodations.',
    creator: '@wisatapadang',
    images: ['https://wisatapadang.com/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#7c3aed',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wisata Padang" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* SEO Component */}
        <HomeSEO />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://api.stripe.com" />
        
        {/* Accessibility meta tags */}
        <meta name="application-name" content="Wisata Padang" />
        <meta name="apple-mobile-web-app-title" content="Wisata Padang" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Wisata Padang",
              "url": "https://wisatapadang.com",
              "logo": "https://wisatapadang.com/logo.png",
              "image": "https://wisatapadang.com/og-image.jpg",
              "description": "Experience the beauty of West Sumatra with our adventure tours, surf trips, cultural experiences, and eco-friendly accommodations.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Sudirman No. 123",
                "addressLocality": "Padang",
                "addressRegion": "West Sumatra",
                "addressCountry": "Indonesia",
                "postalCode": "25143"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-812-3456-7890",
                "contactType": "customer service",
                "email": "info@wisatapadang.com",
                "availableLanguage": ["Indonesian", "English"]
              },
              "sameAs": [
                "https://www.facebook.com/wisatapadang",
                "https://www.instagram.com/wisatapadang",
                "https://twitter.com/wisatapadang"
              ]
            })
          }}
        />
      </head>
      <body className="font-inter">
        <Providers>
          <LenisProvider>
            {children}
            <WhatsAppFloatButton />
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}
