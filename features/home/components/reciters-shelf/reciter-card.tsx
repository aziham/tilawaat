import Image from 'next/image';
import type { Reciter } from '@/api/reciters.types';

export function ReciterCard(reciter: Reciter) {
  return (
    <div className='hover:cursor-pointer'>
      <Image
        src={reciter.photoSrc}
        alt={`Reciter ${reciter.name} photo`}
        width={300}
        height={300}
        className='rounded-full'
      />
      <div className='mt-2'>
        <h2 className='font-medium'>{reciter.name}</h2>
      </div>
    </div>
  );
}
