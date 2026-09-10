import React from 'react';
import { homeRepository } from '@/repositories';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Award, Briefcase, BookOpen, GraduationCap } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  const bioData = await homeRepository.getBio(locale);
  const heroData = await homeRepository.getHero(locale);

  return (
    <div className="py-16 space-y-16">
      <Container>
        <SectionHeader
          tag="Academic Biography"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Scholar Intro */}
        <div className="bg-navy-950 text-white p-8 sm:p-12 rounded-2xl border border-gold-500/30 shadow-xl mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold-400 mb-4">
            {heroData.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {heroData.summary}
          </p>
        </div>

        {/* Bio Paragraphs */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {bioData.fullBio.map((paragraph, idx) => (
            <p key={idx} className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Grid for Education & Appointments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="border-t-4 border-t-gold-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold-100 rounded-xl text-gold-700">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950">{t('education')}</h3>
            </div>
            <ul className="space-y-4 divide-y divide-slate-100">
              {bioData.education.map((edu, idx) => (
                <li key={idx} className="pt-3 first:pt-0">
                  <p className="text-base font-bold text-navy-900">{edu.degree}</p>
                  <p className="text-sm text-slate-600">{edu.institution}</p>
                  <span className="text-xs text-gold-600 font-semibold">{edu.year}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-t-4 border-t-navy-900">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-navy-100 rounded-xl text-navy-900">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950">{t('academicPositions')}</h3>
            </div>
            <ul className="space-y-4 divide-y divide-slate-100">
              {bioData.appointments.map((app, idx) => (
                <li key={idx} className="pt-3 first:pt-0">
                  <p className="text-base font-bold text-navy-900">{app.role}</p>
                  <p className="text-sm text-slate-600">{app.organization}</p>
                  <span className="text-xs text-navy-700 font-semibold">{app.period}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Teaching Philosophy */}
        <div className="mt-16 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 bg-gold-500 text-navy-950 rounded-lg">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy-950">{t('teachingPhilosophyTitle')}</h3>
          </div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans italic">
            "{t('teachingPhilosophyText')}"
          </p>
        </div>
      </Container>
    </div>
  );
}
