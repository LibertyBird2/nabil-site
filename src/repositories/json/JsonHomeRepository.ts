import { IHomeRepository } from '../interfaces/IHomeRepository';
import { HeroData, BioSummary, ExpertiseArea, Testimonial } from '@/types/home';
import fs from 'fs/promises';
import path from 'path';

export class JsonHomeRepository implements IHomeRepository {
  private async loadData(locale: string): Promise<any> {
    const validLocale = locale === 'en' ? 'en' : 'ar';
    const filePath = path.join(process.cwd(), 'src', 'data', validLocale, 'home.json');
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      return JSON.parse(fileContent);
    } catch (error) {
      console.error(`Error reading home JSON for locale ${validLocale}:`, error);
      return {};
    }
  }

  async getHero(locale: string): Promise<HeroData> {
    const data = await this.loadData(locale);
    return data.hero;
  }

  async getBio(locale: string): Promise<BioSummary> {
    const data = await this.loadData(locale);
    return data.bio;
  }

  async getExpertiseAreas(locale: string): Promise<ExpertiseArea[]> {
    const data = await this.loadData(locale);
    return data.expertiseAreas || [];
  }

  async getTestimonials(locale: string): Promise<Testimonial[]> {
    const data = await this.loadData(locale);
    return data.testimonials || [];
  }
}
