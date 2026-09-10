import React from 'react';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Scale, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export const ContactCtaSection: React.FC = () => {
  const t = useTranslations('home');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />

      <Container size="md">
        <div className="glass-panel-dark p-10 sm:p-14 rounded-3xl border border-gold-500/30 text-center space-y-6 shadow-2xl relative">
          <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto border border-gold-500/40">
            <Scale className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
            {t('contactCtaTitle')}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {t('contactCtaSubtitle')}
          </p>

          <div className="pt-4">
            <Link href="/contact">
              <Button variant="gold" size="lg" className="px-8">
                <span>{t('contactCtaBtn')}</span>
                {isRtl ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
