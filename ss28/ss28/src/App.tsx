import React from 'react'
import Parent from './components/Parent'
// import Product from './components/Product';
import Products from './components/Products';
export default function App() {
  let fullName:string = "Trang";
  let age: number = 18;
  let products=[
    {
      name:"iphone12",
      id:1,
      price:500,
    },
    {
      name:"iphone11",
      id:2,
      price:500,
    },
    {
      name:"iphone15",
      id:3,
      price:500,
    }
  ]
  return (
    <div>
      <p>props : properties
        - dùng để truyênf , gửi dữ liệu components cha xuống components con 
        - thế nào là component cha? : component cha chứa component con
        - thế nào là component con?
      </p>
      <p>
        state
        -
      </p>
      <Parent a={fullName} b={age}></Parent>
      <Products c={products}></Products>
    </div>
  )
}
