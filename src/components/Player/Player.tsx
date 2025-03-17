'use client';

import ActionButton from '@/components/ActionButton';
import PlayPauseButton from './PlayPauseButton';
import PlaybackButton from './PlaybackButton';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';

import {
  ChevronDown,
  EllipsisVertical,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat
} from 'lucide-react';

function Player() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          role='button'
          tabIndex={-1}
          className='bg-slate-300 fixed bottom-0 w-full flex justify-between items-center rounded-t-xl pt-3 px-4 pb-4 pointer-events-auto cursor-pointer'
        >
          <div className='flex items-center gap-3'>
            <div className='h-[60px] w-[60px] bg-slate-500 rounded-sm'>
              <span className='sr-only'>Reciter Photo</span>
            </div>
            <div className='flex flex-col gap-1'>
              <h1 className='text-sm font-medium'>Surah Name</h1>
              <h2 className='text-muted-foreground text-xs'>Reciter Name</h2>
            </div>
          </div>
          <PlayPauseButton
            size='mini'
            isPlaying
            onClick={(e) => {
              e.stopPropagation();
              console.log('play/pause');
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
          <div className='h-[400px] bg-slate-500 rounded-3xl'>
            <span className='sr-only'>Reciter Photo</span>
          </div>
          <div className='flex flex-col items-center gap-1'>
            <h1 className='text-2xl font-medium'>Surah Name</h1>
            <h2 className='text-muted-foreground text-base'>Reciter Name</h2>
          </div>
          <div className=''>
            <div className='w-full bg-slate-300 h-15 mb-3'></div>
            <div className='flex justify-between'>
              <div>02:36</div>
              <div>04:52</div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <PlaybackButton icon={Shuffle} />
            <PlaybackButton icon={SkipBack} />
            <PlayPauseButton size='full' isPlaying={false} />
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
