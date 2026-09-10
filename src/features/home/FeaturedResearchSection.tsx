'use client';

import React, { useState } from 'react';
import { ResearchItem } from '@/types/research';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CitationModal } from '@/components/shared/CitationModal';
import { Link } from '@/i18n/routing';
import { BookOpen, Quote, Download, ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export interface FeaturedResearchSectionProps {
  researchItems: ResearchItem[];
}

export const FeaturedResearchSection: React.FC<FeaturedResearchSectionProps> = ({ researchItems }) => {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [selectedCitation, setSelectedCitation] = useState<ResearchItem | null>(null);

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-navy-800 relative">
      <Container>
        <SectionHeader
          tag="Scholarly Publications"
          title={t('featuredResearchTitle')}
          subtitle={t('featuredResearchSubtitle')}
          darkBg
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchItems.map((item) => (
            <Card key={item.id} className="bg-navy-950/90 border-navy-800 text-slate-200 flex flex-col justify-between hover:border-gold-500/50">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="navy">
                    {item.publicationType.replace('_', ' ')}
                  </Badge>
                  <span className="text-xs text-gold-400 font-semibold font-mono">
                    {item.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 font-semibold mb-4 italic">
                  {item.journalOrPublisher}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {item.abstract}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-navy-900">
                <div className="flex flex-wrap gap-1.5">
                  {item.keywords.map((kw, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-navy-900 text-slate-400">
                      #{kw}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setSelectedCitation(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <Quote className="w-3.5 h-3.5" />
                    <span>{tCommon('copyCitation')}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {item.pdfUrl && (
                      <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-navy-700 text-slate-200 hover:bg-navy-800">
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/research">
            <Button variant="gold" size="lg">
              <span>{tCommon('viewAll')}</span>
              {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Button>
          </Link>
        </div>
      </Container>

      {/* Citation Modal */}
      {selectedCitation && (
        <CitationModal
          isOpen={!!selectedCitation}
          onClose={() => setSelectedCitation(null)}
          title={selectedCitation.title}
          citations={selectedCitation.citations}
        />
      )}
    </section>
  );
};
