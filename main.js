// Tham so ham - Javascript co ban

/* 
1. Tham so?
- Dinh nghia: Một giá trị có thể truyền vào khi gọi 1 function
- Kieu du lieu: Ko Gioi han
- Tinh private: chỉ chạy trong hàm
- 1 tham so: 
- Nhieu tham so
2. Truyen tham so
- 1 tham so
- nhieu tham so

3. Arguments
- Doi tuong arguments
- Gioi thieu vong for of
*/

// function writeLog(message, message2) {
// Dinh nghia, xuat hien, su dung trong ham goi la tham so
// }

// writeLog("Log1 ", "Log2");

// Goi toi function, truyen gia tri vao => Đối số
// console.log(1, 2, 3, 4, 5, 6);

function writeLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
    // Lấy element đầu tiên của array arguments gán vào param, rồi chạy code,
    // chạy đến dấu } rồi vòng lại, có 3 phần tử chạy 3 lần
  }
  console.log(myString);
}

writeLog("Test1", "Test2", "log3");

// console.log(1, 2, 3, 4);
