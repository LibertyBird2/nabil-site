import React from 'react';
import { LegalService } from '@/types/service';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Link } from '@/i18n/routing';
import { Scale, Gavel, FileText, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export interface ServicesSectionProps {
  services: LegalService[];
}

const iconMap: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <Container>
        {/* <SectionHeader
          tag="Legal Advisory & Consulting"
          title={t('servicesTitle')}
          subtitle={t('servicesSubtitle')}
        /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv) => (
            <Card key={srv.id} className="flex flex-col justify-between group hover:border-navy-900 border-2">
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300 shadow-sm">
                  {iconMap[srv.iconName] || <Scale className="w-6 h-6" />}
                </div>

                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {srv.shortDescription}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    {tCommon('deliverables')}
                  </span>
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link href="/services">
                  <Button variant="primary" size="md" className="w-full">
                    <span>{tCommon('requestService')}</span>
                    {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
