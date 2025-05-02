'use client';

import { CarouselShelf } from '@/components/carousel-shelf';
import { MoreButton } from '@/components/carousel-shelf';
import { useGetReciters } from '../../api/use-get-reciters';
import { ReciterCard } from './reciter-card';

const TITLE = 'Reciters';

export function RecitersShelf() {
  const { data, isLoading, isError, error } = useGetReciters();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return;

  return (
    <CarouselShelf
      className='mt-5'
      title={TITLE}
      items={data}
      renderItem={ReciterCard}
      action={<MoreButton url='/reciters' />}
    />
  );
}
