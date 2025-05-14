import { PageBanner } from '@/components/blocks/page-banner';
import { AudioLines } from 'lucide-react';

async function RecitersPage() {
  return (
    <>
      <PageBanner
        title='Reciters'
        subTitle='Experience the timeless beauty of the Quran through the voices of the world’s reciters.'
        icon={AudioLines}
      />
    </>
  );
}

export default RecitersPage;
