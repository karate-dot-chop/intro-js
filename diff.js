// // Equality check
// var x = 10;
// if (x === "10") {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

// // Falsey values
// var x = 3;
// if (null) {
//   x = x + 1;
// }
// if (false) {
//   x = x + 1;
// }
// if (0) {
//   x = x + 1;
// }
// if ("") {
//   x = x + 1;
// }
// // undefined && NaN
// console.log(x);

// // Functions
// function printLyrics() {
//   console.log("Now this is a story all about how");
//   console.log("My life got flipped turned upside down");
//   console.log("And I'd like to take a minute, just sit right there");
//   console.log("I'll tell you how I became the prince of a town called Bel-Air");
// }

// printLyrics();

// // Scope
// var x = 100;
// function addOne(num) {
//   x = 1;
//   return num + x;
// }
// console.log(x); // 100
// console.log(addOne(5)); // 6
// console.log(x); // 1

// JavaScript objects vs. Ruby classes
// function Boat(name, color, price) {
//   this.name = name;
//   this.color = color;
//   this.price = price;
//   this.printInfo = function() {
//     return "The boat " + this.name + " has a price of " + this.price;
//   };
// }

// var boat = new Boat("S. S. Minnow", "white", 20000);
// console.log(boat);
// console.log(boat.name);
// boat.color = "red";
// console.log(boat.color);
// console.log(boat.printInfo());

// Or just build the object directly
var boat = {
  name: "S. S. Minnow",
  color: "white",
  price: 20000,
  printInfo: function() {
    return "The boat " + this.name + " has a price of " + this.price;
  }
};

console.log(boat);
console.log(boat.name);
boat.color = "red";
console.log(boat.color);
console.log(boat.printInfo());
