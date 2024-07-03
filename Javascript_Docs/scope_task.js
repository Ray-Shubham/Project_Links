// 1. What is the output of below code

var x = 10;
function foo() {
  console.log(x);
}
foo();

//Output: 10

// 2. What is the output of below code

var x = 10;
function foo() {
  var x = 20;
  console.log(x);
}
foo();

//Output: 20

// 3. What is the output of below code

var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();

//Output: Undefined

// 4. What is the output of below code

var x = 10;
function foo() {
  console.log(x);
}
var x = 20;
foo();

//Output: 20

// 5. What is the output of below code

function foo() {
  console.log(x);
}
var x = 10;
foo();

//Output: 10

// 6. What is the output of below code

function foo() {
  console.log(x);
}
foo();
var x = 10;

//Output: Undefined
