import React from 'react';
import { getProducts } from '@/app/api/product';
import { useQuery } from '@tanstack/react-query';
import Loader from '@/components/loader';
import { Product } from '@/types/types';

const ProductCard = React.lazy(
  () => import('@/components/product/ProductCard')
);

export default function ProductGrid() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>Have to handle this</h1>;
  }

  return (
    <>
      {data &&
        data.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </>
  );
}
