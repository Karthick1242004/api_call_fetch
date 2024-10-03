import React from 'react';
import Productdata from './data.json';
import { useCartStore } from '../cartStore';  // Import the store

function Zustand() {
  const addToCart = useCartStore((state) => state.addToCart);  // Get the addToCart function from the store

  return (
    <div>
      {Productdata.map((prod, index) => (
        <div key={index}>
          <h1>{prod.name}</h1>
          <button onClick={() => addToCart(prod)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default Zustand;
