import React from 'react';
import {Header, Footer} from '@/components';
import {useEffect} from 'react';
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <>
      <Header />
      {children}
      <Footer />
      <button className="fixed w-12 h-12 bottom-3 right-3 border border-gray-400 text-gray-400 rounded-full flex justify-center items-center ease-in-out duration-300 hover:bg-primary-400 hover:text-white hover:border-primary-400 group bg-white"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        
      >
        <svg width="17" height="10" viewBox="0 0 17 10" fill='#fff'  xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3591 7.92996L8.17956 0L0 7.92995L1.59451 9.4758L8.17955 3.0917L14.7646 9.4758L16.3591 7.92996Z" />
      </svg>
      <span className="absolute inset-0 flex justify-center items-center ease-in-out duration-300 group-hover:opacity-0">
      <svg width="17" height="10" viewBox="0 0 17 10" fill='#777'  xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3591 7.92996L8.17956 0L0 7.92995L1.59451 9.4758L8.17955 3.0917L14.7646 9.4758L16.3591 7.92996Z" />
      </svg>
      </span>

      </button>
    </>
  );
};

export default Layout;
