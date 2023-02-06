import React from 'react';
import { records } from '@/constants';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  href: string;
}

const Record = ({ image, title, subtitle, href }: Props) => {
  return (
    <div
      className='relative w-72 h-72 flex flex-col items-center justify-center border-[24px] border-primary-300 mx-6 my-14 bg-cover cursor-pointer'
      style={{
        backgroundImage: `url(${image})`,
      }}>
      <Link href={href}>
        <div
          className='flex flex-col justify-center items-center
         backdrop-filter backdrop-grayscale w-60 h-60'>
          <div className='z-0 absolute inset-0 bg-dark-500 opacity-75'></div>
          <p className='z-10 text-primary-300 font-inter text-[25px] mb-[10px]'>{title}</p>
          <div className='z-10 flex items-center justify-center w-40 h-6 text-light text-sm font-inter bg-primary-400'>
            {subtitle}
          </div>
        </div>
      </Link>
    </div>
  );
};

const RecordLinks = () => {
  return (
    <>
      <div className='flex justify-center'>
        {records.map((record, index) => (
          <Record key={index} {...record} />
        ))}
      </div>
    </>
  );
};

export default RecordLinks;
