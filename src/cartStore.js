import { create } from 'zustand';

const useCart = create((set)=>({
  cart:[],
  setCart: (rev)=>set((state)=>({
    cart:[...state.cart,rev]
  }))
}))
export default useCart


