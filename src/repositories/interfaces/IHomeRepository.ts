import { HeroData, ExpertiseArea, Testimonial, BioSummary } from '@/types/home';

export interface IHomeRepository {
  getHero(locale: string): Promise<HeroData>;
  getBio(locale: string): Promise<BioSummary>;
  getExpertiseAreas(locale: string): Promise<ExpertiseArea[]>;
  getTestimonials(locale: string): Promise<Testimonial[]>;
}
