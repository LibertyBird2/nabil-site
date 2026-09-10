import { ResearchItem, PublicationType } from '@/types/research';

export interface IResearchRepository {
  getAll(locale: string): Promise<ResearchItem[]>;
  getFeatured(locale: string): Promise<ResearchItem[]>;
  getBySlug(slug: string, locale: string): Promise<ResearchItem | null>;
  getByType(type: PublicationType, locale: string): Promise<ResearchItem[]>;
  search(query: string, locale: string): Promise<ResearchItem[]>;
}
