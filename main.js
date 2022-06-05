/* 
Một số điều cần biết về function

1. Khi function đặt trùng tên: function sau ghi de function truoc
2. Khai báo biến trong hàm?: Phạm vi trong function 
3. Định nghĩa hàm trong hàm?: Có
*/

function showMessage() {
  function showMessage2() {
    console.log("Message 2");
  }
}
showMessage();
// defined là định nghĩa
showMessage2();
