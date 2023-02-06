import Image from 'next/image';
import React from 'react';
import { Achivement, BodyGraph } from '@/components';

const Hero = () => {
  return (
    <>
      <section className='bg-dark-600 md:h-[312px]'>
        <div className='flex flex-col md:flex-row w-full h-full overflow-hidden'>
          <div className='md:w-72 xl:w-2/5 flex justify-center items-center relative '>
            <div className=' max-w-full relative flex justify-center items-center z-10 py-5 '>
              <Achivement />
            </div>
            <div className='absolute inset-0 overflow-hidden flex justift-center items-center bg-dark-600 -mx-3 md:mx-0'>
              <Image
                src='/images/d01.jpg'
                alt=''
                width={1000}
                height={500}
                className='w-full block opacity-90 object-cover min-h-full aspect-square'
              />
            </div>
          </div>
          <div className='md:flex-1 xl:w-3/5 flex justify-center items-center px-14 min-h-[300px] py-3'>
            <BodyGraph styles='max-w-full md:w-full w-auto' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
