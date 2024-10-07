// import React from 'react'
// import useCart from '../cartStore'

// function Zustandcart() {
// const cart = useCart((state)=>state.cart)
//   return (
//     <div>
//      {cart.map((item,index)=>(
//       <div key={index}>
//         <h3>{item.name}</h3>
//         <p>{item.price}</p>
//       </div>
//      ))}
//     </div>
//   )
// }

// export default Zustandcart





import React from 'react'
import useCart from '../cartStore'

function Zustandcart() {
const cart = useCart((state)=>state.cart)
  return (
    <div>
      {cart.map((item,index)=>(
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      )) }
    </div>
  )
}

export default Zustandcart
