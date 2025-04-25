import { HeroSection } from '@/features/home/components/hero-section';
import { RecitationsShelf } from '@/features/home/components/recitations-shelf';
import { RecitersShelf } from '@/features/home/components/reciters-shelf';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecitationsShelf />
      <RecitersShelf />
    </>
  );
}
