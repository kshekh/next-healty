import { RecordLinks, MyDiary, RecordButton, Exercise } from '@/components';
import React from 'react';

const myrecord = () => {
  return (
    <div className='max-w-[960px] m-auto'>
      <RecordLinks />
      <Exercise />
      <MyDiary />
      <RecordButton />
    </div>
  );
};

export default myrecord;
