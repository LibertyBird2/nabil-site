'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  const t = useTranslations('common');
  const actualPlaceholder = placeholder || t('searchPlaceholder');

  return (
    <div className={`relative w-full max-w-xl ${className || ''}`}>
      <div className="absolute inset-y-0 ltr:left-0 rtl:right-0 ltr:pl-3.5 rtl:pr-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={actualPlaceholder}
        className="w-full ltr:pl-11 ltr:pr-10 rtl:pr-11 rtl:pl-10 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="absolute inset-y-0 ltr:right-0 rtl:left-0 ltr:pr-3 rtl:pl-3 flex items-center text-slate-400 hover:text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
