'use client';

import React, { useState, useMemo } from 'react';
import { ResearchItem, PublicationType } from '@/types/research';
import { SearchBar } from '@/components/shared/SearchBar';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CitationModal } from '@/components/shared/CitationModal';
import { Quote, Download, BookOpen, Filter } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface ResearchListFilterProps {
  initialItems: ResearchItem[];
}

export const ResearchListFilter: React.FC<ResearchListFilterProps> = ({ initialItems }) => {
  const t = useTranslations('research');
  const tCommon = useTranslations('common');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [citationItem, setCitationItem] = useState<ResearchItem | null>(null);

  const filteredItems = useMemo(() => {
    return initialItems.filter((item) => {
      const matchesSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === 'all' || item.publicationType === selectedType;

      return matchesSearch && matchesType;
    });
  }, [initialItems, searchQuery, selectedType]);

  const categories: { label: string; value: string }[] = [
    { label: tCommon('all'), value: 'all' },
    { label: 'Journal Articles', value: 'journal_article' },
    { label: 'Monographs', value: 'monograph' },
    { label: 'Book Chapters', value: 'book_chapter' },
    { label: 'Policy Briefs', value: 'policy_brief' },
  ];

  return (
    <div className="space-y-8">
      {/* Search & Filter Header Bar */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="w-full md:max-w-md"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedType(cat.value)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                selectedType === cat.value
                  ? 'bg-navy-900 text-gold-400 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-slate-500 font-medium">
        Showing <span className="text-navy-900 font-bold">{filteredItems.length}</span> publications
      </div>

      {/* Research Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-slate-200 text-slate-500">
          <BookOpen className="w-10 h-10 mx-auto text-slate-300 mb-3" />
          <p>{tCommon('noResults')}</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:border-gold-400">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="navy">{item.publicationType.replace('_', ' ')}</Badge>
                    <span className="text-xs text-slate-400 font-mono">Year {item.year}</span>
                    {item.doi && (
                      <span className="text-xs text-gold-600 font-mono">DOI: {item.doi}</span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold italic">
                    {item.authors.join(', ')} • {item.journalOrPublisher}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCitationItem(item)}
                    className="border-slate-300 text-slate-700 hover:bg-slate-100"
                  >
                    <Quote className="w-3.5 h-3.5" />
                    <span>{tCommon('copyCitation')}</span>
                  </Button>
                  {item.pdfUrl && (
                    <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="gold" size="sm">
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {item.abstract}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {item.keywords.map((kw, idx) => (
                  <Badge key={idx} variant="slate">
                    #{kw}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Citation Modal */}
      {citationItem && (
        <CitationModal
          isOpen={!!citationItem}
          onClose={() => setCitationItem(null)}
          title={citationItem.title}
          citations={citationItem.citations}
        />
      )}
    </div>
  );
};
