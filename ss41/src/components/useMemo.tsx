import React, { useState } from 'react'

export default function useMemo() {
    const [count,setCount]= useState(0)
    const [cart,setCart]= useState(0)
    let carts=[
        {
            product:"iphone5",
            price:8000,
            quantity:2,
        },
        {
            product:"iphone13",
            price:900,
            quantity:2,
        },
    ]
    // let memo = useMemo(()=>{
    //     let payMent = cart.reduce((acc,item)=>{
    //         return acc + item.price * item.quantity
    //     },0)
    //     return payMent
    // },[])
   
    // console.log(payMent);
    
  return (
    <div>useMemo
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}
