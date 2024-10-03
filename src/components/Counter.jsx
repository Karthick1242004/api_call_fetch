import React from 'react';
import { useCounter } from '../cartStore';  

function Counter() {
  const { count, setCount } = useCounter(); 
  return (
    <div>
      <button onClick={setCount}>{count}</button>   
    </div>
  );
}

export default Counter;
