/**
 * Kieu du lieu trong JavaScript
 */

/*
1. Du lieu nguyen thuy - Primitive Data
- number
- string
- boolean
- underfined
- null
- symbol

2. Du lieu phuc tap - Complex Data
- function
- object
*/

// NUmber type
var a = 1;

var b = 2;
var c = 1.5;
// console.log(typeof a);

// String type
var fullName = "Linh 'Vu";

// Boolean type
var isSuccess = true;

// Undefined type
var age;
// console.log(age);

// null
var isNull = null; //nothing
console.log(typeof isNull);
// typeof null = object??? wtf???//
// Symbol
var id = Symbol("id"); // unique
var id2 = Symbol("id"); // unique

// Function
var myFunction = function () {
  //   alert("Hi, xin chao!");
};
// function tu dinh nghia
console.log(typeof myFunction);

myFunction();

// Object types
var myObject = {
  name: "Linh vu",
  age: 18,
  address: "Ha Noi",
  myFunction: function () {},
  //name la key, linh vu la value, cach nhau bang dau :
  // giua mot cap key: value cach nhau bang 1 dau ,
};
// array cx thuoc object types
var myArray = ["JavaScript", "PHP", "Ruby"];
// array ko can dinh nghia key, trong array key được đánh
// tự động bằng số tự tăng, bắt đầu là 0
// console.log(myArray);

// console.log("myObject", myObject);
