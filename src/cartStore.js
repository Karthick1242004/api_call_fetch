import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product]
  }))
}));

const useCounter = create((set) => ({
  count: 0,
  setCount: () => set((state) => ({
    count: state.count + 1
  }))
}));

export { useCounter, useCartStore } 
