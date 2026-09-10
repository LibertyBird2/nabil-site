import React from 'react';
import { trainingRepository } from '@/repositories';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { BookOpen, Clock, Users, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function TrainingPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'training' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });
  const programs = await trainingRepository.getAll(locale);
  const isRtl = locale === 'ar';

  return (
    <div className="py-16">
      <Container>
        <SectionHeader
          tag="Executive Masterclasses"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="space-y-12">
          {programs.map((prog) => (
            <Card key={prog.id} className="p-8 sm:p-10 hover:border-gold-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="gold">{prog.category}</Badge>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-4 h-4 text-gold-600" />
                      <span>{prog.duration}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                    {prog.title}
                  </h2>

                  <p className="text-base text-slate-700 leading-relaxed font-sans">
                    {prog.overview}
                  </p>

                  {/* Modules Breakdown */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h4 className="font-serif text-lg font-bold text-navy-950">Program Modules</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {prog.modules.map((mod, idx) => (
                        <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                          <p className="text-sm font-bold text-navy-900 mb-1">{mod.title}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{mod.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-navy-950 text-white p-6 rounded-xl border border-gold-500/30 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                      {tCommon('targetAudience')}
                    </span>
                    <p className="text-sm text-slate-200">{prog.targetAudience}</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-navy-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                      Learning Outcomes
                    </span>
                    {prog.learningOutcomes.map((out, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <Link href="/contact">
                      <Button variant="gold" size="md" className="w-full">
                        <span>{tCommon('enrollProgram')}</span>
                        {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
