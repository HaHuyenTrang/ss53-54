"use strict";
/*
    OOP: lập trình hướng đối tượng
    object oeeiented proparam
    mô hình lập trình dựa trên các đối tượng thực tế
*/ class student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(`xin chào ${this.name}`);
        return this.name;
    }
    getAge() {
        console.log(`${this.age}`);
    }
}
//tạo đối tượng dùng từ khóa new
let std = new student("Trang", 18);
console.log(std);
console.log(std.name);
console.log(std.getName());
