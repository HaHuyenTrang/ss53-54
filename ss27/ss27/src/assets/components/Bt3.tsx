import React from 'react'

export default function Bt3() { 
  
        interface User{
        name:string
        gental:string
        birth:string
        email:string
        address:string
    }

        let user:User = {
            name:"Trang",
            gental:"nữ",
            birth:"15-06-25",
            email:"Trang@gamil.com",
            address:"Sơn La"
        }
   
  return (
   <div>
     <h4>Thông tin cá nhân</h4>
    <ul>
        <li>Họ và tên: {user.name}</li>
        <li>Giới tính: {user.gental}</li>
        <li>Ngày sinh: {user.birth}</li>
        <li>Email: {user.email}</li>
        <li>Địa chỉ: {user.address}</li>
    </ul>
   </div>
   
  )
}
