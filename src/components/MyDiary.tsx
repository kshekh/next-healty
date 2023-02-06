import React from 'react';

import { diaryList } from '@/constants';

interface Props {
  date: string;
  time: string;
  text: string;
  index: number;
}

const Diary = ({ date, time, text, index }: Props) => {
  return (
    <div className='h-[231px] border-2 border-diaryBorder p-4'>
      <div className='mb-2'>
        <p className='font-inter text-dark-500 text-lg'>{date}</p>
        <p className='font-inter text-dark-500 text-lg'>{time}</p>
      </div>
      <p className='font-noto text-dark-500 text-xs whitespace-pre-wrap'>{text}</p>
    </div>
  );
};

const MyDiary = () => {
  return (
    <>
      <p className='text-dark-500 text-[22px] mb-2'>MY DIARY</p>
      <div className='grid grid-cols-4 gap-[12px]'>
        {diaryList.map((diary, index) => (
          <Diary key={index} {...diary} index={index} />
        ))}
      </div>
    </>
  );
};

export default MyDiary;
