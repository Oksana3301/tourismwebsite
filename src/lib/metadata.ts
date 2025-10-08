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
  title: 'SumateraWay - West Sumatra & Mentawai Trip Planner',
  description: 'Plan, book, and glide across West Sumatra. Experience the best of Mentawai surfing and Padang culture with our expert-guided tours.',
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
    title: 'SumateraWay - West Sumatra & Mentawai Trip Planner',
    description: 'Plan, book, and glide across West Sumatra. Experience the best of Mentawai surfing and Padang culture with our expert-guided tours.',
    images: [
      '/images/og-image.jpg',
      '/images/og-image-2.jpg',
    ],
    url: 'https://sumateraway.com',
    siteName: 'SumateraWay',
    locale: 'en_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SumateraWay - West Sumatra & Mentawai Trip Planner',
    description: 'Plan, book, and glide across West Sumatra. Experience the best of Mentawai surfing and Padang culture with our expert-guided tours.',
    images: [
      '/images/twitter-image.jpg',
    ],
    site: '@sumateraway',
    creator: '@sumateraway',
  },
  alternates: {
    canonical: 'https://sumateraway.com',
    languages: {
      'en-US': 'https://sumateraway.com',
      'id-ID': 'https://sumateraway.com/id',
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
    title: 'SumateraWay - West Sumatra & Mentawai Trip Planner | Surf & Culture Tours',
    description: 'Plan your West Sumatra adventure! Book Mentawai surf trips, Padang culture tours & eco-stays. Expert guides, authentic experiences. Get your free quote today!',
  },
  mentawai: {
    title: 'Mentawai Surf Tours - World-Class Waves & Island Adventures | SumateraWay',
    description: 'Discover Mentawai\'s legendary surf breaks! Premium surf charters, beginner packages & island experiences. 15+ years expertise. Book your dream surf trip now!',
  },
  padang: {
    title: 'Padang Culture Tours - Authentic Minangkabau Heritage | SumateraWay',
    description: 'Immerse in Padang\'s rich culture! Traditional cuisine, historic landmarks & Minangkabau villages. Guided tours from $449. Experience authentic West Sumatra!',
  },
  bukittinggi: {
    title: 'Bukittinggi Highland Adventures - Mountain Tours & Waterfalls | SumateraWay',
    description: 'Explore Bukittinggi\'s volcanic landscapes! Trek Mount Marapi, visit Harau Valley waterfalls & traditional villages. Highland adventures from $599. Book now!',
  },
  experiences: {
    title: 'West Sumatra Adventure Experiences - Surf, Culture & Nature | SumateraWay',
    description: 'Choose your adventure! Surf charters, cultural immersions, wellness retreats & family packages. 6+ unique experiences. Customize your West Sumatra journey!',
  },
  stays: {
    title: 'West Sumatra Accommodations - Eco-Friendly Stays & Resorts | SumateraWay',
    description: 'Find your perfect stay! Surf camps, beach resorts, eco-lodges & luxury villas in Mentawai & Padang. From $55/night. Book sustainable accommodations now!',
  },
  itineraries: {
    title: 'Custom West Sumatra Itineraries - Personalized Tour Planning | SumateraWay',
    description: 'Create your dream itinerary! Tailor-made tours combining surf, culture & adventure. 3-14 day packages. Expert planning, flexible schedules. Start planning today!',
  },
  tripPlanner: {
    title: 'Interactive Trip Planner - Design Your West Sumatra Adventure | SumateraWay',
    description: 'Plan your perfect West Sumatra trip! Interactive tool to build custom itineraries, compare prices & book experiences. Free planning assistance. Start now!',
  },
  faq: {
    title: 'FAQ - Travel Tips & Booking Info for West Sumatra | SumateraWay',
    description: 'Get answers fast! Common questions about West Sumatra travel, visa requirements, best surf seasons, booking process & safety tips. Plan with confidence!',
  },
  terms: {
    title: 'Terms & Conditions - Booking Terms for SumateraWay Tours',
    description: 'Review our terms & conditions: cancellation policy, payment terms, travel insurance requirements & booking guidelines. Transparent policies for your peace of mind.',
  },
  privacy: {
    title: 'Privacy Policy - How We Protect Your Data | SumateraWay',
    description: 'Your privacy matters! Learn how we collect, use & protect your personal information. GDPR compliant. Secure booking & data protection guaranteed.',
  },
};