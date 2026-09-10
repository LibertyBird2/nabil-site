import React from 'react';
import { researchRepository } from '@/repositories';
import { notFound } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Download, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function ResearchDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const item = await researchRepository.getBySlug(slug, locale);
  if (!item) notFound();

  const isRtl = locale === 'ar';

  return (
    <div className="py-16">
      <Container size="md">
        <Link href="/research" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 mb-8">
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>Back to All Publications</span>
        </Link>

        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <Badge variant="gold">{item.publicationType.replace('_', ' ')}</Badge>
              <span className="text-sm text-slate-400 font-mono">Year {item.year}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
              {item.title}
            </h1>

            <p className="text-sm font-bold text-gold-600">
              {item.authors.join(', ')} • {item.journalOrPublisher}
            </p>

            {item.doi && (
              <p className="text-xs text-slate-400 font-mono">
                DOI: {item.doi}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-navy-950">Abstract</h3>
            <p className="text-base text-slate-700 leading-relaxed font-sans">
              {item.abstract}
            </p>
          </div>

          {item.fullDescription && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="font-serif text-xl font-bold text-navy-950">Full Analysis & Context</h3>
              <p className="text-base text-slate-700 leading-relaxed font-sans">
                {item.fullDescription}
              </p>
            </div>
          )}

          {/* Action CTAs */}
          {item.pdfUrl && (
            <div className="pt-6 border-t border-slate-100 flex gap-4">
              <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="gold" size="lg">
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF</span>
                </Button>
              </a>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
