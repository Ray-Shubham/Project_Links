/*1.Write a program to find the sum of all even numbers in an array using a for loop.
Example: let arr = [1, 2, 3, 4, 5, 6]; */

// let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

/*-------------------------End------------------------- */

// function sumEvenArray(arr){
//     var sum=0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sum+=arr[i];
//         }
//     }
//     console.log(sum);
// }
// let arr = [1, 2, 3, 4, 5, 6];
// sumEvenArray(arr);

/*-------------------------End------------------------- */

// function sumOfEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenSum = sumOfEvenNumbers(numbers);
// console.log("Sum of even numbers:", evenSum);

/*-------------------------End------------------------- */

/*2.Use a do-while loop to print the numbers from 1 to 10, but only if the number is not equal to 5.
Example: let num = 1;
Test Case: printNumbers() // Output: 1, 2, 3, 4, 6, 7, 8, 9, 10
 */

// let num = 1;
// do {
//   if (num !== 5) {
//     console.log(num);
//   }
//   num++;
// } while (num <= 10);

/*-------------------------End------------------------- */

// let num = 1;
// let output = "";
// do {
//   if (num !== 5) {
//     output += num + " ";
//   }
//   num++;
// } while (num <= 10);
// console.log(output);

/* -------------------------End------------------------- */

/*3.Write a Javascript program to check whether given input string is palindrome or not?
I/p:mom-->is a palindrome
I/p:father:--->is not a palindrome. */

// function palindrome(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return `${str} ---> is not a palindrome`;
//     }
//   }
//   return `${str} ---> is a palindrome`;
// }
// let result1 = palindrome("Mom");
// let result2 = palindrome("Father");
// console.log(result1);
// console.log(result2);

/* -------------------------End------------------------- */

// function palindrome(str) {
//   str = str.toLowerCase();
//   var s = "";
//   for (i = 0; i < str.length; i++) {
//     s = str[i] + s;
//   }
//   if (s == str) {
//     console.log("Palindrome");
//   } else {
//     console.log("Not palindrome");
//   }
// }
// palindrome("Mom");

/* -------------------------End------------------------- */

/*4.Write a program using a do-while loop to print the numbers from 10 to 1, but only if the number is odd.
If the number is even, print "Skipping even number".

Example: let num = 10;
Output: 9, Skipping even number, 7, Skipping even number, 5, Skipping even number, 3, Skipping even number, 1 */


// let num = 10;
// num--;
// do {
//     if (num%2 == 0 ) {
//         console.log("Skipping even number");
//     }else{
//         console.log(num);
//     }
//     num--;
// } while (num > 0);

/* -------------------------End------------------------- */

/*5.Write a program using a while loop to find the average of all numbers in an array.
If the average is greater than 50, print "Average is large".
Example: let arr = [1, 2, 3, 4, 5, 6];
Output: 3.5 */

// let arr = [1, 892, 53, 44, 59, 6];
// let i = 0;
// let sum = 0;
// while (i < arr.length) {
//   sum = sum + arr[i];
//   i++;
// }
// let avg = sum / arr.length;
// console.log(avg);

// if (avg > 50) {
//   console.log("Average is large");
// }

/* -------------------------End------------------------- */

/*6. Write a Javascript program to print Star pattern
 *
 * *
 * * *
 * * * *
 * * * * *
 */

// function pattern1(n){
//     for(i=1;i<=n;i++){
//       for(j=1;j<=i;j++){
//         process.stdout.write("* ");
//       }
//       console.log();
//     }
//   }
//   pattern1(5);
