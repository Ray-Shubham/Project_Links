//1. Create a function greet that takes a name and a callback function. The greet function should call the callback function, passing the name to it. Define a callback function that simply logs "Hello, [name]" to the console.

function greet(name, callback) {
  callback(name);
}
function logGreeting(name) {
  console.log(`Hello, ${name}!`);
}
greet("John", logGreeting);

//Output: Hello, John!

//2.  Write a function that takes an array of numbers and uses the map function to create a new array where each number is doubled.

function double(arr) {
  return arr.map((num) => num * 2);
}
let x = [1, 2, 3, 4, 5];
let result = double(x);
console.log(result);

//Output: [ 2, 4, 6, 8, 10 ]

//3. Create a function applyToEach that takes an array and a callback function. The applyToEach function should use the map function to apply the callback to each element of the array and return the new array.

function applyToEach(arr, callback) {
  return arr.map(callback);
}
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = applyToEach(numbers, (num) => num * 2);
console.log(doubledNumbers);

// Output: [2, 4, 6, 8, 10]

let squaredNumbers = applyToEach(numbers, (num) => num ** 2);
console.log(squaredNumbers);

// Output: [1, 4, 9, 16, 25]

let stringNumbers = applyToEach(numbers, (num) => num.toString());
console.log(stringNumbers);

// Output: ["1", "2", "3", "4", "5"]

//4. Write a function that takes an array of strings and uses the map function to create a new array where each string is converted to uppercase.

function upperCase(arr) {
  return arr.map((str) => str.toUpperCase());
}
let z = ["hello", "world", "javascript"];
let upper = upperCase(z);
console.log(upper);

// Output: ["HELLO", "WORLD", "JAVASCRIPT"]
