import React from 'react';
import { useCartStore } from '../cartStore';  // Import the store

function Zustandcart() {
  const cart = useCartStore((state) => state.cart);  // Get the cart items from the store

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Zustandcart;
