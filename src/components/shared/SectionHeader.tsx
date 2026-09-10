import React from 'react';
import { clsx } from 'clsx';

export interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  darkBg?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  subtitle,
  align = 'center',
  className,
  darkBg = false,
}) => {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={clsx("flex flex-col mb-12 max-w-3xl mx-auto", alignStyles[align], className)}>
      {tag && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-3 px-3 py-1 bg-gold-50 dark:bg-navy-900/80 rounded-full border border-gold-300/50">
          {tag}
        </span>
      )}
      <h2 className={clsx(
        "text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-4",
        darkBg ? "text-white" : "text-navy-950"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          "text-base sm:text-lg leading-relaxed",
          darkBg ? "text-slate-300" : "text-slate-600"
        )}>
          {subtitle}
        </p>
      )}
      <div className="w-16 h-1 gold-gradient-bg rounded-full mt-4" />
    </div>
  );
};
