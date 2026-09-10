import { IMediaRepository } from '../interfaces/IMediaRepository';
import { MediaItem } from '@/types/media';
import fs from 'fs/promises';
import path from 'path';

export class JsonMediaRepository implements IMediaRepository {
  private async loadData(locale: string): Promise<MediaItem[]> {
    const validLocale = locale === 'en' ? 'en' : 'ar';
    const filePath = path.join(process.cwd(), 'src', 'data', validLocale, 'media.json');
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent) as MediaItem[];
    } catch (error) {
      console.error(`Error reading media JSON for locale ${validLocale}:`, error);
      return [];
    }
  }

  async getAll(locale: string): Promise<MediaItem[]> {
    return this.loadData(locale);
  }

  async getFeatured(locale: string): Promise<MediaItem[]> {
    const items = await this.loadData(locale);
    return items.filter(item => item.isFeatured);
  }
}
