import Link from 'next/link';
import React from 'react';

const RecordButton = () => {
  return (
    <div className='pt-8 pb-12 flex justify-center'>
      <Link
        href='#'
        className='text-light text-center font-semibold w-72 max-w-full bg-primary p-4 rounded-md hover:bg-primary-2'>
        記録をもっと見る
      </Link>
    </div>
  );
};

export default RecordButton;
