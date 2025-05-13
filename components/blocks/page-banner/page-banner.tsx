import { Compass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type PageBannerProps = {
  title: string;
  subTitle: string;
  icon: LucideIcon;
};

export function PageBanner({ title, subTitle, icon: Icon }: PageBannerProps) {
  return (
    <section className='relative flex items-center md:justify-center h-[25vh] bg-[url(/banner-bg.jpg)] shadow-xl shadow-black/10'>
      <div className='ml-5 mb-5 flex flex-col gap-4'>
        <h1 className='text-white text-4xl sm:text-[2.5rem] md:text-[2.7rem] lg:text-5xl xl:text-6xl'>
          {title}
        </h1>
        <h2 className='text-gray-50 sm:text-[1.06rem] md:text-[1.1rem] lg:text-lg xl:text-xl'>
          {subTitle}
        </h2>
      </div>
      <div className='absolute bottom-[1px] right-[1px] py-1 px-2	rounded-tl-sm bg-white/80 text-green-950 flex gap-3'>
        <Compass />
        <Icon />
      </div>
    </section>
  );
}
