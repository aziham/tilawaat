import { Search } from 'lucide-react';
import { SidebarTrigger } from '@/components/ui/sidebar';

export function AppHeader() {
  return (
    <header className='sticky top-0 bg-white flex justify-between h-16 shrink-0 items-center border-b px-4'>
      <SidebarTrigger className='-ml-1' />
      <div>Tilawaat Logo</div>
      <Search className='justify-' />
    </header>
  );
}
