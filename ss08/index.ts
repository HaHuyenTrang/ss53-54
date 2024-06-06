/*
    union: kiểu kết hợp
    intersection
*/ 
let a1:number | string = 5;
a1="Trang";
let number:(number | string)[]=[1,2,3,4]

type student={
    name:string,
    address:string,
    phone:string,
}
let obj:student={
    name:"Trang",
    address:"Sơn La",
    phone:"1900100c"
}
let a:number|string|undefined = 1;
a = "Hồng";
// tham chiếu ( array )
let numbers:(number|string)[] = [1, 2, 3, 4, 5]
let b:number = 6;

type A = {
    name: string
    address: string,
    phone: string,
}
type C = A&B;
type B = {
    email: string
}
let obj11:A= {
    name: "Hồng",
    address: 'hn',
    phone:"0987654"
}
let obj1:C= {
    name: "Hồng",
    address: 'hn',
    phone:"0987654",
    email: "hong@gmail.com"
}


// tuple
let array: (number|string)[]=["Trang",5];
let arr: [number,string];
arr=[18,"Trang"]
arr.push(20)