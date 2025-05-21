import { SearchToolbar } from './search-toolbar';
import { Separator } from '@/components/ui/separator';

export function RecitersSection() {
  return (
    <>
      <SearchToolbar />
      <Separator className='my-8 sm:my-10 data-[orientation=horizontal]:w-auto mx-5' />
    </>
  );
}
