import React from 'react';
import { Testimonial } from '@/types/home';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const t = useTranslations('home');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          tag="Peer & Client Endorsements"
          title={t('testimonialsTitle')}
          subtitle={t('testimonialsSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between border-t-4 border-t-gold-500 bg-slate-50/50">
              <div>
                <div className="text-gold-500 mb-4">
                  <Quote className="w-8 h-8 opacity-80" />
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6 font-serif">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <p className="text-sm font-bold text-navy-950">{item.authorName}</p>
                <p className="text-xs text-slate-500">{item.authorTitle}</p>
                <p className="text-xs text-gold-600 font-medium">{item.organization}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
