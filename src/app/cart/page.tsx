'use client';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import NextImage from '@/components/NextImage';

import { removeProductFromCart } from '@/store/slices/cartSlice';
import { RootState, useAppSelector } from '@/store/store';

import { Product } from '@/types/types';

interface CartState extends Product {
  quantity: number;
}

export default function Cart() {
  const cartProducts = useAppSelector(
    (state: RootState) => state.cart.products
  );

  const dispatch = useDispatch();

  const [cartItems, setCartItems] = React.useState<CartState[]>(
    cartProducts.map((item: Product) => ({ ...item, quantity: 1 }))
  );

  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    dispatch(removeProductFromCart(id));

    setCartItems(
      cartItems.filter((value: CartState) => {
        return value.id !== id;
      })
    );
  };

  const calculateTotal = useCallback(() => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className='flex flex-col lg:flex-row gap-8 p-6'>
      {/* Cart Items */}
      <div className='w-full lg:w-2/3'>
        <h2 className='text-2xl font-bold mb-4'>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between bg-white p-4 mb-4 shadow-md rounded-lg'
          >
            <div className='flex items-center'>
              <NextImage
                src={item.image}
                alt={item.title}
                className='relative w-20 h-20 object-cover rounded-md'
                layout='fill'
              />
              <div className='ml-4'>
                <h3 className='text-lg font-bold'>{item.title}</h3>
                <p className='text-gray-600'>${item.price}</p>
                <div className='flex items-center mt-2'>
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className='bg-gray-200 px-2 py-1 rounded-l-md'
                  >
                    -
                  </button>
                  <span className='px-4 py-1 border-t border-b'>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className='bg-gray-200 px-2 py-1 rounded-r-md'
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <button
                onClick={() => removeItem(item.id)}
                className='text-red-500 hover:text-red-700 ml-4'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className='w-full flex justify-between flex-col lg:w-1/3 bg-white p-6 shadow-md rounded-lg'>
        <h2 className='text-2xl font-bold mb-6'>Order Summary</h2>
        <div className='mb-4 flex flex-col gap-1'>
          <p className='text-lg'>Subtotal:</p>
          {cartItems.map((item, index) => (
            <p key={index} className='text-sm text-slate-700'>
              {item.title} <span className='font-bold'>{item.price}</span>
            </p>
          ))}
          <p className='text-sm text-slate-700'></p>
          <p className='text-lg font-bold'>${calculateTotal()}</p>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600'>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
