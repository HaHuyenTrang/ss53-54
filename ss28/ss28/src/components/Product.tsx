import React from 'react'
import Products from './Products'
interface Props{
    product:Product
}
interface Product{
    name:string,
    id:number,
    price:number
}
export default function Product(props:Props) {
    const {product} = props
  return (
    <div>
      {product.id} - {product.name}
    </div>
  )
}
