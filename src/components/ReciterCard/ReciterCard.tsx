import * as React from 'react';

import { ChevronRight } from 'lucide-react';

function ReciterCard() {
  return (
    <div
      role='button'
      className='flex justify-between items-center rounded-lg  shadow-sm border cursor-pointer py-3 px-3 pr-1'
    >
      <div className='flex items-center gap-3'>
        <div className='w-[80px] h-[80px] rounded-xl bg-slate-400' />
        <div className='flex flex-col gap-1'>
          <h2 className='font-medium'>Reciter Name</h2>
          <p className='text-muted-foreground text-sm'>Reciters</p>
        </div>
      </div>

      <ChevronRight strokeWidth={1} className='size-10 text-slate-600' />
    </div>
  );
}

export default ReciterCard;
