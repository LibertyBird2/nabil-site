import React from 'react';
import { MediaItem } from '@/types/media';
import { Container } from '@/components/shared/Container';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Link } from '@/i18n/routing';
import { Tv, Mic, Video, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export interface MediaSectionProps {
  mediaItems: MediaItem[];
}

const mediaTypeIcon: Record<string, React.ReactNode> = {
  interview: <Tv className="w-5 h-5 text-gold-600" />,
  keynote: <Video className="w-5 h-5 text-gold-600" />,
  podcast: <Mic className="w-5 h-5 text-gold-600" />,
};

export const MediaSection: React.FC<MediaSectionProps> = ({ mediaItems }) => {
  const t = useTranslations('home');
  const tCommon = useTranslations('common');

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <Container>
        <SectionHeader
          tag="Keynotes & Media Appearances"
          title={t('mediaTitle')}
          subtitle={t('mediaSubtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    {mediaTypeIcon[item.type] || <Tv className="w-5 h-5 text-gold-600" />}
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{item.date}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gold-600 font-semibold mb-3">
                  {item.publisher}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                  {item.summary}
                </p>
              </div>

              {item.externalUrl && (
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
                  >
                    <span>View Press / Recording</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
