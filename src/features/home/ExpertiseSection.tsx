import React from 'react';
import { ExpertiseArea } from '@/types/home';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Landmark, Gavel, Cpu, ScrollText, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface ExpertiseSectionProps {
  expertiseAreas: ExpertiseArea[];
}

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  ScrollText: <ScrollText className="w-6 h-6" />,
};

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertiseAreas }) => {
  const t = useTranslations('home');

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <Container>
        <SectionHeader
          tag="Academic & Professional Foundations"
          title={t('expertiseTitle')}
          subtitle={t('expertiseSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((item) => (
            <Card key={item.id} className="group hover:border-gold-500 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-navy-950 text-gold-400 rounded-xl group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                    {iconMap[item.iconName] || <Landmark className="w-6 h-6" />}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {item.topics.map((topic, idx) => (
                  <Badge key={idx} variant="slate">
                    {topic}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
