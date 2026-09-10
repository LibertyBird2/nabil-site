import { LegalService } from '@/types/service';

export interface IServicesRepository {
  getAll(locale: string): Promise<LegalService[]>;
  getFeatured(locale: string): Promise<LegalService[]>;
  getBySlug(slug: string, locale: string): Promise<LegalService | null>;
}
