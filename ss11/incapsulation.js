"use strict";
/*
    cách khởi tạo class
*/
class std {
    constructor(name) {
        this.name = name;
    }
    // phương thức đi lấy tên 
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
//instance nghĩa là đi tạo đối tượng từ class
let std1 = new std("Trang");
/*
    access modifier
    phạm vi:
    -public
    bên ngoài có thể truy cập được
    -private
    chỉ được truy cập ở bên trog class
    -protected
    truy cập được bên trong class và subclass
*/
