import React from 'react';
import { foodItems } from '@/constants';
import Image from 'next/image';

const MealHistory = () => {
  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 px-3 lg:px-6 xl:px-[160px] ">
      {foodItems.map((item, index) => {
        return (
          <div className="relative" key={index}>
            <Image src={item.thumb} alt="" className="w-full block" width={234} height={234} />
            <p className="py-1 px-2 text-white bg-primary-300 w-32 absolute bottom-0 ">
              {item.name}
            </p>
          </div>
        );
      })}
        </div>
    </section>
  );
};

export default MealHistory;
