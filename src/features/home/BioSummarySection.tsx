import React from 'react';
import { BioSummary } from '@/types/home';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { GraduationCap, Award, Briefcase, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Yesteryear } from 'next/font/google';

export interface BioSummarySectionProps {
  bio: BioSummary;
}

export const BioSummarySection: React.FC<BioSummarySectionProps> = ({ bio }) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeader
          tag={t('home.bioTitle')}
          title={bio.headline}
          subtitle={t('home.bioSubtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-4">
            {bio.fullBio.map((paragraph, index) => (
              <p key={index} className="text-base text-slate-700 leading-relaxed font-sans">
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <Link href="/about">
                <Button variant="outline" size="md">
                  <span>{t('common.readMore')}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Timeline Summary */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="border-l-4 border-l-gold-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gold-100 rounded-lg text-gold-700">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-950">{t('about.academicPositions')}</h3>
              </div>
              <ul className="space-y-3 divide-y divide-slate-100">
                {bio.appointments.map((item, idx) => (
                  <li key={idx} className="pt-2 first:pt-0">
                    <p className="text-sm font-semibold text-navy-900">{item.role}</p>
                    <p className="text-xs text-slate-500">{item.organization} • <span className="text-gold-600 font-medium">{item.period}</span></p>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="border-l-4 border-l-navy-900">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-navy-100 rounded-lg text-navy-900">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-950">{t('about.education')}</h3>
              </div>
              <ul className="space-y-3 divide-y divide-slate-100">
                {bio.education.map((edu, idx) => (
                  <li key={idx} className="pt-2 first:pt-0">
                    <p className="text-sm font-semibold text-navy-900">{edu.degree}</p>
                    <p className="text-xs text-slate-500">{edu.institution} • <span className="text-navy-700 font-medium">{edu.year}</span></p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
