import Image from 'next/image';

export function HeroSection() {
  return (
    <section className='flex items-center justify-center relative h-[40dvh] md:h-[45dvh] bg-gradient-to-b from-teal-600 via-teal-700  to-teal-900 mb-5'>
      <div className='absolute bg-[url(/hero/pattern.png)] w-full h-full mix-blend-plus-lighter' />
      <Image
        src='/hero/mosque-portal.png'
        alt='Mosque illustration'
        height={150}
        width={150}
        className='absolute bottom-0 right-3 md:w-[230px] xl:w-[270px]'
      />
      <div className='absolute bg-black/60 w-full h-full' />
      <div
        className='absolute w-full h-[50%] bottom-0
          bg-gradient-to-t from-black/50 to-transparent '
      />
      <div className='z-10 ml-4 text-white flex flex-col gap-5 md:gap-7 xl:gap-9'>
        <h1 className='text-5xl leading-14 md:text-7xl md:leading-20 md:w-[80%]'>
          Your portal to divine words,
        </h1>
        <h2 className='ml-1 text-2xl md:text-3xl'>anytime, anywhere.</h2>
      </div>
    </section>
  );
}
