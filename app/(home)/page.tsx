import { HeroSection } from '@/features/home/components/hero-section';
import { RecitationsShelf } from '@/features/home/components/recitations-shelf';
import { RecitersShelf } from '@/features/home/components/reciters-shelf';
import { NarrationsGrid } from '@/features/home/components/narrations-grid';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecitationsShelf />
      <RecitersShelf />
      <NarrationsGrid />
      <div className='m-10' />
    </>
  );
}
