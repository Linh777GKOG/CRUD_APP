/* 
  Kieu so (Number) trong JavaScript
  
  1. Tao gia tri Number
  - Cac cach tao
  - Dung cach nao? Tai sao?
  - Kiem tra data type

  2. Lam viec voi Number
  - To string
  - To Fixed
  */
var age = 18;
var PI = 3.14;

// var otherNumber = new Number(9);
// tranh cach dung new => Vì nó sẽ khởi tạo đối tượng(OBject)
// đem lại hệ quả không mong muốn
var result = 20 / "ne";
// NaN : Not a Number

console.log(isNaN(result));
