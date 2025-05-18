import { AudioLines } from 'lucide-react';
import { PageBanner } from '@/components/blocks/page-banner';
import { SearchToolbar } from '@/features/reciters/components/search-toolbar';

async function RecitersPage() {
  return (
    <>
      <PageBanner
        title='Reciters'
        subTitle='Experience the timeless beauty of the Quran through the voices of the world’s reciters.'
        icon={AudioLines}
      />
      <SearchToolbar />
    </>
  );
}

export default RecitersPage;
