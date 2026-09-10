import React from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 shadow-md hover:shadow-lg border border-navy-800",
    secondary: "bg-parchment-100 text-navy-900 hover:bg-parchment-200 border border-parchment-300",
    gold: "gold-gradient-bg text-navy-950 hover:brightness-110 shadow-md font-semibold",
    outline: "border-2 border-gold-500 text-gold-600 dark:text-gold-400 hover:bg-gold-500 hover:text-white",
    ghost: "text-slate-700 hover:bg-slate-100 hover:text-navy-900",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
