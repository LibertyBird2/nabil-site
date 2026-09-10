import React from 'react';
import { clsx } from 'clsx';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl border border-slate-200/80 shadow-sm p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:shadow-xl hover:-translate-y-1 hover:border-gold-400/50",
        className
      )}
    >
      {children}
    </div>
  );
};
