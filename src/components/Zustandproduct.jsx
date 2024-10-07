import React from 'react'
import data from './data.json'
import useCart from '../cartStore';

function Zustandproduct() {
  const setCart = useCart((state)=>state.setCart)
  return (
    <div>
      {data.map((item,index)=>(
        <div key={index}>
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <button onClick={()=>setCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}


export default Zustandproduct
