export type MediaType = 'interview' | 'keynote' | 'podcast' | 'press_release';

export interface MediaItem {
  id: string;
  title: string;
  type: MediaType;
  publisher: string;
  date: string;
  summary: string;
  externalUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}
