'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';
import Loader from '@/components/loader';
import ProductGrid from '@/components/product/ProductGrid';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='container mx-auto py-8'>
          <h1 className='text-4xl font-bold text-center mb-8'>Product Grid</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <React.Suspense fallback={<Loader />}>
              <ProductGrid />
            </React.Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
