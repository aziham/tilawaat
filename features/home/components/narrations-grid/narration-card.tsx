import type { Narration } from '@/api/narrations.types';

type NarrationCardProps = {
  narration: Narration;
};

export function NarrationCard({ narration }: NarrationCardProps) {
  return (
    <div
      role='button'
      className='cursor-pointer group relative overflow-hidden flex justify-between items-center rounded-xl border border-slate-200 p-2 hover:bg-slate-200/70 hover:shadow transition-colors duration-100'
    >
      <div className='absolute inset-0 bg-current opacity-[4%] [mask-image:url("/narration-card-pattern.png")] group-hover:opacity-[2%]' />

      <div className='flex items-center gap-3 relative z-10'>
        <div className='flex justify-center items-center font-semibold w-[50px] h-[50px] rounded-xl bg-slate-200 text-slate-600 group-hover:bg-slate-300 group-hover:text-slate-800'>
          {String(narration.id).padStart(2, '0')}
        </div>
        <div className='flex flex-col'>
          <p>{narration.name}</p>
          <p className='text-muted-foreground text-xs font-medium'>Narration</p>
        </div>
      </div>
    </div>
  );
}
