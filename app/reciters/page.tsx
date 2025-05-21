import { AudioLines } from 'lucide-react';
import { PageBanner } from '@/components/blocks/page-banner';
import { RecitersSection } from '@/features/reciters/components';

async function RecitersPage() {
  return (
    <>
      <PageBanner
        title='Reciters'
        subTitle='Experience the timeless beauty of the Quran through the voices of the world’s reciters.'
        icon={AudioLines}
      />
      <RecitersSection />
    </>
  );
}

export default RecitersPage;
