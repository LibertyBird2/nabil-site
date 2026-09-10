import React from 'react';
import { articlesRepository } from '@/repositories';
import { notFound } from 'next/navigation';
import { Container } from '@/components/shared/Container';
import { Badge } from '@/components/ui/Badge';
import { Link } from '@/i18n/routing';
import { Clock, Calendar, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function ArticleDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  const article = await articlesRepository.getBySlug(slug, locale);
  if (!article) notFound();

  const isRtl = locale === 'ar';
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <div className="py-16">
      <Container size="md">
        <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 mb-8">
          {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          <span>Back to Articles</span>
        </Link>

        <article className="bg-white p-8 sm:p-14 rounded-2xl border border-slate-200 shadow-sm space-y-8">
          <header className="space-y-4 border-b border-slate-100 pb-8">
            <div className="flex items-center gap-3">
              <Badge variant="gold">{article.category}</Badge>
              <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{tCommon('readingTime', { minutes: article.readingTimeMinutes })}</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-2">
              <div className="flex items-center gap-1.5 text-navy-900 font-semibold">
                <User className="w-4 h-4 text-gold-600" />
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5 font-mono">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.publishedAt}</span>
              </div>
            </div>
          </header>

          <div className="prose prose-slate max-w-none space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            <p className="font-serif text-xl font-medium text-navy-950 leading-relaxed italic border-l-4 border-gold-500 pl-4">
              {article.excerpt}
            </p>

            <div className="whitespace-pre-line pt-4">
              {article.content}
            </div>
          </div>

          <footer className="pt-8 border-t border-slate-100 flex flex-wrap gap-2">
            {article.tags.map((tag, idx) => (
              <Badge key={idx} variant="slate">
                #{tag}
              </Badge>
            ))}
          </footer>
        </article>
      </Container>
    </div>
  );
}
