abstract class Employee{
    name:string
    constructor(name:string){
        this.name = name
    }
    // khai báoo phương thức
    // getFullName(){
    //     return this.name
    // }

    abstract getFullName():void;
    // đối với phương thức trong abs thì chỉ tên phương thức,
    //  kiểu dữ liệu trả về không có phần body
}
// cách khởi tạo đối tượng abs, thêm từ khóa abs vào đầu đối tượng
// let epl = new Employee("Trang")
// empl được gọi là 1 intance
// đối với abs thì không cho phép tạo đối tượng được
/*
    tạo 1 calss con kế thừa Employee
*/ 
class Student extends Employee{
    private age:number
    constructor(name:string, age:number){
        super(name)
        this.age = age
    }
    getFullName(): void {
        
    }
}