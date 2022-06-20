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

// link lấy tất cả thẻ a ra

document.querySelector('div').onclick = function () {
  console.log('DIV');
};

document.querySelector('button').onclick = function (e) {
  e.stopPropagation();
  console.log('Click me! ');
};
