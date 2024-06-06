import React, { createContext, useState } from 'react'
import A from './A'
export const Context = createContext("");
export default function UseContext() {
    const [name,setName]=useState<string>("Trang")
  return (
    <div>UseContext
        {/* 
            sinh ra giúp việc truyền dữ liệu giữa các component 
            có quan hệ cha con được nhanh hơn, dễ dàng hơn không
            phải truyền theo kiểu props bình thường
            - các component phải có quan hệ cha con
            - tạo 1 biến gán = createContext("")
            - dùng biến này bọn component
            <biến.Priovider value={}>
            -component con muốn nhận data
            useContext(biến bên trên export)
        */}
    <Context.Provider value={name}> 
            <A></A>   
    </Context.Provider>
        
    </div>
  )
}
