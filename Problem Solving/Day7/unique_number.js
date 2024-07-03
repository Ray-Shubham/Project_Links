//Write a Javascript program to find Unique and Duplicate number from an array

// arr = [2, 3, 5, 6, 3, 3, 1, 5];
// empty = [];
// uni = "";
// dup = "";
// for (i of arr) {
//   if (!empty.includes(i)) {
//     empty.push(i);
//   }
// }
// console.log(empty);
// for (i of empty) {
//   c = 0;
//   for (j of arr) {
//     if (i == j) c++;
//   }
//   if (c == 1) {
//     uni = uni + i + " ";
//   } else {
//     dup = dup + i + " ";
//   }
// }
// console.log("Unique numbers are:", uni);
// console.log("Duplicate numbers are:", dup);

//Write a Javascript program to find Unique and Duplicate number

// let x = prompt("Enter Number: ").split(" ").map(Number);
// (empty = []), (uni = "");
// dup = "";
// for (i of x) {
//   if (!empty.includes(i)) {
//     empty.push(i);
//   }
// }
// console.log(empty);
// for (i of empty) {
//   c = 0;
//   for (j of x) {
//     if (i == j) c++;
//   }
//   if (c == 1) {
//     uni = uni + i + " ";
//   } else {
//     dup = dup + i + " ";
//   }
// }
// if (uni.length == 2) {
//   console.log("Unique Number is:", uni);
// } else {
//   console.log("Unique Number are:", uni);
// }
// if (dup.length == 2) {
//   console.log("Duplicate Number is:", dup);
// } else {
//   console.log("Duplicate Number are:", dup);
// }

//Write a Javascript program to print Smallest unique number and Largest duplicate number.

// arr=prompt("Enter numbers: ").split(" ").map(Number)
// let a = "5 4 5 3 3 1 2";
// a = a.split(" ").map(Number);
// let empty = [];
// let smallUniq = a[0];
// let largeDup = a[0];
// for (i of a) {
//   if (!empty.includes(i)) {
//     empty.push(i);
//   }
// }
// for (i of empty) {
//   c = 0;
//   for (j of a) {
//     if (i == j) c++;
//   }
//   if (c == 1) {
//     if (i < smallUniq) smallUniq = i;
//   } else if (c > 1) {
//     if (i > largeDup) largeDup = i;
//   }
// }
// console.log("Smallest Unique Number:", smallUniq);
// console.log("Largest Duplicate Number:", largeDup);

//Output:
// Smallest Unique Number: 1
// Largest Duplicate Number: 5

//Write a javascript program to print vowels and consonants of given string

// let x = "Subham Ray";
// v = ["a", "e", "i", "o", "u"];
// empty = [];
// c = 0;
// vowels = "";
// cons = "";
// for (i of x) {
//   if (!empty.includes(i)) {
//     empty.push(i);
//   }
// }
// console.log(empty);
// for (i of empty) {
//   c = 0;
//   for (j of v) {
//     if (i == j) c++;
//   }
//   if (c == 1) {
//     vowels = vowels + i + " ";
//   } else {
//     cons = cons + i + " ";
//   }
// }
// console.log("Vowels are:", vowels.split("").reverse().join(""));
// console.log("Consonants are:", cons);

//Output:
// Vowels are:  a u
// Consonants are: S b h m   R y
