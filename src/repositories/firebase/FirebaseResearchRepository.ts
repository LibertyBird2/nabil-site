import { IResearchRepository } from '../interfaces/IResearchRepository';
import { ResearchItem, PublicationType } from '@/types/research';

/**
 * Future Firebase Firestore Implementation of ResearchRepository.
 * Swap this class in src/repositories/index.ts when connecting to Firebase Firestore.
 */
export class FirebaseResearchRepository implements IResearchRepository {
  async getAll(locale: string): Promise<ResearchItem[]> {
    // Example Firestore Query:
    // const snapshot = await db.collection('research').where('locale', '==', locale).get();
    // return snapshot.docs.map(doc => doc.data() as ResearchItem);
    throw new Error('Firebase integration pending configuration. Use JsonResearchRepository.');
  }

  async getFeatured(locale: string): Promise<ResearchItem[]> {
    throw new Error('Firebase integration pending configuration. Use JsonResearchRepository.');
  }

  async getBySlug(slug: string, locale: string): Promise<ResearchItem | null> {
    throw new Error('Firebase integration pending configuration. Use JsonResearchRepository.');
  }

  async getByType(type: PublicationType, locale: string): Promise<ResearchItem[]> {
    throw new Error('Firebase integration pending configuration. Use JsonResearchRepository.');
  }

  async search(query: string, locale: string): Promise<ResearchItem[]> {
    throw new Error('Firebase integration pending configuration. Use JsonResearchRepository.');
  }
}
