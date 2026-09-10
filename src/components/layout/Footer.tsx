import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Container } from '../shared/Container';
import { Scale, Mail, MapPin, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t-2 border-gold-500/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Scholar Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold-500 text-navy-950 rounded-lg">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                {t('title')}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold">
              <Award className="w-4 h-4" />
              <span>Associate Professor & Senior Legal Consultant</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider border-b border-navy-800 pb-2">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-gold-400 transition-colors">
                  {t('nav.research')}
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-gold-400 transition-colors">
                  {t('nav.articles')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/training" className="hover:text-gold-400 transition-colors">
                  {t('nav.training')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Chambers Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider border-b border-navy-800 pb-2">
              Academic Chambers
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>Faculty of Law / International Legal Advisory Chambers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>chambers@nabilalsayed-legal.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Legal Disclaimer */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white uppercase tracking-wider border-b border-navy-800 pb-2">
              Legal Notice
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed bg-navy-900/60 p-3 rounded-lg border border-navy-800">
              {t('footer.legalDisclaimer')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-800 text-xs text-center md:flex md:justify-between text-slate-500">
          <p>© {currentYear} {t('title')}. {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">Designed for High-Performance Legal & Academic Excellence.</p>
        </div>
      </Container>
    </footer>
  );
};
