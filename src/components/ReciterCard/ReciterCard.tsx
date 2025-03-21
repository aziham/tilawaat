'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { Reciter } from '@/types';
import { ChevronRight } from 'lucide-react';

type ReciterCardProps = {
  reciter: Reciter;
};

function ReciterCard({ reciter }: ReciterCardProps) {
  const router = useRouter();

  const handleClick = () => router.push(`/reciters/${reciter.id}`);

  return (
    <div
      role='button'
      className='flex justify-between items-center rounded-lg  shadow-sm border cursor-pointer py-3 px-3 pr-1'
      onClick={handleClick}
    >
      <div className='flex items-center gap-3'>
        <Image
          src={reciter.photoSrc}
          alt={`Reciter ${reciter.name} photo`}
          width={80}
          height={80}
          className='rounded-xl'
        />
        <div className='flex flex-col gap-1'>
          <h2 className='font-medium'>{reciter.name}</h2>
          <p className='text-muted-foreground text-sm'>Reciters</p>
        </div>
      </div>

      <ChevronRight strokeWidth={1} className='size-10 text-slate-600' />
    </div>
  );
}

export default ReciterCard;
