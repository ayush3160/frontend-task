import React from 'react';

import NextImage from '@/components/NextImage';

import { Product } from '@/types/types';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <main>
      <div className='relative bg-white rounded-lg shadow-md overflow-hidden h-full w-[275px] group cursor-pointer'>
        <div className='p-6'>
          <NextImage
            useSkeleton={true}
            src={product.image}
            alt='Product Image'
            className='relative w-full h-48 object-cover'
            layout='fill'
          />
        </div>

        <div className='p-6 bg-[#F4F5F7] h-full'>
          <h2 className='text-[18px] font-bold mb-2'>
            {product.title.slice(0, 20)} ...
          </h2>
          <p className='text-gray-700 mb-4'>
            {product.description.slice(0, 50)} ...
          </p>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-lg font-bold'>${product.price}</span>
          </div>
        </div>

        {/* Overlay with button */}
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
