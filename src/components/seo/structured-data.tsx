'use client';

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Travel Agency Schema for Homepage
export function TravelAgencySchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "SumateraWay",
    "url": "https://sumateraway.com",
    "logo": "https://sumateraway.com/logo.png",
    "image": "https://sumateraway.com/og-image.jpg",
    "description": "Plan, book, and glide across West Sumatra. Experience adventure tours, surf trips, cultural experiences, and eco-friendly accommodations.",
    "telephone": "+62-895-6105-24580",
    "email": "info@sumateraway.com",
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
      "email": "info@sumateraway.com",
      "availableLanguage": ["Indonesian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/sumateraway",
      "https://www.instagram.com/sumateraway",
      "https://twitter.com/sumateraway"
    ],
    "priceRange": "$$-$$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return <StructuredData data={schema} />;
}

// Product Schema for Experiences
export function ExperienceProductSchema({ experience }: { experience: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": experience.name,
    "description": experience.description,
    "image": experience.image,
    "brand": {
      "@type": "Brand",
      "name": "SumateraWay"
    },
    "offers": {
      "@type": "Offer",
      "price": experience.price.usd,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://sumateraway.com/experiences`,
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "95",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return <StructuredData data={schema} />;
}

// Hotel Schema for Stays
export function HotelSchema({ hotel }: { hotel: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": hotel.name,
    "description": hotel.highlights?.join(', '),
    "image": hotel.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": hotel.location,
      "addressRegion": "West Sumatra",
      "addressCountry": "Indonesia"
    },
    "telephone": "+62-895-6105-24580",
    "starRating": {
      "@type": "Rating",
      "ratingValue": hotel.rating,
      "bestRating": "5"
    },
    "priceRange": "$$-$$$$",
    "amenityFeature": hotel.amenities?.map((amenity: string) => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity
    }))
  };

  return <StructuredData data={schema} />;
}

// Destination Schema
export function DestinationSchema({ destination }: { destination: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": destination.name,
    "description": destination.description,
    "image": destination.image,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": destination.name,
      "addressRegion": "West Sumatra",
      "addressCountry": "Indonesia"
    },
    "touristType": ["Adventure Seekers", "Culture Enthusiasts", "Surfers"],
    "publicAccess": true
  };

  return <StructuredData data={schema} />;
}

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return <StructuredData data={schema} />;
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return <StructuredData data={schema} />;
}

// Review Schema
export function ReviewSchema({ review }: { review: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "TravelAgency",
      "name": "SumateraWay"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5"
    },
    "reviewBody": review.text,
    "datePublished": review.date
  };

  return <StructuredData data={schema} />;
}

// Trip Schema
export function TripSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TripPlanner",
    "name": "SumateraWay Trip Planner",
    "description": "Build your perfect West Sumatra itinerary with real-time ferry schedules, flight connections, and verified stays.",
    "url": "https://sumateraway.com/trip-planner",
    "provider": {
      "@type": "TravelAgency",
      "name": "SumateraWay"
    }
  };

  return <StructuredData data={schema} />;
}

