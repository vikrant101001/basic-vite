import { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

export const useCounter = (initialValue = 0) => {
  const [state, dispatch] = useReducer(counterReducer, { count: initialValue });
  
  const increment = () => dispatch({ type: 'increment' });
  const decrement = () => dispatch({ type: 'decrement' });
  const reset = () => dispatch({ type: 'reset' });
  
  return {
    count: state.count,
    increment,
    decrement,
    reset
  };
};
