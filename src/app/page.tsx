import PageWrapper from '@/components/layout/page-wrapper';
import HeroSection from '@/components/sections/hero-section';
import FeaturesSection from '@/components/sections/features-section';
import DestinationsSection from '@/components/sections/destinations-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BookingSection from '@/components/sections/booking-section';
import { HomeSEO } from '@/components/seo/seo';

export default function Home() {
  return (
    <>
      <HomeSEO />
      <PageWrapper>
        <HeroSection />
        <FeaturesSection />
        <DestinationsSection />
        <TestimonialsSection />
        <BookingSection />
      </PageWrapper>
    </>
  );
}
