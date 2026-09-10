import React from 'react';
import {
  homeRepository,
  researchRepository,
  articlesRepository,
  servicesRepository,
  mediaRepository,
} from '@/repositories';

import { HeroSection } from '@/features/home/HeroSection';
import { BioSummarySection } from '@/features/home/BioSummarySection';
import { ExpertiseSection } from '@/features/home/ExpertiseSection';
import { ServicesSection } from '@/features/home/ServicesSection';
import { FeaturedResearchSection } from '@/features/home/FeaturedResearchSection';
import { LatestArticlesSection } from '@/features/home/LatestArticlesSection';
import { MediaSection } from '@/features/home/MediaSection';
import { TestimonialsSection } from '@/features/home/TestimonialsSection';
import { ContactCtaSection } from '@/features/home/ContactCtaSection';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Fetch repository data in parallel for optimal performance
  const [
    heroData,
    bioData,
    expertiseAreas,
    testimonials,
    featuredResearch,
    featuredArticles,
    featuredServices,
    featuredMedia,
  ] = await Promise.all([
    homeRepository.getHero(locale),
    homeRepository.getBio(locale),
    homeRepository.getExpertiseAreas(locale),
    homeRepository.getTestimonials(locale),
    researchRepository.getFeatured(locale),
    articlesRepository.getFeatured(locale),
    servicesRepository.getFeatured(locale),
    mediaRepository.getFeatured(locale),
  ]);

  return (
    <>
      <HeroSection data={heroData} />
      <BioSummarySection bio={bioData} />
      <ExpertiseSection expertiseAreas={expertiseAreas} />
      <ServicesSection services={featuredServices} />
      <FeaturedResearchSection researchItems={featuredResearch} />
      <LatestArticlesSection articles={featuredArticles} />
      <MediaSection mediaItems={featuredMedia} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactCtaSection />
    </>
  );
}
