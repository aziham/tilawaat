'use client';

import { Reciter, Chapter } from '@/types';
import { ChevronRightCircle } from 'lucide-react';
import { useRecitation } from '@/contexts/RecitationProvider';

type ChapterCardProps = {
  reciter: Reciter;
  chapter: Chapter;
};

function ChapterCard({ reciter, chapter }: ChapterCardProps) {
  const { setRecitation } = useRecitation();

  const handleClick = () =>
    setRecitation({
      reciterName: reciter.name,
      chapterName: chapter.name,
      reciterPhotoSrc: reciter.photoSrc,
      audioSrc: chapter.audioSrc,
      waveformSrc: chapter.waveformSrc
    });

  return (
    <div
      role='button'
      className='flex justify-between items-center rounded-full  shadow-sm border cursor-pointer p-2'
      onClick={handleClick}
    >
      <div className='flex items-center gap-3'>
        <div className='flex justify-center items-center font-semibold w-[50px] h-[50px] rounded-full bg-slate-200 text-slate-600'>
          {chapter.id}
        </div>
        <div className='flex flex-col'>
          <h2>Surat {chapter.name}</h2>
          <p className='text-muted-foreground text-xs'>Chapter</p>
        </div>
      </div>

      <ChevronRightCircle
        strokeWidth={1}
        className='size-8 text-slate-400 mr-2'
      />
    </div>
  );
}

export default ChapterCard;
