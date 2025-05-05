import Image from 'next/image';
import type { FeaturedRecitation } from '@/api/recitations.types';
import { Play } from 'lucide-react';

export function RecitationCard(recitation: FeaturedRecitation) {
  const canHover =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover)').matches;

  return (
    <div className='hover:cursor-pointer w-fit'>
      <div className='relative'>
        <Image
          src={recitation.reciter.photo_src}
          alt={`Reciter ${recitation.reciter.name} photo`}
          width={230}
          height={230}
          className='rounded-md'
        />
        <div className='absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-black/50 to-transparent rounded-md' />
        <div
          className={`bg-black/40 rounded-full p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            canHover &&
            'opacity-0 -translate-y-1/3 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-300 ease-in-out'
          }`}
        >
          <Play fill='white' color='white' />
        </div>
      </div>
      <div className='mt-2'>
        <h2 className='font-medium'>{recitation.chapter_name}</h2>
        <h3 className='text-muted-foreground text-xs md:text-sm'>
          {recitation.reciter.name}
        </h3>
      </div>
    </div>
  );
}
