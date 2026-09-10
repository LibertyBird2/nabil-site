'use client';

import React, { useState, useMemo } from 'react';
import { Article } from '@/types/article';
import { SearchBar } from '@/components/shared/SearchBar';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Link } from '@/i18n/routing';
import { Clock, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export interface ArticlesListFilterProps {
  initialArticles: Article[];
}

export const ArticlesListFilter: React.FC<ArticlesListFilterProps> = ({ initialArticles }) => {
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    initialArticles.forEach((art) => art.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, [initialArticles]);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((art) => {
      const matchesSearch =
        searchQuery === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag === 'all' || art.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [initialArticles, searchQuery, selectedTag]);

  return (
    <div className="space-y-8">
      {/* Search & Tag Filter Bar */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full md:max-w-md"
        />

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
              selectedTag === 'all'
                ? 'bg-navy-900 text-gold-400 shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tCommon('all')}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedTag === tag
                  ? 'bg-navy-900 text-gold-400 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-slate-200 text-slate-500">
          <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
          <p>{tCommon('noResults')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <Card key={art.id} className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="gold">{art.category}</Badge>
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
                <span className="text-xs text-slate-400 font-mono">{art.publishedAt}</span>
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
      )}
    </div>
  );
};
