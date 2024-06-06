"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
}
// cách khởi tạo đối tượng abs, thêm từ khóa abs vào đầu đối tượng
// let epl = new Employee("Trang")
// empl được gọi là 1 intance
// đối với abs thì không cho phép tạo đối tượng được
/*
    tạo 1 calss con kế thừa Employee
*/
class Student extends Employee {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    getFullName() {
    }
}
