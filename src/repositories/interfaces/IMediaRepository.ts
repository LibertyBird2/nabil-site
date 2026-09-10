import { MediaItem } from '@/types/media';

export interface IMediaRepository {
  getAll(locale: string): Promise<MediaItem[]>;
  getFeatured(locale: string): Promise<MediaItem[]>;
}
