export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  academicAffiliation: string;
  consultingRole: string;
  summary: string;
  stats: {
    publicationsCount: number;
    yearsExperience: number;
    casesConsulted: number;
    studentsTrained: number;
  };
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  topics: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  organization: string;
  category: 'academic' | 'client' | 'trainee';
}

export interface BioSummary {
  headline: string;
  fullBio: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  appointments: {
    role: string;
    organization: string;
    period: string;
  }[];
}
