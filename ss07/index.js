"use strict";
// 1. array
let number = [1, 2, 3, 4];
// khai báo mảng number các phần tử trong mảng number phải là number
let student = ["hoa", "hồng"];
// 2. object
let obj = {
    name: "Trang",
    address: "sơn la",
    id: 1,
};
let obj1 = {
    name: "Trang",
    address: "bac yen",
    id: 15,
};
// 3. enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "Trang",
    address: "hn",
    role: 0
};
// void: áp dụng với function
// ----khi hàm không trả về kết quả gì
// ----khi hàm trả về kết quả thì khai báo kiểu dữ liệu trả về của hàm
function sayHello() {
    console.log("Hello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
// 5. unknow
// tương tự kiểu any nhưng chặt hơn
// khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
function test(a) {
    console.log(a.toUpperCase());
}
test("h");
function test1(a) {
    console.log(typeof (a));
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test1("text");
// 6. type never
// thường dùng trong các vòng lặp vô tận
// tức là các vòng lặp chạy không có điểm dừng để đo giá trị
function typeNever() {
    let a = 1;
    while (true) {
        console.log("giá trị", ++a);
    }
}
