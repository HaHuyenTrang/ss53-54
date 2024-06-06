/*
        interface
trong interface sẽ gồm có thuộc tính và phương thức
đối với phương thức thì không có phần thân tức là nó chỉ định nghĩa 
thôi đối với interface thì không thể dùng kiểu kết hợp (union và intersection) 
được như đối với type
Có thể khởi tạo đối tượng từ interface được không?
==> không thể khởi tạo đối tượng từ interface được
-interface sinh ra nhằm mục đích gì?
-interface là 1 cái khuân mẫu cho các class khác kế thừa phải tuân theo
-các class con khi kế thừa interface bắt buộc phải triển khai tất cả các 
thuộc tính và phương thức của interface (implement)
*/       


interface Sales{
    name:string
    sale():string
}
interface Sale{
    name:string
    address:string
}
type A={
    name:string
}
type B={
    name:string
    age:number
}
type C=A|B
class Persons implements Sales{
    name:string
    constructor(name:string){
        this.name = name
    }
    sale():string{
        return ""
    }
    
}