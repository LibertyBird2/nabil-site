import React from 'react';
import { mediaRepository } from '@/repositories';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { MediaSection } from '@/features/home/MediaSection';
import { getTranslations } from 'next-intl/server';

export default async function MediaPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'media' });
  const mediaItems = await mediaRepository.getAll(locale);

  return (
    <div className="py-16">
      <Container>
        <SectionHeader
          tag="Press & Events"
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <MediaSection mediaItems={mediaItems} />
      </Container>
    </div>
  );
}
