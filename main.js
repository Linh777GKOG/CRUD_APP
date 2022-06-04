// Hiểu hơn về câu lệnh điều kiện
// và phép so sánh
// 0 , '', null, undefined, NaN, false => convert sang boolean
// se hieu la false, con lai la true
//
var a = 1;
var b = 2;

// su dung toan tu & dong ve trai qua ve phai,
// gap gia tri khac 6 gia tri tren => doc sang ve phai
// lay gia tri ve phai gan nguoc lai result
var result = "A" || "B" || "C" || "D";
// Or thấy khác 6 value => lấy luôn

console.log("result", result);
// if nhan gia trij la true
// if (result) {
//   console.log("Dieu kien dung");
// } else {
//   console.log("Dieu kien sai");
// }
