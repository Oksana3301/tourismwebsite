import PageWrapper from '@/components/layout/page-wrapper';
import HeroSection from '@/components/sections/hero-section';
import DestinationsSection from '@/components/sections/destinations-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BookingSection from '@/components/sections/booking-section';
import { HomeSEO } from '@/components/seo/seo';
import { TravelAgencySchema, BreadcrumbSchema } from '@/components/seo/structured-data';

export default function Home() {
  return (
    <>
      <HomeSEO />
      <TravelAgencySchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sumateraway.com/' }
        ]}
      />
      <PageWrapper>
        <HeroSection />
        <DestinationsSection />
        <TestimonialsSection />
        <BookingSection />
      </PageWrapper>
    </>
  );
}
