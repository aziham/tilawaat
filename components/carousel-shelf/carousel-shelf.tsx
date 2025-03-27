'use client';

import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { useIsMobile } from '@/hooks/use-mobile';

interface CarouselShelfProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function CarouselShelf<T>({
  title,
  items,
  renderItem,
  action,
  className
}: CarouselShelfProps<T>) {
  const isMobile = useIsMobile();

  return (
    <section className={className}>
      <Carousel
        opts={{
          align: 'start',
          dragFree: true
        }}
        className='w-full'
      >
        <div className='mx-5 my-3 flex justify-between items-center'>
          <h2 className='text-xl font-medium'>{title}</h2>
          <div className='flex gap-2'>
            {action}
            <div className='flex gap-2 items-center'>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </div>
        <CarouselContent className='ml-2 -mr-25 md:-mr-15'>
          {items.map((item: T, index: number) => (
            <CarouselItem
              key={index}
              className='pl-3 basis-1/3 md:basis-1/4 lg:basis-1/6 last:mr-30 md:last:mr-20'
            >
              {renderItem(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

{
  /* <div className='rounded-full border px-3 pt-1 pb-2 flex justify-center items-center text-xs font-medium'>
More
</div>


<Card>
  <CardContent className='flex items-center justify-center p-0 h-24'>
    <span className='text-2xl font-semibold'>{index + 1}</span>
  </CardContent>
</Card>; */
}
