import NextImage from '@/components/NextImage';
import { Product } from '@/types/types';
import React from 'react';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <main>
      <div className='bg-white rounded-lg shadow-md overflow-hidden h-full'>
        <NextImage
          useSkeleton={true}
          src={product.image}
          alt={'Product Image'}
          className='relative w-full h-48 object-cover'
          layout='fill'
        />
        <div className='p-6'>
          <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
          <p className='text-gray-700 mb-4'>
            {product.description.slice(0, 100)}
          </p>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-lg font-bold'>${product.price}</span>
            <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
