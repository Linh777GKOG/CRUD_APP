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

// String type
var fullName = "Linh 'Vu";

// Boolean type
var isSuccess = true;

// Undefined type
var age;
console.log(age);

// null
var isNull = null; //nothing
console.log(isNull);
// Symbol
var id = Symbol("id"); // unique
var id2 = Symbol("id"); // unique

console.log(id === id2);

// Function
var myFunction = function () {
  alert("Hi, xin chao!");
};
// function tu dinh nghia

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

console.log("myObject", myObject);
