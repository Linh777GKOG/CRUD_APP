// Object trong JavaScript
var emailKey = "email";

var myInfo = {
  name: "Linh Vu",
  // 'name': thừa
  age: 18,
  address: "Ha Noi, VN",
  // đặt tên full-name: vi phạm => "full-name" ko lỗi nữa
  [emailKey]: "linhvu777gkog@gmail.com",
  getName: function () {
    return this.name;
  },
};
delete myInfo.age;
delete myInfo.address;

console.log(myInfo.getName());

// myInfo.email = "linhvu777gkog@gmail.com";
// myInfo["my-email"] = "linhvu777gkog@gmail.com";

// console.log(myInfo.age); c1
// console.log(myInfo["email"]);
// một key ko có sẽ trả về undefined
// console.log(myInfo["address"]); C2
