import Image from 'next/image';
import { useState,  useRef } from 'react';
import { Menu} from '@/components';
import Dropdown from './Dropdown'; 
import { navLinks } from '@/constants';
import { Transition } from 'react-transition-group';
import { Scale } from 'chart.js';

const duration = 50;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
import Link from 'next/link';

const transitionStyles:any = {
  entering: { transform :'translateY(-200%)', opacity: 0 },
  entered:  { transform :'translateY(0)', opacity: 1 },
  exiting:  { transform :'translateY(0)', opacity: 1 },
  exited:  { transform :'translateY(-200%)', opacity: 0},
};
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);
 const nodeRef = useRef(null);
  return (
    <nav className='w-full bg-dark-500 shadow'>
      <div className='justify-between px-10 mx-auto md:items-center md:flex xl:px-40'>
     
          <div className='flex items-center justify-between md:block shrink-0'>
            <h2 className='text-2xl font-bold'>
              <Link href='/'>
                <Image src='/icons/logo.svg' height={64} width={144} alt="Website's logo" />
              </Link>
            </h2>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        
        <div className='py-2'>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-[16px] md:space-y-0'>
              <Menu items={navLinks}>
              <li >
              <button className='flex items-center justify-center md:w-40 md:h-12'>
                <span className='relative'>
                <Image className='' src='/icons/icon_info.svg' width={32} height={32} alt="Icon Menu" />
                {/* Notification counter */}
                <span className='absolute -top-1.5 -right-1.5 leading-none bg-primary-500 rounded-full p-1 px-1.5 inline-flex text-xs text-white'>0</span>
                </span>
                <Link className='md:ml-2 md:w-24 md:text-left hover:text-primary-400 ease-in-out duration-300' href="#">お知らせ</Link>
              </button>
            </li>
                <li className='relative'>
                  
                  <button type='button' className={`flex items-center justify-center ${dropdown ? 'bg-dark-600' : ''}`} onClick={() => setDropdown(!dropdown)}>
                  {dropdown ? (
                  <svg  className='w-7 h-7 text-primary-500' viewBox='0 0 20 20' fill='#FF963C'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg className='w-7 h-7 text-primary-500' fill='none' viewBox='0 0 24 24' stroke='#FF963C' strokeWidth={2}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                  </svg>
                )}
                  
                  </button>
                
                  <Transition nodeRef={nodeRef} in={dropdown} timeout={duration}>
                    {state => (
                  <div className={`bg-gray-400 rounded-none absolute top-full right-0 w-full md:w-60 z-40 ${dropdown ? 'visible ' : 'invisible pointer-events-none'}`} ref={nodeRef} style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                  }}>
                   <Dropdown />
                  </div>
                  )}
                  </Transition>
                </li>
              </Menu>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
