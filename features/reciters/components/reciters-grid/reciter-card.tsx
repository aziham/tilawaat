import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { ReciterFull } from '../../api/reciters.types';

type ReciterCardListProps = {
  reciter: ReciterFull;
};

export function ReciterCard({ reciter }: ReciterCardListProps) {
  return (
    <div className='border border-slate-200 flex flex-col rounded-xl'>
      <div className='m-5 flex gap-5'>
        <Image
          src={reciter.photoSrc}
          alt={`Reciter ${reciter.name} photo`}
          width={100}
          height={100}
          className='rounded-xl'
        />
        <div className='grow min-w-0'>
          <h4 className='font-medium truncate'>{reciter.name}</h4>
          <h5 className='text-muted-foreground text-sm'>Reciter</h5>
          <Separator className='my-3' />
          <h4 className='text-sm'>
            <span className='text-muted-foreground'>
              Available Recitations:{' '}
            </span>
            <span className='font-medium'>{reciter.totalChapters}</span>
          </h4>
          <h4 className='mt-1 text-sm truncate'>
            <span className='text-muted-foreground'>Narration: </span>
            <span className='font-medium'>{reciter.narration}</span>
          </h4>
        </div>
      </div>
      <Button className='mx-5 mb-5 font-medium'>View Profile</Button>
    </div>
  );
}
