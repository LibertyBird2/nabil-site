import { IServicesRepository } from '../interfaces/IServicesRepository';
import { LegalService } from '@/types/service';
import fs from 'fs/promises';
import path from 'path';

export class JsonServicesRepository implements IServicesRepository {
  private async loadData(locale: string): Promise<LegalService[]> {
    const validLocale = locale === 'en' ? 'en' : 'ar';
    const filePath = path.join(process.cwd(), 'src', 'data', validLocale, 'services.json');
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent) as LegalService[];
    } catch (error) {
      console.error(`Error reading services JSON for locale ${validLocale}:`, error);
      return [];
    }
  }

  async getAll(locale: string): Promise<LegalService[]> {
    return this.loadData(locale);
  }

  async getFeatured(locale: string): Promise<LegalService[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.isFeatured);
  }

  async getBySlug(slug: string, locale: string): Promise<LegalService | null> {
    const items = await this.loadData(locale);
    return items.find(item => item.slug === slug) || null;
  }
}
