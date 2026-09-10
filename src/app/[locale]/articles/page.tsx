import React from 'react';
import { articlesRepository } from '@/repositories';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArticlesListFilter } from '@/features/articles/ArticlesListFilter';
import { getTranslations } from 'next-intl/server';

export default async function ArticlesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'articles' });
  const articles = await articlesRepository.getAll(locale);

  return (
    <div className="py-16">
      <Container>
        <SectionHeader
          tag="Legal Insights"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <ArticlesListFilter initialArticles={articles} />
      </Container>
    </div>
  );
}
