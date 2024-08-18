import { useQuery } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import SwiperCore from 'swiper';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import Loader from '@/components/loader';

import { getProducts } from '@/app/api/product';

import { Product } from '@/types/types';

// Import ProductCard dynamically
const ProductCard = React.lazy(
  () => import('@/components/product/ProductCard')
);

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function ProductGrid() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Error fetching products. Please try again later.</h1>;
  }

  const filterByCategory = (category: string) =>
    data?.filter((product: Product) => product.category === category);

  const categories = [
    "men's clothing",
    "women's clothing",
    'jewelery',
    'electronics',
  ];

  return (
    <>
      {categories.map((category) => (
        <section
          key={category}
          className='mb-10 shadow-none w-full flex flex-col items-center justify-center bg-slate-300 py-[68px]'
        >
          <h2
            className='md:text-[50px] sm:text-[45px] font-bold mb-[50px]
           capitalize'
          >
            {category}
          </h2>
          <Swiper
            style={{
              width: '1100px',
            }}
            // spaceBetween={10}
            slidesPerView={3.25}
            navigation
            pagination={{ clickable: true, type: 'bullets' }}
          >
            {filterByCategory(category)?.map((product: Product) => (
              <SwiperSlide key={product.id}>
                <Suspense fallback={<Loader />}>
                  <ProductCard product={product} />
                </Suspense>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}

      <section className='mt-20 ml-4'>
        <h2 className='text-2xl font-bold mb-5'>All Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center'>
          {data?.map((product: Product) => (
            <Suspense key={product.id} fallback={<Loader />}>
              <ProductCard product={product} />
            </Suspense>
          ))}
        </div>
      </section>
    </>
  );
}
