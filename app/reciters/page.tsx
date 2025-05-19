import { AudioLines } from 'lucide-react';
import { PageBanner } from '@/components/blocks/page-banner';
import { SearchToolbar } from '@/features/reciters/components/search-toolbar';
import { Separator } from '@/components/ui/separator';

async function RecitersPage() {
  return (
    <>
      <PageBanner
        title='Reciters'
        subTitle='Experience the timeless beauty of the Quran through the voices of the world’s reciters.'
        icon={AudioLines}
      />
      <SearchToolbar />
      <Separator className='my-8 sm:my-10 data-[orientation=horizontal]:w-auto mx-5' />
    </>
  );
}

export default RecitersPage;
