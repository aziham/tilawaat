import Image from 'next/image';
import { notFound } from 'next/navigation';
import ChapterCard from '@/components/chapter-card';
import ActionButton from '@/components/action-button';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shuffle, PlayCircle } from 'lucide-react';
import getReciterProfile from '@/shared/helpers/get-reciter-profile';

type ReciterPageParams = Promise<{
  reciterId: string;
}>;

async function ReciterPage({ params }: { params: ReciterPageParams }) {
  const { reciterId } = await params;

  const reciterProfile = await getReciterProfile(reciterId);

  if (!reciterProfile) return notFound();

  const { reciter, chapters } = reciterProfile;

  return (
    <>
      <div className='h-[230] p-4 bg-slate-300'>
        <ActionButton icon={ArrowLeft} />
      </div>
      <div className='relative -top-5 px-5 rounded-t-xl  bg-white'>
        <Image
          src={reciter.photoSrc}
          alt={`Reciter ${reciter.name} photo`}
          width={200}
          height={200}
          className='absolute top-0 -translate-y-1/2 left-1/2 transform -translate-x-1/2 rounded-xl shadow-2xl'
        />
        <div className='h-[120]' />
        <div className='flex flex-col items-center gap-1'>
          <h2 className='font-semibold text-lg'>{reciter.name}</h2>
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
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} reciter={reciter} chapter={chapter} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ReciterPage;
