'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { decrement, increment, initCount, resetCount } from '@/store/counter/counterSlice';
import { useEffect, useState } from 'react';

interface Props {
  value?: number;
}

export const CartCounter = ({  value = 0 }: Props) => {

  //const [count, setCount] = useState(value);
  const  count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCount(value));
  }, [dispatch,value]);

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}