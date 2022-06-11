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
    some(): Kiểm tra 1 ông thôi thỏa mãn là được
    find()
    filter()
    map()
    reduce()

*/

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function (flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

var courses = [
  {
    id: 1,
    name: "JavaScript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
];

var numbers = [100, 200, 300, 500, 600];

var totalCoin = numbers.reduce(function (total, number) {
  return total + number;
}, 0);

console.log(totalCoin);

var newCourses = topics.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);
console.log(newCourses);

var html = newCourses.map(function (course) {
  return `<div>
    <h2>${course.title}</h2>
    <p>ID: ${course.id}</p>
    
    </div>`;
});
console.log(htmls);
