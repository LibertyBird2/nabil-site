export interface LegalService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  deliverables: string[];
  targetAudience: string[];
  isFeatured?: boolean;
}
