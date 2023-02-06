import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MenuItem {
  icon: string;
  label: string;
  href: string;
}

interface MenuProps {
  items: Array<MenuItem>;
}

const Menu: React.FC<React.PropsWithChildren<MenuProps>> = ({ items, children }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <button className='flex items-center justify-center md:w-40 md:h-12'>
            <Image className='' src={item.icon} width={32} height={32} alt="Icon Menu"></Image>
            <Link className='md:ml-2 md:w-24 md:text-left hover:text-primary-400 ease-in-out duration-300' href={item.href}>{item.label}</Link>
          </button>
        </li>
      ))}
      {children}
    </>
  );
};

export default Menu;
