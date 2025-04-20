'use client';

import { CarouselShelf } from '@/components/carousel-shelf';
import { useGetFeaturedRecitations } from '../../api/use-get-featured-recitations';
import { RecitationCard } from './recitation-card';

const TITLE = 'Featured Recitations';

export function RecitationsShelf() {
  const { data, isLoading, isError, error } = useGetFeaturedRecitations();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return;

  return (
    <CarouselShelf title={TITLE} items={data} renderItem={RecitationCard} />
  );
}
