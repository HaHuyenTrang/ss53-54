import React from 'react'
import Child from './Child'
interface Props{
    a:string;
    b:number
}
export default function parent(props:Props) {
    console.log(props);
  return (
    <div>
        <p>{props.a} năm nay {props.b} tuổi</p>
        <Child></Child>
    </div>
  )
}
