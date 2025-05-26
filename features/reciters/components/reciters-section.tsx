'use client';

import { useState } from 'react';
import { useGetRecitersFull } from '../api/use-get-reciters-full';
import { SearchToolbar } from './search-toolbar';
import { Separator } from '@/components/ui/separator';
import { RecitersGrid } from './reciters-grid';

export function RecitersSection() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetRecitersFull({ page, limit: 12 });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: Failed to load reciters</div>;

  if (!data) return;

  return (
    <section className='mx-5 mt-8 sm:mt-10'>
      <SearchToolbar />
      <Separator className='my-8 sm:my-10 data-[orientation=horizontal]:w-auto' />
      <RecitersGrid reciters={data} />
    </section>
  );
}
