'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '../ui/Button';
import { Container } from '../shared/Container';
import { Scale, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/research', label: t('nav.research') },
    // { href: '/articles', label: t('nav.articles') },
    { href: '/services', label: t('nav.services') },
    // { href: '/training', label: t('nav.training') },
    // { href: '/media', label: t('nav.media') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-navy-800 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2.5 bg-navy-950 text-gold-400 rounded-lg group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm border border-gold-500/30">
              <Scale className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-navy-950 dark:text-white leading-tight">
                {t('title')}
              </span>
              <span className="hidden sm:block text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-sans font-semibold">
                {t('subtitle')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-navy-900'
                    : 'text-slate-700 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Language Switcher */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/contact">
              <Button variant="gold" size="sm">
                {t('nav.bookConsultation')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-navy-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 px-2 border-t border-slate-200 dark:border-navy-800 animate-slide-up">
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as any}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-navy-900'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-navy-800">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="gold" size="md" className="w-full">
                    {t('bookConsultation')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
