import React from 'react';
import { clsx } from 'clsx';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'navy' | 'slate' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className,
}) => {
  const base = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider";
  
  const variants = {
    gold: "bg-gold-100 text-gold-800 border border-gold-300",
    navy: "bg-navy-900 text-gold-300 border border-navy-800",
    slate: "bg-slate-100 text-slate-700 border border-slate-200",
    outline: "border border-gold-500 text-gold-700",
  };

  return (
    <span className={clsx(base, variants[variant], className)}>
      {children}
    </span>
  );
};
