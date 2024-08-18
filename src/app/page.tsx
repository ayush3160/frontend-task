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
      <React.Suspense fallback={<Loader />}>
        <ProductGrid />
      </React.Suspense>
    </main>
  );
}
