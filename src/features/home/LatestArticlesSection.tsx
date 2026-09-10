import React from 'react';
import { Article } from '@/types/article';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Clock, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export interface LatestArticlesSectionProps {
  articles: Article[];
}

export const LatestArticlesSection: React.FC<LatestArticlesSectionProps> = ({ articles }) => {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeader
          tag="Legal Analysis & Commentary"
          title={t('latestArticlesTitle')}
          subtitle={t('latestArticlesSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Card key={art.id} className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="gold">
                    {art.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tCommon('readingTime', { minutes: art.readingTimeMinutes })}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-3 line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {art.publishedAt}
                </span>
                <Link href={`/articles/${art.slug}` as any}>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {tCommon('readMore')}
                    {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/articles">
            <Button variant="outline" size="lg">
              <span>{tCommon('viewAll')}</span>
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
