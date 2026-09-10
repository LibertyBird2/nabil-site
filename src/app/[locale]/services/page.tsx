import React from 'react';
import { servicesRepository } from '@/repositories';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ServicesSection } from '@/features/home/ServicesSection';
import { ContactForm } from '@/features/contact/ContactForm';
import { getTranslations } from 'next-intl/server';
import { CheckCircle2, ShieldCheck, Scale, FileText } from 'lucide-react';

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'services' });
  const services = await servicesRepository.getAll(locale);

  return (
    <div className="py-16 space-y-16">
      <Container>
        <SectionHeader
          tag="Legal Advisory & Consulting"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Detailed Services Grid */}
        <ServicesSection services={services} />

        {/* Consultation Inquiry Form */}
        <div className="pt-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-navy-950">{t('consultationTitle')}</h2>
            <p className="text-sm text-slate-600 mt-2">{t('consultationDesc')}</p>
          </div>
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
