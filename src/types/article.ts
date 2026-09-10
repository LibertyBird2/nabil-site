export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
  category: string;
  imageUrl?: string;
  isFeatured?: boolean;
}
