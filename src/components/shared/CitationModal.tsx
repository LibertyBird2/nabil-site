'use client';

import React, { useState } from 'react';
import { ResearchCitation } from '@/types/research';
import { useTranslations } from 'next-intl';
import { Copy, Check, X, Quote } from 'lucide-react';
import { Button } from '../ui/Button';

export interface CitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  citations: ResearchCitation;
}

export const CitationModal: React.FC<CitationModalProps> = ({
  isOpen,
  onClose,
  title,
  citations,
}) => {
  const t = useTranslations('research');
  const tCommon = useTranslations('common');
  const [activeTab, setActiveTab] = useState<'apa' | 'chicago' | 'bibtex'>('apa');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentText = citations[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopiedFormat(activeTab);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 border border-slate-200 relative animate-slide-up">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gold-100 rounded-lg text-gold-700">
              <Quote className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-navy-950">{t('citationModalTitle')}</h3>
              <p className="text-xs text-slate-500 line-clamp-1">{title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex gap-2 my-4 border-b border-slate-100 pb-3">
          {(['apa', 'chicago', 'bibtex'] as const).map((format) => (
            <button
              key={format}
              onClick={() => setActiveTab(format)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === format
                  ? 'bg-navy-900 text-gold-400 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t(format)}
            </button>
          ))}
        </div>

        {/* Citation Output Box */}
        <div className="relative bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-xs leading-relaxed overflow-x-auto my-4 max-h-60 border border-slate-800">
          <pre className="whitespace-pre-wrap">{currentText}</pre>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <Button variant="ghost" size="sm" onClick={onClose}>
            {tCommon('close')}
          </Button>
          <Button variant="gold" size="sm" onClick={handleCopy}>
            {copiedFormat === activeTab ? (
              <>
                <Check className="w-4 h-4 text-emerald-950" />
                <span>{tCommon('copied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>{tCommon('copyCitation')}</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
