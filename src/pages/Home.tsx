import { VideoIntro } from '@/components/sections/VideoIntro';
import { Hero } from '@/components/sections/Hero';
import { InfoHours } from '@/components/sections/InfoHours';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { AboutTeaser } from '@/components/sections/AboutTeaser';

export function Home() {
  return (
    <>
      <VideoIntro />
      <Hero />
      <InfoHours />
      <ServicesGrid />
      <ReviewsSection />
      <AboutTeaser />
    </>
  );
}
