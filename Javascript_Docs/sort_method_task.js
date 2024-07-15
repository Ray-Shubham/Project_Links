//1. Given an array of strings, use the map function to create a new array where each string is converted to uppercase and sort the data

function toUpperCaseAndSort(arr) {
  return arr.map((str) => str.toUpperCase()).sort();
}
let x = ["hello", "world", "javascript", "apple", "banana"];
let uppercaseAndSortedWords = toUpperCaseAndSort(x);
console.log(uppercaseAndSortedWords);

// Output: ["APPLE", "BANANA", "HELLO", "JAVASCRIPT", "WORLD"]

//2. Given an array of numbers, use the forEach function to add 1 to each number in the array and sort the data in descending

function addOneAndSortDesc(arr) {
  let result = [];
  arr.forEach((num) => result.push(num + 1));
  return result.sort((a, b) => b - a);
}
let numbers = [3, 1, 4, 1, 5, 9, 2];
let addedAndSortedNumbers = addOneAndSortDesc(numbers);
console.log(addedAndSortedNumbers);

// Output: [10, 6, 5, 4, 3, 2, 2]

//3. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters and join the data separated by space using reduce and reduceRight

function filterAndJoin(arr) {
  let filteredArr = arr.filter((str) => str.length > 3);
  let joinedWithSpace = filteredArr.reduce((acc, curr) => acc + " " + curr, "");
  let joinedWithSpaceRight = filteredArr.reduceRight(
    (acc, curr) => curr + " " + acc,
    ""
  );
  return { joinedWithSpace, joinedWithSpaceRight };
}
let words = ["hello", "world", "abc", "javascript", "foo", "bar"];
let res = filterAndJoin(words);
console.log(res);

// Output: {
//   joinedWithSpace: "hello world javascript",
//   joinedWithSpaceRight: "javascript world hello"
// }

/* -------------------------End------------------------- */

function processStrings(strings) {
  // Step 1: Filter strings with more than 3 characters
  const filteredStrings = strings.filter((str) => str.length > 3);

  // Step 2: Join filtered strings with spaces using reduce
  const joinedForward = filteredStrings.reduce((acc, curr, index) => {
    return index === 0 ? curr : `${acc} ${curr}`;
  }, "");

  // Step 3: Join filtered strings with spaces using reduceRight
  const joinedBackward = filteredStrings.reduceRight((acc, curr, index) => {
    return index === filteredStrings.length - 1 ? curr : `${curr} ${acc}`;
  }, "");

  return {
    filtered: filteredStrings,
    joinedForward: joinedForward,
    joinedBackward: joinedBackward,
  };
}

// Example usage
const originalStrings = ["a", "cat", "dog", "elephant", "bird", "frog", "hi"];
const result = processStrings(originalStrings);

console.log("Original array:", originalStrings);
console.log("Filtered array:", result.filtered);
console.log("Joined forward:", result.joinedForward);
console.log("Joined backward:", result.joinedBackward);


//Output:
// Original array: [ 'a', 'cat', 'dog', 'elephant', 'bird', 'frog', 'hi' ]
// Filtered array: [ 'elephant', 'bird', 'frog' ]
// Joined forward: elephant bird frog
// Joined backward: elephant bird frog
