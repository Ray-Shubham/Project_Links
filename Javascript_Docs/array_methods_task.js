//Write a Javascript program to merge Two arrays using concat() method.

const a = [1, 2, 3];
const b = [4, 5, 6];
let c = a.concat(b);
console.log(c);

//Output: [ 1, 2, 3, 4, 5, 6 ]

/* -------------------------End------------------------- */

//Write a Javascript program to Flatten a nested array up to a specific depth using flat() method.

// Input: const nestedArray = [1, [2, [3, [4]]]];
// Output: [1, 2, 3, [4]]

const nestedArray = [1, [2, [3, [4]]]];
let x = nestedArray.flat(2);
console.log(x);

// Output: [1, 2, 3, [4]]

/* -------------------------End------------------------- */

//Write a Javascript program to Remove elements from an array and optionally insert new elements using splice() method.

// Input:  const array = [1, 2, 3, 4, 5];
// Output:  [1, 2, 'a', 'b', 5]

const array = [1, 2, 3, 4, 5];
let y = array.splice(2, 2, "a", "b");
console.log(array);

// Output:  [1, 2, 'a', 'b', 5]

/* -------------------------End------------------------- */

//Write a Javascript program to Extract a portion of an array into a new array using slice() method.

// Input: const array = [1, 2, 3, 4, 5];
// Output: [2, 3, 4]

const arr = [1, 2, 3, 4, 5];
let z = arr.slice(1, 4);
console.log(z);

/* -------------------------End------------------------- */

//Write a Javascript program to Create a new array with some elements replaced, without modifying the original array using toSpliced() method.

// Input: const array = [1, 2, 3, 4, 5];
// Output: [1, 'a', 'b', 4, 5]

const array1 = [1, 2, 3, 4, 5];
let v = array1.toSpliced(1, 2, "a", "b");
console.log(v);

// Output: [1, 'a', 'b', 4, 5]

/* -------------------------End------------------------- */

//Write a Javascript program to Copy part of an array to another location in the same array.

// Input: const array = [1, 2, 3, 4, 5];
// Output: [4, 5, 3, 4, 5]

const array2 = [1, 2, 3, 4, 5];
array2.copyWithin(0, 3, 5);
console.log(array2);

// Output: [4, 5, 3, 4, 5]

/* -------------------------End------------------------- */

//Write a Javascript program to Find the first occurrence of a value in an array using indexOf() method.

// Input: const array = [1, 2, 3, 2, 1];
// Output: 1

const array3 = [1, 2, 3, 2, 1];
const index = array3.indexOf(2);
console.log(index);

// Output: 1

/* -------------------------End------------------------- */

//Write a Javascript program to Find the last occurrence of a value in an array using lastIndexOf().

// Input: const array = [1, 2, 3, 2, 1];
// Output: 3

const array4 = [1, 2, 3, 2, 1];
const lastIndex = array4.lastIndexOf(2);
console.log(lastIndex);

// Output: 3

/* -------------------------End------------------------- */

//Write a Javascript program to Check if an array contains a certain value using includes() method.

// Input: const array = [1, 2, 3, 4, 5];
// Output: true

const array5 = [1, 2, 3, 4, 5];
const hasValue = array5.includes(3);
console.log(hasValue);

// Output: true

//Write a Javascript program to Use multiple array methods in a single task.

const array6 = [1, 2, 3];
const array7 = [4, 5, 6];
const mergedArray = array6.concat(array7).flat();
const splicedArray = mergedArray.toSpliced(2, 1, "a");
const finalArray = splicedArray.slice(1, 5);
console.log(finalArray.includes("a"));
console.log(finalArray.indexOf(5));
console.log(mergedArray);
console.log(splicedArray);
console.log(finalArray);
