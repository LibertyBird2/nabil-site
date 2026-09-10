import React from 'react';
import { researchRepository } from '@/repositories';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ResearchListFilter } from '@/features/research/ResearchListFilter';
import { getTranslations } from 'next-intl/server';

export default async function ResearchPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'research' });
  const researchItems = await researchRepository.getAll(locale);

  return (
    <div className="py-16">
      <Container>
        <SectionHeader
          tag="Academic Publications"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <ResearchListFilter initialItems={researchItems} />
      </Container>
    </div>
  );
}
