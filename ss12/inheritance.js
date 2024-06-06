"use strict";
/*
    tính kế thừa
    là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có
    các thuộc tính và phương thức của lớp cha.
    giúp tái cấu trúc, sử dụng lại đoạn code ==>1
    1class con có thể kế thừa bao nhiêu class cha ==>nhiều
*/
// khai báo cha
class father {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    // khai báo cho class father có phương thức showInfo
    // ghi đè phương thức: override | overwrite
    showInfo() {
        console.log(`hi,${this.name}`);
    }
    setName(newName) {
        return this.name = newName;
    }
}
// khởi tạo class con kế thừa class cha, dùng từ khóa extends
class chirld extends father {
    constructor(name, id, age) {
        super(name, id);
        this.name = name;
        this.id = id;
        this.age = age;
    }
    // ghi đè phương thức: override | overwrite
    showInfo() {
        return `${this.name} năm nay ${this.age} tuổi`;
    }
}
// khởi tạo đối tượng con
let chirld1 = new chirld("Trang", 18, 18);
console.log(chirld1.showInfo());
chirld1.setName("Châu");
console.log(chirld1.name);
