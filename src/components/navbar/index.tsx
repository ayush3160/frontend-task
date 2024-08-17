import Link from 'next/link';
import React from 'react';
import { BsCart4 } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className='bg-black shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href={'/'} className='text-2xl font-bold text-white'>
          Flipkart
        </Link>
        <Link href='/cart' className='text-white px-4 py-2 hidden md:block'>
          <div className='relative'>
            <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2'>
              5
            </span>
            <BsCart4 className='text-2xl' />
          </div>
        </Link>
      </div>
    </nav>
  );
}
