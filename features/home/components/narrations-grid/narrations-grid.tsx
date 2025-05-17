'use client';

import { useGetNarrations } from '../../api/use-get-narrations';
import { NarrationCard } from './narration-card';
import { MoreButton } from '@/components/blocks/carousel-shelf';

const TITLE = 'Narrations';
const SUB_TITLE = 'Explore by your preferred narration';

export function NarrationsGrid() {
  const { data, isLoading, isError, error } = useGetNarrations();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  if (!data) return;

  return (
    <div className='mt-8 sm:mt-10 sm:ml-3'>
      <div className='ml-5 mr-6 mb-5 flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-semibold text-black/75'>{TITLE}</h2>
          <h3 className='text-muted-foreground text-xs md:text-sm'>
            {SUB_TITLE}
          </h3>
        </div>
        <MoreButton url='/narrations' label='Show All' />
      </div>
      <div className='mx-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3'>
        {data.map((narration) => (
          <NarrationCard key={narration.id} narration={narration} />
        ))}
      </div>
    </div>
  );
}
