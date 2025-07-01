import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">useReducer Counter</h2>
      <div className="flex items-center gap-3">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="px-6 py-2 bg-gray-200 text-black rounded-lg font-bold text-lg min-w-[60px] text-center">
          {count}
        </span>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          +
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};