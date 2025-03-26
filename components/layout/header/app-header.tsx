'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { AppSidebarTrigger } from '@/components/layout/sidebar';

export function AppHeader() {
  const isMobile = useIsMobile();

  return (
    isMobile && (
      <header className='sticky top-0 bg-white flex justify-between h-16 shrink-0 items-center border-b px-4'>
        <AppSidebarTrigger />
        <div>Tilawaat Logo</div>
        <div className='w-7' />
      </header>
    )
  );
}
