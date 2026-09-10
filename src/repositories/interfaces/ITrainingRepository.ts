import { TrainingProgram } from '@/types/training';

export interface ITrainingRepository {
  getAll(locale: string): Promise<TrainingProgram[]>;
  getFeatured(locale: string): Promise<TrainingProgram[]>;
  getBySlug(slug: string, locale: string): Promise<TrainingProgram | null>;
}
