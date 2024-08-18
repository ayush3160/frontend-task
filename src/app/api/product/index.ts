import logger from '@/lib/logger';

import { Product } from '@/types/types';

export async function getProducts(): Promise<Product[]> {
  try {
    const data = await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    logger(error, 'Error Fetching Products');
    return [];
  }
}
