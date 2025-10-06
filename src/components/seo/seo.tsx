import { Metadata } from 'next';
import { generateMetadata, pageSEOConfigs } from '@/lib/metadata';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
    url?: string;
    type?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other';
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
  canonical?: string;
  additionalMetaTags?: Record<string, string>;
}

export function SEO({
  title,
  description,
  keywords,
  openGraph,
  twitter,
  canonical,
  additionalMetaTags,
}: SEOProps) {
  const config = generateMetadata({
    title: title || pageSEOConfigs.home.title,
    description: description || pageSEOConfigs.home.description,
    keywords,
    openGraph: {
      title: openGraph?.title || title || pageSEOConfigs.home.title,
      description: openGraph?.description || description || pageSEOConfigs.home.description,
      images: openGraph?.images || [],
      url: openGraph?.url || '',
      type: openGraph?.type || 'website',
      siteName: 'WisataPadang',
      locale: 'en_ID',
    },
    twitter: {
      title: twitter?.title || title || pageSEOConfigs.home.title,
      description: twitter?.description || description || pageSEOConfigs.home.description,
      images: twitter?.images || [],
      card: 'summary_large_image',
      site: '@wisatapadang',
      creator: '@wisatapadang',
    },
    alternates: canonical ? { canonical } : undefined,
    additionalMetaTags,
  });

  return (
    <>
      {/* Basic Meta Tags */}
      <title>{config.title?.toString() || ''}</title>
      {config.description && <meta name="description" content={config.description} />}
      {config.keywords && <meta name="keywords" content={Array.isArray(config.keywords) ? config.keywords.join(', ') : config.keywords} />}
      
      {/* Open Graph Tags */}
      {config.openGraph && (
        <>
          <meta property="og:title" content={config.openGraph.title as string} />
          <meta property="og:description" content={config.openGraph.description as string} />
          {Array.isArray(config.openGraph.images) && config.openGraph.images.map((image, index) => (
            <meta key={index} property="og:image" content={typeof image === 'string' ? image : image.toString()} />
          ))}
          {config.openGraph.url && <meta property="og:url" content={config.openGraph.url as string} />}
          <meta property="og:type" content={(config.openGraph as any).type || 'website'} />
          {(config.openGraph as any).siteName && <meta property="og:site_name" content={(config.openGraph as any).siteName} />}
          {(config.openGraph as any).locale && <meta property="og:locale" content={(config.openGraph as any).locale} />}
        </>
      )}
      
      {/* Twitter Card Tags */}
      {config.twitter && (
        <>
          <meta name="twitter:card" content={(config.twitter as any).card || 'summary_large_image'} />
          <meta name="twitter:title" content={config.twitter.title as string} />
          <meta name="twitter:description" content={config.twitter.description as string} />
          {Array.isArray(config.twitter.images) && config.twitter.images.map((image, index) => (
            <meta key={index} name="twitter:image" content={typeof image === 'string' ? image : image.toString()} />
          ))}
          {(config.twitter as any).site && <meta name="twitter:site" content={(config.twitter as any).site} />}
          {(config.twitter as any).creator && <meta name="twitter:creator" content={(config.twitter as any).creator} />}
        </>
      )}
      
      {/* Canonical URL */}
      {config.alternates?.canonical && (
        <link rel="canonical" href={config.alternates.canonical as string} />
      )}
      
      {/* Additional Meta Tags */}
      {(config as any).additionalMetaTags &&
        Object.entries((config as any).additionalMetaTags).map(([key, value]) => (
          <meta key={key} name={key} content={value as string} />
        ))}
      
      {/* Robots Meta Tag */}
      {config.robots && (
        <meta
          name="robots"
          content={
            `${(config.robots as any).index ? 'index' : 'noindex'}, ${
              (config.robots as any).follow ? 'follow' : 'nofollow'
            }${(config.robots as any).googleBot ? `, ${(config.robots as any).googleBot}` : ''}`
          }
        />
      )}
    </>
  );
}

// Page-specific SEO components
export function HomeSEO() {
  return <SEO {...pageSEOConfigs.home} />;
}

export function MentawaiSEOOptimization() {
  return <SEO {...pageSEOConfigs.mentawai} />;
}

export function PadangSEOOptimization() {
  return <SEO {...pageSEOConfigs.padang} />;
}

export function BukittinggiSEOOptimization() {
  return <SEO {...pageSEOConfigs.bukittinggi} />;
}

export function ExperiencesSEOOptimization() {
  return <SEO {...pageSEOConfigs.experiences} />;
}

export function StaysSEOOptimization() {
  return <SEO {...pageSEOConfigs.stays} />;
}

export function ItinerariesSEOOptimization() {
  return <SEO {...pageSEOConfigs.itineraries} />;
}

export function TripPlannerSEOOptimization() {
  return <SEO {...pageSEOConfigs.tripPlanner} />;
}

export function FAQSEOOptimization() {
  return <SEO {...pageSEOConfigs.faq} />;
}

export function TermsSEOOptimization() {
  return <SEO {...pageSEOConfigs.terms} />;
}

export function PrivacySEOOptimization() {
  return <SEO {...pageSEOConfigs.privacy} />;
}