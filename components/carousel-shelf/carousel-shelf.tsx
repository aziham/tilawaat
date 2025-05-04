'use client';

import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

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
  const wheelPlugin = React.useMemo(
    () => WheelGesturesPlugin({ forceWheelAxis: 'x' }),
    []
  );

  return (
    <section className={className}>
      <Carousel
        opts={{
          align: 'start',
          dragFree: true
        }}
        plugins={[wheelPlugin]}
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
        <CarouselContent className='ml-2 mt-2 -mr-25 md:-mr-15'>
          {items.map((item: T, index: number) => (
            <CarouselItem
              key={index}
              className='pl-3 not-first:pl-4 basis-1/3 sm:basis-1/4 lg:basis-1/5 xl:basis-1/7 last:mr-30 md:last:mr-20'
            >
              <div className='flex justify-center sm:p-3 sm:hover:bg-gray-200 transition-colors duration-100 ease-in-out rounded-md [&_img]:drop-shadow-md [&:hover_img]:drop-shadow-xl'>
                {renderItem(item)}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
