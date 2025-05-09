'use client';

import { CarouselShelf } from '@/components/carousel-shelf';
import { MoreButton } from '@/components/carousel-shelf';
import { useGetReciters } from '../../api/use-get-reciters';
import { ReciterCard } from './reciter-card';

const TITLE = 'Reciters';
const SUB_TITLE = 'Your favorite reciters and more';

export function RecitersShelf() {
  const { data, isLoading, isError, error } = useGetReciters();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return;

  return (
    <CarouselShelf
      title={TITLE}
      subTitle={SUB_TITLE}
      items={data}
      renderItem={ReciterCard}
      action={<MoreButton url='/reciters' />}
    />
  );
}
