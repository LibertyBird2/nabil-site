import { IResearchRepository } from '../interfaces/IResearchRepository';
import { ResearchItem, PublicationType } from '@/types/research';
import fs from 'fs/promises';
import path from 'path';

export class JsonResearchRepository implements IResearchRepository {
  private async loadData(locale: string): Promise<ResearchItem[]> {
    const validLocale = locale === 'en' ? 'en' : 'ar';
    const filePath = path.join(process.cwd(), 'src', 'data', validLocale, 'research.json');
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent) as ResearchItem[];
    } catch (error) {
      console.error(`Error reading research JSON for locale ${validLocale}:`, error);
      return [];
    }
  }

  async getAll(locale: string): Promise<ResearchItem[]> {
    return this.loadData(locale);
  }

  async getFeatured(locale: string): Promise<ResearchItem[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.isFeatured);
  }

  async getBySlug(slug: string, locale: string): Promise<ResearchItem | null> {
    const items = await this.loadData(locale);
    return items.find(item => item.slug === slug) || null;
  }

  async getByType(type: PublicationType, locale: string): Promise<ResearchItem[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.publicationType === type);
  }

  async search(query: string, locale: string): Promise<ResearchItem[]> {
    const items = await this.loadData(locale);
    const q = query.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.abstract.toLowerCase().includes(q) ||
      item.keywords.some(k => k.toLowerCase().includes(q))
    );
  }
}
