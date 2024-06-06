import React from 'react'
import Product from './Product'
interface Props{
   c:Product[]
}
interface Product{
    name:string,
    id:number,
    price:number,
}
export default function Products(props:Props) {
     console.log(props);
    const {c} = props
    
  return (
    <div>Products
        <ul>
            {c.map((item,index,arr)=>{
                return <Product product={item}></Product>
            })}
        </ul>
        {/* <li>{item.name}</li> */}
    </div>
  )
}
