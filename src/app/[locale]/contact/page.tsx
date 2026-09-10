import React from 'react';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ContactForm } from '@/features/contact/ContactForm';
import { Card } from '@/components/ui/Card';
import { MapPin, Mail, Clock, ShieldCheck, Scale } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <div className="py-16">
      <Container>
        <SectionHeader
          tag="Direct Consultation & Inquiries"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          {/* Chambers Info Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-navy-950 text-white border-gold-500/30 p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-navy-800">
                <div className="p-2.5 bg-gold-500 text-navy-950 rounded-lg">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">{t('officeInfo')}</h3>
                  <span className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Chambers & Faculty</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{t('address')}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <span>chambers@nabilalsayed-legal.com</span>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span>{t('workingHours')}</span>
                </div>
              </div>
            </Card>

            <Card className="border-l-4 border-l-gold-500 p-6 space-y-3">
              <div className="flex items-center gap-2 text-gold-600 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Strict Confidentiality</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All legal inquiries, case details, and consultations are treated with strict professional confidentiality in accordance with international legal ethics.
              </p>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
