// function getHelloMessage(name) {
// // do the magic
//   return "Hello"+ name + "how is it going?";

// }
// function sum(num1, num2) {
//   return num1 + num2;
// }
// function divide(num1, num2) {
//   if (num1 || num2) == 0){
//     alert("cant divide by zero");
//     return 0;
//   } else {
//     return num1 / num2;
//   }

// function runTests() {
//   console.log("starting tests");
//   let message = getHelloMessage("Kirby");
//   console.log(message);
//   let result = sum(12, 49);
//   console.log("the result is: " + result);
// }
// // this is an object constructor
// function Dog(name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.color = color;
// }
// // classes
// class Car {
//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.owner = "Student";
//     }
// }

// function testAjaxGet() {
//   $.ajax({
//     url: "https://restclass.azurewebsites.net/api/test",
//     type: "GET",
//     success: function (response) {
//       console.log("server says: ", response);
//     },
//     error: function (errorDetails) {
//       console.log("server says ", errorDetails);
//     },
//   });
// }

// //
// function testClass() {
//     let c1 = new Car("Form","A", "1934");
//     console.log(c1);
// }

// function createObjects() {
//   //object literal
//   let data = {
//     name: "Test1",
//     speed: 111,
//     color: "Red"
//   };
//   console.log(data);

//   // object constructor
//   let fido = new Dog("fido", 2, "white");
//   console.log(fido);
//   let lola = new Dog("lola", 4, "pink");
//   console.log(lola);
// }
// // homework 1
// // dont allow user to divide by zero

// let divRes = divide(9, 3);
// let divRes2 = divide(1, 8);
// let divRes3 = divide(10, 0);


function testArrays() {
  let nums = [1, 123, 543, 3, 3456, 5678, 234, 4567, 789, 234];
  let total = 0;
  for (let i = 0; i < nums.length; i++){
    total += nums[i];
  }
  console.log("total is : " + total);

}