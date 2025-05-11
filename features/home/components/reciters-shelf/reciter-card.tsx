import Image from 'next/image';
import type { Reciter } from '@/api/reciters.types';

export function ReciterCard(reciter: Reciter) {
  return (
    <div className='hover:cursor-pointer w-fit'>
      <Image
        src={reciter.photoSrc}
        alt={`Reciter ${reciter.name} photo`}
        width={200}
        height={200}
        className='rounded-full'
      />
      <div className='mt-2'>
        <h4 className='font-medium'>{reciter.name}</h4>
        <h5 className='text-muted-foreground text-xs md:text-sm'>Reciter</h5>
      </div>
    </div>
  );
}
