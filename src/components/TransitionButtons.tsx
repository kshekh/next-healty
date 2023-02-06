import React from 'react';
import { foodCategories } from '@/constants';

// トップページ・入力へ遷移するボタン
const TransitionButtons = () => {
  return (
    <section className='flex flex-wrap justify-center items-center py-5 px-3 sm:px-5 lg:p-10 gap-5 xs:gap-10 lg:gap-20'>
      {foodCategories.map((category, index) => {
        return (
          <div className='relative' key={index}>
            <picture>
              <img src={`/icons/hexagonalShape.svg`} alt={'Menu Icon'} className='h-36' />
            </picture>
            <div className='absolute inset-0 px-1 py-8 flex flex-col justify-center items-center gap-2 text-light'>
              <div className='flex-1 flex justify-center items-center'>
                <picture>
                  <img
                    src={`/icons/${category.icon}.svg`}
                    alt={category.name}
                    className='w-12'
                    style={{ filter: 'invert(91%) sepia(0%) saturate(7499%) hue-rotate(336deg) brightness(112%) contrast(101%)' }}
                  />
                </picture>
              </div>
              <h3 className='text-white font-medium text-center'>{category.name}</h3>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TransitionButtons;
