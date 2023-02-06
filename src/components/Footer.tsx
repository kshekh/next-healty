import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='md:text-[11px] bottom-0 w-full bg-dark-500 md:px-40'>
        <div className='flex justify-start  flex-wrap gap-5 md:gap-x-11 py-7'>
          <div>
            <a href='#' className='inline-flex whitespace-nowrap'>
              会員登録
            </a>
          </div>
          <div>
            <a href='#' className='inline-flex whitespace-nowrap'>
              運営会社
            </a>
          </div>
          <div>
            <a href='#' className='inline-flex whitespace-nowrap'>
              利用規約
            </a>
          </div>
          <div>
            <a href='#' className='inline-flex whitespace-nowrap'>
              個人情報の取扱について
            </a>
          </div>
          <div>
            <a href='#' className='inline-flex whitespace-nowrap'>
              特定商取引法に基づく表記
            </a>
          </div>
          <div>
            <a href='#' className='inline-flex whitespace-nowrap'>
              お問い合わせ
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
