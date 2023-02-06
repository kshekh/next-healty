import React from 'react';

const TableRow = () => {
  return (
    <tr>
      <td className='w-[416px] border-b-[1px] border-customBorder p-0 pb-[2px]'>
        <div className='flex flex-col'>
          <div className='flex justify-between h-[22px]'>
            <ul className='text-left text-[15px] list-disc pl-4'>
              <li>家事全般（立位・軽い）</li>
            </ul>
            <p className='text-right font-inter text-lg text-primary-300'>10 min</p>
          </div>
          <p className='text-left font-inter text-[15px] text-primary-300 pl-4 h-[18px]'>26kcal</p>
        </div>
      </td>

      <td className='w-[416px] border-b-[1px] border-customBorder p-0'>
        <div className='flex flex-col'>
          <div className='flex justify-between h-[22px]'>
            <ul className='text-left text-[15px] list-disc pl-4'>
              <li>家事全般（立位・軽い）</li>
            </ul>
            <p className='text-right font-inter text-lg text-primary-300'>10 min</p>
          </div>
          <p className='text-left font-inter text-[15px] text-primary-300 pl-4 h-[18px]'>26kcal</p>
        </div>
      </td>
    </tr>
  );
};
const Exercise = () => {
  return (
    <div className='bg-dark-500 h-[264px] mb-14 px-6 py-4'>
      <div className='text-left font-inter flex'>
        <p className='font-normal text-[15px] mr-6'>
          MY
          <br />
          EXERCISE
        </p>
        <p className='font-normal text-[22px]'>2021.05.21</p>
      </div>
      <div className='max-h-[192px] overflow-x-hidden overflow-y-scroll scrollbar'>
        <table className='table-fixed w-full border-separate border-spacing-x-10 border-spacing-y-1 ml-[-40px]'>
          <tbody>
            {[...Array(10)].map((index) => (
              <TableRow key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exercise;
