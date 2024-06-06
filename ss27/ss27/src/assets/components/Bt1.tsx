import React from 'react'

export default function Bt1() {
    let ListCount:string[] = ["HTML", "CSS", "Javascript", "ReactJS"]
    
  return (
    <div>
        <h1>Danh sách khóa học</h1>
        <ul>
        {ListCount.map((item,index)=>{
            return <li>{index+1} {item}</li>
        })}
        </ul>
    </div>
  )
}
