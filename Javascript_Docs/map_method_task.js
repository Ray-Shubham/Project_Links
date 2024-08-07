//1. Given an array of numbers, use the map function to create a new array where each number is doubled.

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

// Output: [2, 4, 6, 8, 10]

//2. Given an array of names, use the forEach function to print each name in the console.

const names = ["Alice", "Bob", "Charlie", "David"];
names.forEach((name) => console.log(name));

//Output:
// Alice
// Bob
// Charlie
// David

//3. Given an array of numbers, use the filter function to create a new array that contains only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// Output: [2, 4, 6, 8, 10]

//4. Given an array of objects representing students with their names and scores, use the map function to create a new array of strings that says "Name has scored Score".

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 88 },
];

const result = students.map(
  (student) => `${student.name} has scored ${student.score}`
);
console.log(result);

// Output: ['Alice has scored 85', 'Bob has scored 92', 'Charlie has scored 88']

//5. Given an array of objects representing people with their names and ages, use the filter function to create a new array that contains only the people who are 18 or older.

const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
  { name: "David", age: 22 },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);

// Output: [ { name: 'Bob', age: 20 }, { name: 'David', age: 22 } ]

//6. Given an array of strings, use the map function to create a new array where each string is converted to uppercase.

const words = ["hello", "world", "javascript", "map"];

const uppercaseWords = words.map((word) => word.toUpperCase());
console.log(uppercaseWords);

// Output: ['HELLO', 'WORLD', 'JAVASCRIPT', 'MAP']

//7. Given an array of numbers, use the forEach function to add 1 to each number in the array.

let numbers = [10, 20, 30, 40, 50];

numbers.forEach((num, index) => {
  numbers[index] = num + 1;
});

console.log(numbers);

// Output: [11, 21, 31, 41, 51]

/* -------------------------End------------------------- */

let numbers = [10, 20, 30, 40, 50];

let incrementedNumbers = numbers.map((num) => num + 1);

console.log(incrementedNumbers);

// Output: [11, 21, 31, 41, 51]

//8. Given an array of strings, use the filter function to create a new array that contains only the strings that have more than 3 characters.

const words = ["hi", "hello", "hey", "world", "js"];

const longWords = words.filter((word) => word.length > 3);

console.log(longWords);

// Output: ['hello', 'world']
