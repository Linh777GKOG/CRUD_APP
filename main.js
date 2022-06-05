/* 
  cac loai function

  1. Declaration function
  2. Expression function
  3. Arrow function
*/

showMessage();
function showMessage() {
  console.log("Declaration function");
}
// declaration function

var showMessage2 = function () {
  console.log("Expression function");
};
showMessage2();
// expresstion function
// dat ten cho expresstion chỉ cho dễ hiểu

setTimeout(function autoLogin() {
  // expresstion functionj
});

var myObject = {
  myFunction: function () {
    // expresstion function
  },
};
