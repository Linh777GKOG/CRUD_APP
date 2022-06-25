// // OOP (Object Oriented Program) (Lập trình hướng đối tượng)
// - OOP là 1 phương pháp lập trình dưa trên khái niệm về lớp (Class) và đối tượng (Object)
// - Dùng để tối ưu việc quản lý source code, giúp tăng khả năng tái sử dụng code,
// giúp tóm gọn lại những tính chất mà nhiều đối tượng có thể sử dụng chung
// 1. Object
// - Đối tượng bao gồm 2 thành phần chính
// + thuộc tính (Attribute): là những thông tin đặc điểm của đối tượng
// + phương thức (Method): là những hành vi mà đối tượng có thể thực hiện
// VD: Đối tượng là smartphone
// thuộc tính: màu sắc, bộ nhớ, hệ điều hành...
// phương thức: gọi điện, chụp ảnh, nhắn tin, ghi âm...

// 2. Class
// - Khi những đối tượng có những đặc tính tương tự nhau sẽ tập hợp thành 1 class,
// class này sẽ chứa những thuộc tính và phương thức chung của những đối tượng đó
// - 1 đối tượng sẽ được xem là 1 thực thể của class
// VD: ở trên ta có class chung là smartphone, chứa những thuộc tính và phương thức dùng chung,
// suy ra đối tượng của lớp sẽ là: iphone, samsung, oppo, xiaomi....

// 3. Ưu điểm OOP
// - OOP giúp mô hình hóa những thứ phức tạp sang dạng cấu trúc đơn giản
// - Code OOP có thể tái sử dụng lại, giúp tiết kiệm tài nguyên
// - Giúp sửa lỗi dễ dàng hơn, thay vì sửa lỗi ở nhiều đối tượng, ta chỉ cần sửa lỗi ở class chung của những đối tượng đó.
// - Có tính bảo mật cao nhờ vào tính chất đóng gói của nó.
// - Dễ mở rộng dự án

// // 4 đặc tính cơ bản của OOP
// 1. Tính đóng gói (Encapsulation)
// - Giúp che dấu những thuộc tính, những phương thức bên trong của đối tượng. Các đối tượng khác
// không thể tác động trực tiếp tới dữ liệu bên trong, hay làm thay đổi trang thái của đối tượng.
// - Tính chất này giúp tăng tính bảo mật cho đối tượng, tránh tình trạng dữ liệu bị hư hỏng ngoài ý muốn.

// 2. Tính kế thừa (Inheritance)
// - Cho phép xây dựng một lớp con, kế thừa và tái sử dụng các thuộc tính, phương thức dựa trên lớp cha
// - Các lớp con sẽ kế thừa toàn bộ thành phần của lớp cha mà không cần phải định nghĩa lại
// - Lớp con có thể mở rộng những thành phần kế thừa hoặc bổ sung những thành phần mới
// VD:
// Lớp cha là smartphone, có các thuộc tính như màu sắc, bộ nhớ, hệ điều hành...
// Lớp con sẽ kế thừa và cũng có những thuộc tính như vậy

// 3. Tính đa hình (Polymorphism)
// - Cho phép các đối tượng khác nhau thực thi chức năng giống nhau theo những cách khác nhau
// VD: lớp con là iphone hay xiaomi kế thừa những thành phần của lớp cha là smartphone,
// nhưng iphone lại chạy trên hệ điều hành ios, còn xiaomi lại chạy trên hdh android
// VD: chó và mèo đều nghe mệnh lệnh kêu từ chủ, chó thì trả lời là gâu gâu còn mèo thì lại trả lời là meo meo

// 4. Tính trừu tượng (Abstraction)
// - Giúp loại bỏ những thứ phức tạp, không cần thiết của đối tượng và chỉ tập trung vào những gì cốt lõi, quan trọng
// VD: khi quan lý sinh viên ta chỉ cần quan tâm họ tên, tuổi tác, email..., chứ không cần biết chi tiết về chiều cao, cân nặng,
// màu da, sở thích...

/* Object prototype - Basic
// Nguyên liệu để tạo nên ngôi nhà
 
1. Prototype là gì: nguyên mẫu, khuôn => Nguyên mẫu để tạo nên 1 object(Đối tương)
2. Sử dụng khi nào?
*/

/* Math object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/

// Câu lệnh rẽ nhánh - If else

// if (> , < , !== , ==) {
// dung if else
// }
// cho truoc gia tri dug switch case
// it hon 3 dung if else

// Toán tử 3 ngôi - Ternary operator

// if (course.coin > 0) {
//   console.log(`${course.coin} coins`);
// } else {
//   console.log("Mien Phi");
// }

// chi dung trong truong hop don gian

/*
Vòng lặp - Loop

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp qua khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/

// For/in loop

// For/of loop ko ap dung object

// Break & Continue in loop

// Vòng lặp lồng nhau - Nested loop

// Loop ...

// var array = ["a", "b", "c", "a", "b", "c"];

// console.log([...new Set(array)]);

// 1. Xac dinh diem dung
// 2. Logic handle =>  Tạo ra điểm dừng

// 3 * 2 * 1 =
// 6 * 5*   ... *1 =

/* 
Array methods: 
    forEach(): duyệt qua từng phần tử của mảng
    every(): Kiểm tra tất cả các phần tử của một mảng phải thỏa mãn 1 điều kiện gì đó
    // hoat dong gan giống vóng lặp, lặp qua từng phần tử của mảng,
    // mỗi lần lặp lại sẽ gọi ngược lại cái hàm đã truyền vào, 
    // có tham số đầu tiên là phần tử của mảng,
    some(): Kiểm tra 1 ông thôi thỏa mãn là được
    // ngược lại với every,
    // Duyệt qua từng phần tử, chỉ một ông đúng là dừng
    find()
    // Tìm kiếm, Lặp qua từng phần tử của mảng, được gọi lại,
    // trả về từng phần tử, kiểm tra phần tử nào return true,
    // lấy phần tử đó, gán ngược vào, return phần tử đó, vòng kt kết thúc, 
    // ko có sẽ trả về undefined, chi tra ve 1 phần tử 
    filter(): trả về tất cả phần tử thỏa mãn, tìm kiếm qua 1 ds
    map(): sử dụng khi muốn chỉnh sửa, thay đổi element của 1 array,
// duyệt qua từng phần tử của mảng, duyệt qua tới phần tử nào thì nó 
// sẽ call lại function mà chúng ta đã truyền qua đối số của method map()
// Trong thực tế render view trên layout
    reduce(): khi muốn nhận về 1 giá trị duy nhất sau khi tính toán xử lỉ phần
// tử trong array, 

*/

// Callback?

// Là hàm (function) được truyền qua đối số
// khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số

// 1. Dễ hiểu
// 2. Ngắn gọn
// 3. Hiệu năng

// var courses = [
//   {
//     id: 1,
//     name: "JavaScript",
//     coin: 250,
//   },
//   {
//     id: 2,
//     name: "HTML, CSS",
//     coin: 250,
//   },
//   {
//     id: 3,
//     name: "Ruby",
//     coin: 250,
//   },
//   {
//     id: 4,
//     name: "PHP",
//     coin: 250,
//   },
//   {
//     id: 5,
//     name: "ReactJS",
//     coin: 0,
//   },
//   {
//     id: 6,
//     name: "Ruby",
//     coin: 250,
//   },
// ];

// Flat - "Làm phẳng" mảng từ Depth array -  "Mang sau"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
//   return flatOutput.concat(depthItem);
// }, []);
// console.log(flatArray);

// Lay ra cac khoa hoc dua vao 1 mang moi
// var topics = [
//   {
//     topic: "Front-end",
//     courses: [
//       {
//         id: 1,
//         title: "HTML, CSS",
//       },
//       {
//         id: 2,
//         title: "JavaScript",
//       },
//     ],
//   },
//   {
//     topic: "Back-end",
//     courses: [
//       {
//         id: 1,
//         title: "PHP",
//       },
//       {
//         id: 2,
//         title: "NodeJS",
//       },
//     ],
//   },
// ];

// var newCourses = topics.reduce(function (course, topic) {
//   return courses.concat(topic.courses);
// }, []);
// // console.log(newCourses);

// var htmls = newCourses.map(function (course) {
//   return `
//  <div>

//  <h2>${course.title}</h2>
//  <p>ID: ${course.id}</p>

//  </div>
//   `;
// });

// console.log(htmls.join(""));

// function calculateRating(watchList) {
//   const newArray = watchList.filter(
//     (array) => array["Director"] === "Christopher  Nolan"
//   );
//   const scoreIMDB = newArray.reduce((total, item, index) => {
//     total += Number(item.imdbRating);
//     if (index === newArray.length - 1) {
//       return total / newArray.length;
//     }
//     return total;
//   }, 0);
//   return scoreIMDB;
// }

// 1. Dễ hiểu: vòng lặp > array methods
// 2. Ngắn gọn: vòng lặp < array methods
// 3. Hiệu năng: vòng lặp > array methods: Ko đáng kể
// thực tế trong đa phần đều dùng array methods vì cung cấp syntax rõ ràn250
// Biến lưu trữ

// Thực hiện việc lưu trữ

// var totalCoin = courses.reduce((a, b) => a + b.coin, 0); //initial Va250e
// console.log(totalCoin);

// Tất cả method đều dùng vòng lặp để làm được,
// Sử dụng Array method vì nó cung cấp cách viết đơn giản hơ250
// courses.forEach(function (course, index) {
//   console.log(index, course);
// });

// console.(
//   courses.every(function (course, index) {
//     return course.coin === 0;
//   })
// )250
// var isFree = courses.every(function (course, index) {
//   console.log(index);
//   return course.coin === 0;
// });

// console.log(isFree);

// var isFree = courses.some(function (course, index) {
//   return course.coin === 0;
// });
// console.log(isFree);

// var course = courses.find(function (course, index) {
//   return course.name === "Ruby";
// });

// console.log(course);

// var listCourse = courses.filter(function (course, index) {
//   return course.name === "Ruby";
// });

// console.log(listCourse);

// var courseHandler = function() {

// };
// function courseHandler(course, index) {
//function truyền vào method map() trả về cái gì, thì nó
// lấy cái đó làm element, lần 1 duyệt qua element 1, trả về course
// function 1 return cái gì thì newCourses sẽ nhận được cái đ  return course.name;
// return `<h2>${course.name}</h2>`;
// }
// có thể truyền vào expresstion function hoặc declarations function

// var newCourses = courses.map(courseHandler);
// trả về 1 array bên newCourses
// console.log(newCourses.join(""));
// function có thể viết trực tiếp bên trong, hoặc viết bên ngoài
// method map() la 1 function, và là phương thức của một đối tượng, courses array cx là Object nên ta sử dụng '.' để gọi phương thức map()
// method map() sẽ return mảng mới bến newCourses, sẽ có số lượng phần tử bẳng đúng số lượng phần tử có giá trị của mảng cũ
// khi sử dụng method map() sẽ có đối số truyền vào,
// đối số phải là một function, ko truyền sẽ bị lỗi undefined,
// bên trong method map() thực hiện một vòng lặp, lặp qua từng phần tử,
// mỗi khi lặp qua 1 phần tử, nó sẽ call lại 1 function để nó thực thi,
// tạo ra sự thay đổi, function phải được truyền qua map(), ko truyền,
// nó sẽ hiểu là undefined => undefined is not a function,
// trong hàm(function ) map() khi ko có đối số => undefined(),
// gọi cái hư vô nên hiểu là undefined,
// cần truyền 1 function vào trong method map() => Ko Bug
// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce2((total, number, index, array) => {
//   console.log(total, number, index, array);
//   return total + number;
// }, 10);
// console.log(result);

// includes method

// function myFunction(paran) {
//   if (typeof paran === 'function') {
//     paran('Hoc lap trinh');
//   }
// }

// function myCallback(value) {
//   console.log('Value: ', value);
// }
// myFunction(myCallback);

// Callback - phan 2
// 1. La ham
// 2. Truyen qua doi so
// 3. Duoc goi lai (trong ham nhan doi so)
// Array.prototype.map2 = function (callback) {
//   var output = [],
//     arrayLength = this.length;
//   for (var i = 0; i < this.length; i++) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// var courses = ['JavaScript', 'PHP', 'Ruby'];

// var htmls = courses.map2(function (course) {
//   return `<h2>
//   ${course}</h2>`;
// });
// console.log(htmls.join(''));

// var htmls = courses.map2(function (course) {
//   return `<h2>
//   ${course}</h2>`;
// });

// console.log(htmls.join(''));
// 1. Object prototype
// 2. For in
// 3. hasOwnProperty

// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

// 6. HTML collection: img, form, a

// 7. document.write
// DOM attribute

// innerHTML, outerHTML

// Class property
// add
// contains
// remove
// toggle

// DOM events
// 1. Attribute events
// 2. Assign event using the element node

// DOM events
// 1. Input / select
// 2. Key up / down

// 1. preventDefault: loại bỏ hành vi mặc định của trình duyệt trên
// một thẻ html
// 2. stopPropagation: loại bỏ sự kiện nổi bọt

// 1. DOM event / Event Listener
//            (1. Xử lí nhiều việc khi 1 event xảy ra
//             2. Lắng nghe / Hủy bỏ lắng nghe)
// 2. JSON: 1. là 1 định dạng dữ liệu (chuỗi)
//          2. JavaScript Object Notation
//          3. JSON: number, Boolean, Null, Array, Obejct
//     Mã hóa => Encode / Giải mã => decode
//     Stringify: Từ JS types => JSON
//     Parse: Từ JSON => JavaScỉpt types
// 3. Promise:
/*    - Sync: Đồng bô => OK 
      - Async: Bất đồng bộ => OK
      - Nỗi đau: => OK
      - Lý thuyết, cách hoạt động: Sinh ra để xử lí bất đồng bộ,
      trước khi có promise ta thường sử dụng callback => Thường sẽ
      sinh ra callback hell, promise được sinh ra trong phiên bản es6,
      có thể giúp khác phục tình trạng callback hell giúp code dễ đọc, dễ 
    hiểu
      - Thực hành, ví dụ
 */
// 4. Fetch
// 5. DOM location
// 6. storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Performance

// Sync / Async
// setTimeout, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame

// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.al
// Thư viện: output luôn luôn là một promise

var users = [
  {
    id: 1,
    name: 'Kien Dam',
  },
  {
    id: 2,
    name: 'Linh Vu',
  },
  {
    id: 3,
    name: 'Hung Dam',
  },

  // ...
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: 'Anh Sơn chưa ra video :(',
  },
  {
    id: 2,
    user_id: 2,
    content: 'Vừa ra xong em ơi!',
  },
  {
    id: 3,
    user_id: 1,
    content: 'Cam on anh ^^',
  },
];

// 1. Lay comments
// 2. Tu comments lay ra user_id
// Tu user_id lay ra user tuong ung

// Fake API

// 1.Array
// 2.Function, callback
// 3.Promise
// 4.DOM

// 1. Front-end: Xay dung giao dien nguoi dung

// 2. Back-end: Xay dung logic xu ly + Co so du lieu

// API (URL)=> Application programming interface
// Cong giao tiep giua cac phan mem

// Backend (OK)=> API(URL) => Fetch => JSON/XML
// => JSON.parse => JavaScript types
// => Render ra giao dien voi HTML

var postAPI = 'https://jsonplaceholder.typicode.com/posts';

let promise = new Promise(function (resolve, reject) {});

const dog = {};

const cat = new Object();

const horse = Object.create({});

get = object.property;
object.property = set;

let hello;
let world;

// Old way
const obj = {
  hello: hello,
  world: world,
};

// Modern way
const obj = {
  hello,
  world,
};

const x = 'khoa';

const obj = {
  [x]: 07,
};

obj.khoa;

delete obj.hello;
delete obj.world;

// Hàm khởi tạo đối tượng
function person(name, age) {
  this.name = name;
  this.age = age;
  this.changeName = function (name) {
    this.name = name;
  };
}

// Tạo đối tượng
var p = new person('Khoa', 19);

p.changeName('Van');

function person(name, age) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = bornYear; // Gán phương thức bên ngoài
}

// Hàm bên ngoài hàm tạo, hàm này được gán vào đối tượng qua hàm tạo ở trên
function bornYear() {
  return 2020 - this.age;
}

var p = new person('Khoa', 19);
document.write(p.yeraOfBirth());

var obj = {
  age: 0,
  set ageInfo(age) {
    console.log('setter - ' + age);
    this.age = age;
  },

  get ageInfo() {
    console.log('getter');
    return 'Thong tin tuoi: ' + this.age;
  },
};

obj.ageInfo = 25;
alert(obj.ageInfo);

// Một đối tượng đã có tên ob, thêm cho nó setter, getter có tên namepro
Object.defineProperty(ob, 'name', {
  set: function (x) {
    // code setter ở đây
  },
  get: function () {
    // CODE getter ở đây
  },
});

function person(age) {
  this.age = 0;
  Object.defineProperty(this, 'ageInfo', {
    set: function (age) {
      console.log('setter - ' + age);
      this.age = age;
    },
    get: function () {
      console.log('getter');
      return 'Thông tin tuổi: ' + this.age;
    },
  });
}

var obj = new Person(0);
obj.ageInfo = 25;
alert(obj.ageInfo);

const obj = {
  userName: 'Khoa',
  hello() {
    console.log(`My name is ${this.userName}`);
  },
};

obj.hello();

var fruit = { name: 'apple ' };
var fruitbear = { name: 'apple' };

fruit == fruitbear; // return false
fruit === fruitbear; // return false

// Two variables, a single object
var fruit = { name: 'apple' };
var fruitbear = fruit; // assign fruit object reference to fruitbear

// here fruit and fruitbear are pointing to same object

fruit == fruitbear; //return true
fruit === fruitbear; // return true

fruit.name = 'grape';
console.log(fruitbear); // yield {name: "grape"} instead of {name: "apple"}

// constructor function là một phương thức đặc biệt dùng để tạo 1 object vả được tạo ở trong class

class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"

class Square extends Polygon {
  constructor(length) {
    //
  }
}

function sayHello() {
  console.log('Hello World');
}

const sayHello = function () {
  console.log('Hello World');
};

const hello = function sayHello() {
  console.log('Hello world');
};

function doSomething() {
  // Do something
}

function getWebsite() {
  console.log('https://codelearn.io/');
}

  function funName(param_1, ..., param_n) {
    //code
  }


function getSum(a,b) {
  console.log("Tong: " + (a+ b))
}

function funName(param_1 = value_1, ..., param_n = value_n) {
  //code 
}

function getSum(a = 5, b = 10) {
  console.log("Tong: " + (a+ b))
}

function getSum(a, b ) {
  return a + b;
}
function sayHello () {
  console.log("Hello World")


}

sayHello();

console.log(getAreaOfSquare(5));

// ...
function getAreaOfSquare(n) {
  return n*n; 
}

// function hoisting chỉ hoạt động với cách khai báo hàm thông thường
// (function declaration) - function hoisting không hoạt động với các 
// được khai báo bằng biểu thức hàm (function expression)

console.log(getAreaOfSquare); // ReferenceError: getAreaOfSquare is not defined
console.log(getAreaOfSquare(5)); // ReferenceError: getAreaOfSquare is not defined
getAreaOfSquare = function (n) {
  return n * n;

}

function factorial(n) {
  if ((n == 0) || (n == 1)) 
  return 1;
  else 
  return (n * factorial(n-1));
}

var a, b, c;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6 

// Các biến sau được định nghĩa trong phạm vi global scope
var num1 = 20,
    num2 = 3,
    name = "Khoa";
    
// Hàm này được định nghĩa trong phạm vi global scope
function multiply() {
  function num1 * num2;

}

multiply(); // Returns 60

// Một ví dụ hàm lồng nhau
function getScore () {
  var num = 50,
  num2 = 50,

  function add() {
    return name + " scored " + (num1 + num2);
  }

  return add();
}

function multiply(a,b) {
  b = typeof b !== 'undefined' ? b : 1;

  return a * b;
}

multiply(5); // 5

function multiply(a, b = 1 ) {
  return a * b;
}

multiply(5);

function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x);
}

var arr = multiply(2,1,2,3);
  console.log(arr); // [2, 4, 6]

// (param1, param2, paramN) => expression

// ES5
var multiply = function(x, y) {
  return x * y;
}

// ES6
var multiply = (x, y) => {
  return x * y;
}
// => var multiply = (x, y) => x * y;

// ES6
var phraseSplitterEs5 = function phraseSplitter(phrase) {
  return phrase.split(' ');

}

// ES6
var phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("Love Codelearn")); // ["Love", "Codelearn"]

// ES5 
var hello = function sayHello() {
  console.log("Hello World");

}

// ES6
var hello = () => {
  console.log("Hello World");
}

hello();

function numberGenerator() {
  // Local "free" variable that ends within the closure
  var num = 1 ;
  function checkNumber() {
    console.log(num);
  }
  num++;

  return checkNumber;
}

var number = numberGenerator();
number(); //2

function sayHello() {
  var say = function() {
    console.log(hello);
  }
  // Local variable that ends up within the closure
  var hello = 'Hello, world';

  return say;

}

var sayHelloClosure = sayHello();
sayHelloClosure(); // 'Hello, world'

function sayHello(name, callback) {
  var myName = name.toUpperCase() + ", Hello";
  return callback(myName);
}

var result = sayHello("Khoa", function (arg) {
  return arg;
})

alert(result)

var keywords = ["Khoa", "codelearn", "Học lập trình", "codelearn.io"];

// Lặp qua từng phần tử và xử lí trong hàm callback
keywords.forEach(function (eachName, index) {
  console.log(index + 1 + ". " eachName);
})

function doSomething() {
  alert('vao');

}

function something(doCallback) {
  doCallback();
}

something(doSomething);

function showPopup(callback) {
  if (typeof callback !== 'function') {
    alert('Bạn phải truyền vào là một function');
    return false;
  }
  // do something
}

var personInfo = {
  name: 'Khoa',
  setName: function (name) {
    this.name = name;
  }
  

}

if (!('fetch' in window)) {
  console.log('Fetch API not found, try including the polyfill');
  return ;
}

// We can safely use fetch from now on

fetch('example/example.json')
.then(function(response) {
  // Do stuff with the response
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
})

