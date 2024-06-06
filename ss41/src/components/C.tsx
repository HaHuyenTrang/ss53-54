
import {useContext} from 'react'
import {Context} from './UseContext'
// interface Props{
//     name:string
// }
export default function C() {
    let result  = useContext(Context)
    console.log(result);
    
  return (
    <div>{result}</div>
  )
}
