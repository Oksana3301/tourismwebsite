import type { Metadata } from 'next';
import '@fontsource-variable/inter';
import './globals.css';
import './performance.css';
import { Providers } from '@/components/providers/providers';
import WhatsAppFloatButton from '@/components/layout/whatsapp-float-button';
import { HomeSEO } from '@/components/seo/seo';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'SumateraWay - West Sumatra & Mentawai Trip Planner',
  description: 'Plan, book, and glide across West Sumatra. Experience adventure tours, surf trips, cultural experiences, and eco-friendly accommodations. Book your Mentawai Islands adventure today!',
  keywords: 'West Sumatra, Mentawai Islands, surf trips, adventure tours, cultural experiences, eco-tourism, Indonesia travel, trip planner',
  authors: [{ name: 'SumateraWay' }],
  creator: 'SumateraWay',
  publisher: 'SumateraWay',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_ID',
    url: 'https://sumateraway.com',
    title: 'SumateraWay - West Sumatra & Mentawai Trip Planner',
    description: 'Plan, book, and glide across West Sumatra. Experience adventure tours, surf trips, and cultural experiences.',
    siteName: 'SumateraWay',
    images: [{
      url: 'https://sumateraway.com/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'SumateraWay - West Sumatra Trip Planner'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SumateraWay - West Sumatra & Mentawai Trip Planner',
    description: 'Plan, book, and glide across West Sumatra. Experience adventure tours, surf trips, and cultural experiences.',
    creator: '@sumateraway',
    site: '@sumateraway',
    images: ['https://sumateraway.com/og-image.jpg'],
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
        <meta name="apple-mobile-web-app-title" content="SumatraWay" />
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
          <meta name="application-name" content="SumateraWay" />
          <meta name="apple-mobile-web-app-title" content="SumateraWay" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                 "@context": "https://schema.org",
               "@type": "TravelAgency",
               "name": "SumateraWay",
               "url": "https://sumateraway.com",
               "logo": "https://sumateraway.com/logo.png",
               "image": "https://sumateraway.com/og-image.jpg",
              "description": "Plan, book, and glide across West Sumatra. Experience adventure tours, surf trips, cultural experiences, and eco-friendly accommodations.",
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
                "telephone": "+62-895-6105-24580",
                "contactType": "customer service",
                   "email": "admin@sumateraway.com",
                "availableLanguage": ["Indonesian", "English"]
              },
                   "sameAs": [
                     "https://www.facebook.com/sumateraway",
                     "https://www.instagram.com/sumateraway",
                     "https://twitter.com/sumateraway"
                   ]
            })
          }}
        />
      </head>
      <body className="font-inter">
        {/* Google Analytics */}
        <GoogleAnalytics />
        
        <Providers>
          {children}
          <WhatsAppFloatButton />
        </Providers>
      </body>
    </html>
  );
}
