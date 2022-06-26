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

// var users = [
//   {
//     id: 1,
//     name: 'Kien Dam',
//   },
//   {
//     id: 2,
//     name: 'Linh Vu',
//   },
//   {
//     id: 3,
//     name: 'Hung Dam',
//   },

//   // ...
// ];

// var comments = [
//   {
//     id: 1,
//     user_id: 1,
//     content: 'Anh Sơn chưa ra video :(',
//   },
//   {
//     id: 2,
//     user_id: 2,
//     content: 'Vừa ra xong em ơi!',
//   },
//   {
//     id: 3,
//     user_id: 1,
//     content: 'Cam on anh ^^',
//   },
// ];

// // 1. Lay comments
// // 2. Tu comments lay ra user_id
// // Tu user_id lay ra user tuong ung

// // Fake API

// // 1.Array
// // 2.Function, callback
// // 3.Promise
// // 4.DOM

// // 1. Front-end: Xay dung giao dien nguoi dung

// // 2. Back-end: Xay dung logic xu ly + Co so du lieu

// // API (URL)=> Application programming interface
// // Cong giao tiep giua cac phan mem

// // Backend (OK)=> API(URL) => Fetch => JSON/XML
// // => JSON.parse => JavaScript types
// // => Render ra giao dien voi HTML

// function name_of_function(var1, var2, var3,...) {
//   // Some code
// }

// function check_number(number) {
//   if (number % 2 == 0) {
//     alert(number + ' là số chẵn');
//   }
//   else {
//     alert(number + 'số lẻ')
//   }

// }

// check_number(1);
// check_number(2);
// check_number(3);
// check_number(4);
// check_number(5);

// function tinh_tong(a, b) {
//   // tra ve ket qua la a + b
//   return a + b;
// }

// var so1 = 1;
// var so2 = 2;

// // truyen so1 va so2 vao ham
// var ketqua = tinh_tong(so1, so2)

// alert(ketqua)

// // function tinh_tong(a, b) {
// //   document.write('Tong la ' + (a + b));
// // }

// var so1 = 1;
// var so2 = 2;

// // truyen so1 va so2 vao ham
// tinh_tong(so1, so2)

// function showMessage(message) {
//   // Nếu message ko dược truyền vào hoặc giá trị rỗng
//   // thì sẽ được thay thế bằng giá trị 'ko có tin nhắn'
//   message = message || 'Ko co tin nhan <br/>';
//   document.write(message);
// }

// // c1: ko truyen tham so
// showMessage();

// // c2: truyen tham so
// showMessage('CHao mung thang coder');
// var name_of_function = (var1, var2, var3, ...) => {
//   // Noi dung function
// }

// function name_of_function(var1, var2, var3, ...) {
//   // Noi dung function
// }

// // // function chia_het_cho_3(number) {
// // //   if (number % 3 == 0) {
// // //     return true;
// // //   }
// // //   return false;
// // // }

// // // var chia_het_cho_3 = (number) => {
// // //   if (number % 3 == 0) {
// // //     return true;
// // //   }
// // //   return false;
// // // };

// // // // // khai báo hàm
// // // // function kiem_tra_nam_nhuan(nam) {
// // // //   // nếu năm chia hết cho 100
// // // //   // thì kiểm tra nó có chia hết cho 400 hay không
// // // //   if (nam % 100 == 0) {
// // // //     // neu chia het cho 400 thi la nam nhuan
// // // //     if (num % 400 == 0) {
// // // //       alert(nam + ' la nam nhuan');
// // // //     } else {
// // // //       // nguoc lai khong phai nam nhuan
// // // //       alert(nam + ' Ko phai nam nhuan');
// // // //     }
// // // //   } else if (nam % 4 == 0) {
// // // //     // truong hop nay chia het cho 4 thi la nam nhuan
// // // //     alert(nam + ' la nam nhuan');
// // // //   } else {
// // // //     // cuoi cung truong hop khong phai nam nhuan
// // // //     alert(nam + 'ko phai la nam nhuan');
// // // //   }
// // // // }
// // // // // su dung
// // // // kiem_tra_nam_nhuan(4);

// // // // khai bao ham
// // // function kiem_tra_nam_nhuan(nam) {
// // //   // neu nam chia het cho 100
// // //   // thi kiem tra no co chia het cho 400 hay khong
// // //   if (nam % 100 == 0) {
// // //     // neu chia het cho 400 thi la nam nhuan
// // //     if (nam % 400 == 0) {
// // //       return true;
// // //     } else {
// // //       //  nguoc lai ko phai nam nhuan
// // //       return false;
// // //     }
// // //   } else if (nam % 4 == 0) {
// // // //     // truong hop chia het cho 4 thi la nam nhuan
// // // //     return true;
// // // //   } else {
// // // //     // cuoi cung truong hop khong phai nam nhuan
// // // //     return false;
// // // //   }
// // // // }

// // // // // su dung
// // // // var flag = kiem_tra_nam_nhuan(4);

// // // // if (flag) {
// // // //   alert(' la nam nhuan');
// // // // } else {
// // // //   alert('Ko phai la nam nhuan');
// // // // }

// // // function A() {
// // //   // code
// // // }

// // // // Ham B co mot tham so callback
// // // function B(callback) {
// // //   callback();
// // // }

// // // // Goi ham B va truyen tham so la ham A
// // // B(A);

// // // var person = {
// // //   firstName: 'Hoang',
// // //   lastName: 'Pham',
// // //   showname: function() {
// // //     console.log(this.firstName + ' ' + this.lastName);
// // //   }
// // // }
// // // Cach 1: Object literal
// // // khai bao toan bo cac truong va ham

// // var person = {
// //   firstName: 'Hoang',
// //   lastName: 'Pham',
// //   showName: function () {
// //     console.log(this.firstName + ' ' + this.lastName);
// //   },
// // };

// // // Cach 2: Object constructor
// // var psn = new Object();
// // psn.firstName = 'Hoang';
// // psn.lastName = 'Pham';
// // psn.showName = function () {
// //   console.log(this.firstName + '' + this.lastName);
// // };

// // function Person(firstName, lastName) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// //   this.showName = function () {
// //     console.log(this.firstName + ' ' + this.lastName);
// //   };
// // }

// // // Khi muon goi object person chi can goi constructor
// // var psn1 = new Person('Hoang', 'Pham');
// // var psn2 = new Person('Hoang', 'Nguyen');

// // // Co the dung Prototype (Da phan dung constructor pattern)

// // function Person() {}
// // Person.prototype.firstName = 'Hoang';
// // Person.prototype.lastName = 'Pham';
// // Person.prototype.showName = function () {
// //   console.log(this.firstName + ' ' + this.lastName);
// // };

// // // Object duoc tao se co san cac truong firstName, lastName
// // // va ham showName
// // var psn1 = new Person();
// // console.log(psn1.firstName); // Hoang
// // psn1.showName; // Hoang Pham

// // var person = {
// //   firstName: 'Hoang',
// //   lastName: 'Pham',
// //   50: 'Hi', // Property co ten la so, ko dung DotNotation duoc
// //   showName: function() {
// //     console.log(this.firstName + ' ' + this.lastName);
// //   }
// // }

// // console.log(person.firstName); // Hoang
// // console.log(person['firstName']); // Hoang

// // console.log(person.50); // Bi loi
// // console.log(person['50']); // Hi

// // console.log(person.showName()); // Hoang Pham
// // console.log(person['showName']()); // Hoang Pham

// // for(var prop in person) {
// //   console.log(prop); // firstName, lastName, showName
// // }

// // delete person.lastName; // Xoa truong lastName
// // person.lName = 'Just adding'; // Them truong lName

// // // console.log(person.lastName); // undefined
// // // console.log(person.lName); // Just kidding

// // var person = {
// //   firstName: 'Hoang',
// //   lastName: 'Pham',
// //   showName: function () {
// //     console.log(this.firstName + ' ' + this.lastName);
// //   },
// // };

// // // Serialize se lam mat method, chi giu cac property
// // JSON.stringify(person);// '{"firstName": "Hoang", "lastName": "Pham"}

// // var jsonString = '{firstName: "Hoang", lastName: "Pham"}';
// // var psn = JSON.parse(jsonString); // Chuyen string thanh object
// // console.log(psn.firstName); // Hoang
// // console.log(psn.lastName); // Pham
// // prototype nom na la khuon hoac la cha cua mot object

// // Hàm ajax chay bat dong bo, do do gia tri Image la undefined

// // Truyen callback vao ham ajax
// var callback = function (image) {
//   console.log(image);
// };

// ajax.get('gaixinh.info', callback);

// // Co the viet gon nhu sau
// ajax.get('gaixinh.info', function (image) {
//   console.log(image);
// });

// var xe = xin_me_mua_xe(); // Cho ca nam moi co xe
// var gai = cho_gai_di_choi(xe); // Lay xe cho gai di choi
// var abcd = cho_gai_vao_hotel(y); // Di choi xong cho gai di dau do

// // Ma phai su dung dong callback "gom ghiec", tao thanh callback hell
// xin_me_mua_xe(function (xe) {
//   cho_gai_di_choi(xe, function (gai) {
//     cho_gai_vao_hotel(hotel, function (z) {
//       // Lam gi do, ai biet
//     });
//   });
// });

// Ham nay tra ra mot loi hua chu khong phai chiec BMW
function hua_cho_co() {
  return Promise((thuc_hien_loi_hua, that_hua) => {
    // Sau 1 thoi gian dai dai daiiiiiii
    // Neu vui bo me se thuc hien loi hua
    if (vui) {
      thuc_hien_loi_hua('Xe BMW');
      // Luc nay trang thai cua loi hua la fulfilled
    } else {
      that_hua('Xe dap');
      // Luc nay trang thai cua loi hua la rejected
    }
  });
}

// Loi hua bay gio dang la pendding
// Neu duoc thuc hien, ban co   "Xe BMW"
// Neu bi reject, ban co "Xe dap"
var promise = huu_cho_co();

promise
  .then((xe_bmw) => {
    console.log('Duoc chiec BMW vui qua ');
  })
  .catch((xe_dap) => {
    console.log('Duoc chiec xe dap...');
  });
