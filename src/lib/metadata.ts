import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    images: string[];
    url: string;
    siteName: string;
    locale: string;
    type: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
  };
  twitter?: {
    card: 'summary_large_image' | 'summary' | 'player' | 'app';
    title: string;
    description: string;
    images: string[];
    site: string;
    creator: string;
  };
  alternates?: {
    canonical: string;
    languages?: Record<string, string>;
  };
  robots?: {
    index: boolean;
    follow: boolean;
    googleBot?: string;
  };
  additionalMetaTags?: Record<string, string>;
}

export const defaultSEOConfig: SEOConfig = {
  title: 'WisataPadang - Adventure Tours in West Sumatra',
  description: 'Experience the best of Mentawai surfing and Padang culture with our expert-guided tours. Book your adventure today!',
  keywords: [
    'Mentawai surf',
    'Padang culture',
    'West Sumatra tourism',
    'Indonesia adventure',
    'surf tours',
    'cultural tours',
    'eco tourism',
    'surf packages',
    'travel Indonesia',
    'surf Mentawai',
  ],
  openGraph: {
    title: 'WisataPadang - Adventure Tours in West Sumatra',
    description: 'Experience the best of Mentawai surfing and Padang culture with our expert-guided tours. Book your adventure today!',
    images: [
      '/images/og-image.jpg',
      '/images/og-image-2.jpg',
    ],
    url: 'https://wisatapadang.com',
    siteName: 'WisataPadang',
    locale: 'en_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WisataPadang - Adventure Tours in West Sumatra',
    description: 'Experience the best of Mentawai surfing and Padang culture with our expert-guided tours. Book your adventure today!',
    images: [
      '/images/twitter-image.jpg',
    ],
    site: '@wisatapadang',
    creator: '@wisatapadang',
  },
  alternates: {
    canonical: 'https://wisatapadang.com',
    languages: {
      'en-US': 'https://wisatapadang.com',
      'id-ID': 'https://wisatapadang.com/id',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  },
};

export function generateMetadata(config: Partial<SEOConfig>): Metadata {
  const seoConfig: SEOConfig = {
    ...defaultSEOConfig,
    ...config,
    openGraph: {
      ...defaultSEOConfig.openGraph!,
      ...config.openGraph,
      images: config.openGraph?.images || defaultSEOConfig.openGraph?.images || [],
    },
    twitter: {
      ...defaultSEOConfig.twitter!,
      ...config.twitter,
      images: config.twitter?.images || defaultSEOConfig.twitter?.images || [],
    },
  };

  const metadata: Metadata = {
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords?.join(', '),
    openGraph: {
      title: seoConfig.openGraph?.title,
      description: seoConfig.openGraph?.description,
      images: seoConfig.openGraph?.images,
      url: seoConfig.openGraph?.url,
      siteName: seoConfig.openGraph?.siteName,
      locale: seoConfig.openGraph?.locale,
      type: seoConfig.openGraph?.type,
    },
    twitter: {
      card: seoConfig.twitter?.card,
      title: seoConfig.twitter?.title,
      description: seoConfig.twitter?.description,
      images: seoConfig.twitter?.images,
      site: seoConfig.twitter?.site,
      creator: seoConfig.twitter?.creator,
    },
    alternates: seoConfig.alternates,
    robots: {
      index: seoConfig.robots?.index,
      follow: seoConfig.robots?.follow,
      googleBot: seoConfig.robots?.googleBot,
    },
  };

  // Add additional meta tags
  if (seoConfig.additionalMetaTags) {
    Object.entries(seoConfig.additionalMetaTags).forEach(([key, value]) => {
      (metadata as any)[key] = value;
    });
  }

  return metadata;
}

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: 'WisataPadang - Adventure Tours in West Sumatra',
    description: 'Experience the best of Mentawai surfing and Padang culture with our expert-guided tours. Book your adventure today!',
  },
  mentawai: {
    title: 'Mentawai Surf Tours - World-Class Waves in West Sumatra',
    description: 'Book your Mentawai surf adventure with our expert guides. Experience world-class waves and pristine beaches.',
  },
  padang: {
    title: 'Padang Culture Tours - Discover West Sumatran Heritage',
    description: 'Explore the rich culture and heritage of Padang with our expert-guided tours. Visit traditional villages and taste local cuisine.',
  },
  bukittinggi: {
    title: 'Bukittinggi Tours - Highland Adventures in West Sumatra',
    description: 'Discover the beauty of Bukittinggi with our guided tours. Visit stunning landscapes and learn about Minangkabau culture.',
  },
  experiences: {
    title: 'Adventure Experiences in West Sumatra',
    description: 'Choose from our range of adventure experiences including surfing, cultural tours, and eco-friendly activities.',
  },
  stays: {
    title: 'Eco-Friendly Stays in West Sumatra',
    description: 'Find sustainable and comfortable accommodations for your West Sumatra adventure. From beachfront bungalows to mountain lodges.',
  },
  itineraries: {
    title: 'Custom Tour Itineraries for West Sumatra',
    description: 'Create your perfect West Sumatra adventure with our customizable tour itineraries. Tailored to your interests and schedule.',
  },
  tripPlanner: {
    title: 'Trip Planner - Create Your West Sumatra Adventure',
    description: 'Design your perfect West Sumatra itinerary with our interactive trip planner. Add activities, customize your schedule, and save your plan.',
  },
  faq: {
    title: 'Frequently Asked Questions - WisataPadang',
    description: 'Find answers to common questions about our tours, booking process, and travel to West Sumatra.',
  },
  terms: {
    title: 'Terms & Conditions - WisataPadang',
    description: 'Please read our terms and conditions before booking your tour with WisataPadang.',
  },
  privacy: {
    title: 'Privacy Policy - WisataPadang',
    description: 'Learn how we protect your personal information when you book with WisataPadang.',
  },
};