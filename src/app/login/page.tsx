'use client';
import {
  LoginRequestBody,
  LoginResponseData,
  loginUser,
} from '@/app/api/login';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = React.useState<string>('random@random.com');
  const [password, setPassword] = React.useState<string>('random');
  const router = useRouter();

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.name === 'email') {
        setEmail(event.target.value);
      } else {
        setPassword(event.target.value);
      }
    },
    [setEmail, setPassword]
  );
  const handleLogin = React.useCallback(async () => {
    const user: LoginRequestBody = {
      email,
      password,
    };

    // const data: LoginResponseData = await loginUser(user);

    router.push('/');
  }, [email, password]);

  return (
    <main>
      <section>
        <div className='flex items-center justify-center h-screen bg-gray-100'>
          <div className='bg-white rounded-lg shadow-lg p-6 max-w-sm'>
            <h2 className='text-2xl text-center font-bold mb-4'>Login</h2>
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 font-bold mb-2'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={password}
                placeholder='Enter your password'
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <button
              className='bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600'
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
