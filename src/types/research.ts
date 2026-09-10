export type PublicationType = 'journal_article' | 'book_chapter' | 'monograph' | 'policy_brief' | 'conference_paper';

export interface ResearchCitation {
  apa: string;
  chicago: string;
  bibtex: string;
}

export interface ResearchItem {
  id: string;
  slug: string;
  title: string;
  abstract: string;
  fullDescription?: string;
  authors: string[];
  journalOrPublisher: string;
  year: number;
  publicationType: PublicationType;
  doi?: string;
  pdfUrl?: string;
  keywords: string[];
  citations: ResearchCitation;
  isFeatured?: boolean;
}
