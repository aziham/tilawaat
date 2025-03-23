import * as React from 'react';
import { ChevronRightCircle } from 'lucide-react';

function ChapterCard() {
  return (
    <div
      role='button'
      className='flex justify-between items-center rounded-full  shadow-sm border cursor-pointer p-2'
    >
      <div className='flex items-center gap-3'>
        <div className='flex justify-center items-center font-semibold w-[50px] h-[50px] rounded-full bg-slate-200 text-slate-600'>
          01
        </div>
        <div className='flex flex-col'>
          <h2>Surat Al-Fatihah</h2>
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
