import React from 'react'

export default function Bt6() {
    let user = {
        firstName:"Hà Huyền",
        lastName:"Trang"
    }

    function fullName(user:any):any{
        return user.firstName + " "+ user.lastName
    }
  return (
    <div>
        <div>Họ và tên: {fullName(user)}</div>
    </div>
  )
}
