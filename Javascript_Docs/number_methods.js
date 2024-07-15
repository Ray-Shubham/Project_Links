//1)  Check how isNaN works in different scenarios

console.log(isNaN(NaN))

// NaN is a special value in JavaScript that represents an invalid or unreliable result.
// isNaN(NaN) returns true because NaN is, by definition, not a number.
// Output: true

console.log(isNaN(123))

// 123 is a number.
// isNaN(123) returns false because 123 is a valid number.
// Output: false

console.log(isNaN("hello"))

// "hello" is a string.
// isNaN("hello") returns true because "hello" cannot be converted to a number.
// Output: true

console.log(isNaN(""))

// "" is an empty string.
// isNaN("") returns false because an empty string is considered a valid number (i.e., 0).
// Output: false

console.log(isNaN(null))

// null is a null value.
// isNaN(null) returns false because null is considered a valid number (i.e., 0).
// Output: false

console.log(isNaN(undefined))

// undefined is an undefined value.
// isNaN(undefined) returns true because undefined cannot be converted to a number.
// Output: true

console.log(isNaN(true))

// true is a boolean value.
// isNaN(true) returns false because true can be converted to a number (i.e., 1).
// Output: false

console.log(isNaN({}))

// {} is an object.
// isNaN({}) returns true because an object cannot be converted to a number.
// Output: true

console.log(isNaN([]))

// [] is an array.
// isNaN([]) returns false because an array can be converted to a number (i.e., 0).
// Output: false

console.log(isNaN(Infinity))

// Infinity is a special value representing positive infinity.
// isNaN(Infinity) returns false because Infinity is a valid number.
// Output: false

console.log(isNaN(-Infinity))

// -Infinity is a special value representing negative infinity.
// isNaN(-Infinity) returns false because -Infinity is a valid number.
// Output: false

/*In summary, isNaN() returns true for values that cannot be converted to numbers 
(like strings, objects, and undefined), and false for values that can be converted to numbers
(like numbers, booleans, and null/empty values). */


//3) Write a javascript program to print 6 digit random OTP

let otp = Math.floor(Math.random() * 900000) + 100000;
console.log(otp);