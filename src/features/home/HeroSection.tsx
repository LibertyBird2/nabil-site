import React from 'react';
import { HeroData } from '@/types/home';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Award, BookOpen, Scale, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white pt-16 pb-24 border-b border-gold-500/20">
      {/* Background Subtle Legal Pattern / Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Scale className="w-4 h-4" />
              <span>{t('heroTag')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight">
              {data.name}
            </h1>

            <p className="text-xl sm:text-2xl font-serif text-gold-400 leading-snug">
              {data.title}
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {data.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/research">
                <Button variant="gold" size="lg">
                  <span>{t('ctaPrimary')}</span>
                  {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  <span>{t('ctaSecondary')}</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Academic Crest & Credentials Card */}
          <div className="lg:col-span-4">
            <div className="glass-panel-dark p-8 rounded-2xl border border-gold-500/30 shadow-2xl relative">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-6 border border-gold-500/40">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                {data.academicAffiliation}
              </h3>
              <p className="text-xs text-gold-400 font-semibold uppercase tracking-wider mb-6">
                {data.consultingRole}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div>
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-2xl font-serif font-bold">{data.stats.publicationsCount}+</span>
                  </div>
                  <span className="text-xs text-slate-400">{t('stats.publications')}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                    <Award className="w-4 h-4" />
                    <span className="text-2xl font-serif font-bold">{data.stats.yearsExperience}</span>
                  </div>
                  <span className="text-xs text-slate-400">{t('stats.experience')}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                    <Scale className="w-4 h-4" />
                    <span className="text-2xl font-serif font-bold">{data.stats.casesConsulted}+</span>
                  </div>
                  <span className="text-xs text-slate-400">{t('stats.cases')}</span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-gold-400 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-2xl font-serif font-bold">{data.stats.studentsTrained}+</span>
                  </div>
                  <span className="text-xs text-slate-400">{t('stats.students')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
