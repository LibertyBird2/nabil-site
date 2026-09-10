export interface TrainingProgram {
  id: string;
  slug: string;
  title: string;
  category: string;
  duration: string;
  targetAudience: string;
  overview: string;
  learningOutcomes: string[];
  modules: {
    title: string;
    description: string;
  }[];
  isFeatured?: boolean;
}
