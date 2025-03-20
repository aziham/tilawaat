import SurahCard from '@/components/SurahCard';
import ActionButton from '@/components/ActionButton';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shuffle, PlayCircle } from 'lucide-react';

function Reciter() {
  return (
    <>
      <div className='h-[230] p-4 bg-slate-300'>
        <ActionButton icon={ArrowLeft} />
      </div>
      <div className='relative -top-5 px-5 rounded-t-xl  bg-white'>
        <div className='absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 rounded-xl shadow-2xl  bg-slate-400 w-[200] h-[200]' />
        <div className='h-[120]' />
        <div className='flex flex-col items-center gap-1'>
          <h2 className='font-semibold text-lg'>Reciter Name</h2>
          <p className='text-muted-foreground text-sm'>Reciter</p>
        </div>
        <Separator className='my-7' />
        <div className='flex gap-5'>
          <Button className='flex-1 rounded-3xl py-5'>
            <Shuffle /> Shuffle
          </Button>
          <Button className='flex-1 rounded-3xl py-5' variant='secondary'>
            <PlayCircle /> Play
          </Button>
        </div>
        <div className='my-10' />
        <div className='flex flex-col gap-5'>
          <SurahCard />
          <SurahCard />
          <SurahCard />
          <SurahCard />
          <SurahCard />
        </div>
      </div>
    </>
  );
}

export default Reciter;
