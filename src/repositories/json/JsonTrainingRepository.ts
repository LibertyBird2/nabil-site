import { ITrainingRepository } from '../interfaces/ITrainingRepository';
import { TrainingProgram } from '@/types/training';
import fs from 'fs/promises';
import path from 'path';

export class JsonTrainingRepository implements ITrainingRepository {
  private async loadData(locale: string): Promise<TrainingProgram[]> {
    const validLocale = locale === 'en' ? 'en' : 'ar';
    const filePath = path.join(process.cwd(), 'src', 'data', validLocale, 'training.json');
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent) as TrainingProgram[];
    } catch (error) {
      console.error(`Error reading training JSON for locale ${validLocale}:`, error);
      return [];
    }
  }

  async getAll(locale: string): Promise<TrainingProgram[]> {
    return this.loadData(locale);
  }

  async getFeatured(locale: string): Promise<TrainingProgram[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.isFeatured);
  }

  async getBySlug(slug: string, locale: string): Promise<TrainingProgram | null> {
    const items = await this.loadData(locale);
    return items.find(item => item.slug === slug) || null;
  }
}
