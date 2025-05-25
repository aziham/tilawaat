'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { ReciterCard } from './reciter-card';
import type { ReciterFull } from '../../api/reciters.types';

type RecitersGridProps = {
  reciters: ReciterFull[];
};

export function RecitersGrid({ reciters }: RecitersGridProps) {
  const { state: sidebarState } = useSidebar();

  return (
    <div
      className={`grid gap-5 grid-cols-1 ${
        sidebarState === 'collapsed' && 'md:grid-cols-2'
      } lg:grid-cols-2 ${sidebarState === 'collapsed' && 'xl:grid-cols-3'} ${
        sidebarState === 'collapsed' ? '2xl:grid-cols-4' : '2xl:grid-cols-3'
      }`}
    >
      {reciters?.map((reciter) => (
        <ReciterCard key={reciter.id} reciter={reciter} />
      ))}
    </div>
  );
}
