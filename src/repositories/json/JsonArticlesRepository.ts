import { IArticlesRepository } from '../interfaces/IArticlesRepository';
import { Article } from '@/types/article';
import fs from 'fs/promises';
import path from 'path';

export class JsonArticlesRepository implements IArticlesRepository {
  private async loadData(locale: string): Promise<Article[]> {
    const validLocale = locale === 'en' ? 'en' : 'ar';
    const filePath = path.join(process.cwd(), 'src', 'data', validLocale, 'articles.json');
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent) as Article[];
    } catch (error) {
      console.error(`Error reading articles JSON for locale ${validLocale}:`, error);
      return [];
    }
  }

  async getAll(locale: string): Promise<Article[]> {
    return this.loadData(locale);
  }

  async getFeatured(locale: string): Promise<Article[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.isFeatured);
  }

  async getBySlug(slug: string, locale: string): Promise<Article | null> {
    const items = await this.loadData(locale);
    return items.find(item => item.slug === slug) || null;
  }

  async getByTag(tag: string, locale: string): Promise<Article[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.tags.includes(tag));
  }

  async search(query: string, locale: string): Promise<Article[]> {
    const items = await this.loadData(locale);
    const q = query.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.tags.some(t => t.toLowerCase().includes(q))
    );
  }
}
