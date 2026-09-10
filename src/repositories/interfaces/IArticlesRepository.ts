import { Article } from '@/types/article';

export interface IArticlesRepository {
  getAll(locale: string): Promise<Article[]>;
  getFeatured(locale: string): Promise<Article[]>;
  getBySlug(slug: string, locale: string): Promise<Article | null>;
  getByTag(tag: string, locale: string): Promise<Article[]>;
  search(query: string, locale: string): Promise<Article[]>;
}
