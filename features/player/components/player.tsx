'use client';

import Image from 'next/image';

import {
  ChevronDown,
  EllipsisVertical,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat
} from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/shared/components/ui/sheet';

import ActionButton from '@/shared/components/action-button';
import PlayPauseButton from './play-pause-button';
import PlaybackButton from './playback-button';
import { getCssVariable } from '@/shared/utils/get-css-variable';

import WavesurferPlayer from '@wavesurfer/react';
import { useRecitation } from '@/shared/stores/recitation-provider';
import { usePlayer } from '@/features/player/stores/player-provider';

function Player() {
  const { reciterName, chapterName, reciterPhotoSrc } = useRecitation();

  const { media, peaks, isPlaying, currentTime, duration, playPause } =
    usePlayer();

  if (!media || !reciterPhotoSrc) return;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          role='button'
          tabIndex={-1}
          className='bg-slate-300 fixed bottom-0 w-full flex justify-between items-center rounded-t-xl pt-3 px-4 pb-4 pointer-events-auto cursor-pointer'
        >
          <div className='flex items-center gap-3'>
            <Image
              src={reciterPhotoSrc}
              alt={`Reciter ${reciterName} photo`}
              width={60}
              height={60}
              className='rounded-sm'
            />
            <div className='flex flex-col gap-1'>
              <h1 className='text-sm font-medium'>{chapterName}</h1>
              <h2 className='text-muted-foreground text-xs'>{reciterName}</h2>
            </div>
          </div>
          <PlayPauseButton
            size='mini'
            isPlaying={isPlaying}
            onClick={(e) => {
              e.stopPropagation();
              playPause();
            }}
          />
        </div>
      </SheetTrigger>
      <SheetContent
        side='bottom'
        className='h-screen [&>button]:has-[.lucide-x]:hidden'
      >
        <SheetHeader className='flex-row justify-between items-center'>
          <SheetClose asChild>
            <ActionButton icon={ChevronDown} />
          </SheetClose>
          <SheetTitle>Quran Player</SheetTitle>
          <ActionButton icon={EllipsisVertical} />
        </SheetHeader>

        <div className='mx-4 flex flex-col gap-5'>
          <Image
            src={reciterPhotoSrc!}
            alt={`Reciter ${reciterName} photo`}
            width={400}
            height={400}
            className='rounded-3xl'
          />
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-2xl font-medium'>{chapterName}</h1>
            <h2 className='text-muted-foreground text-base'>{reciterName}</h2>
          </div>
          <div>
            <WavesurferPlayer
              media={media}
              peaks={peaks}
              waveColor={getCssVariable('--color-slate-300') || '#ff0000'}
              progressColor={getCssVariable('--color-slate-500')}
              height={60}
              barGap={2}
              barWidth={4}
              barRadius={16}
              dragToSeek
            />
            <div className='mt-2 flex justify-between'>
              <div>{currentTime}</div>
              <div>{duration}</div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-center'>
            <PlaybackButton icon={Shuffle} />
            <PlaybackButton icon={SkipBack} />
            <PlayPauseButton
              size='full'
              isPlaying={isPlaying}
              onClick={playPause}
            />
            <PlaybackButton icon={SkipForward} />
            <PlaybackButton icon={Repeat} />
          </div>
        </div>

        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Player;
