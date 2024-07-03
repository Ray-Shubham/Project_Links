// Write a Javacsript program to find the largest number in an array

// let arr = [1, 24, 37088, 4, 5085, 6, 7];
// let big = arr[0];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > big) {
//     big = arr[i];
//   }
// }
// console.log(big);

//Output: 37088

/* -------------------------End------------------------- */

// let arr = [909990901, 24, 37088, 400000, 50855, 6, 78798998];
// let big = 0;
// for (i in arr) {
//   if (arr[i] > big) {
//     big = arr[i];
//   }
// }
// console.log(big);

//Output: 909990901

/* -------------------------End------------------------- */

// let arr = [909, 24, 37088, 400000, 50855, 6, 7];
// let big = 0;
// for (i of arr) {
//   if (i > big) {
//     big = i;
//   }
// }
// console.log(big);

//Output: 400000

/* -------------------------End------------------------- */

// let arr = [9090901, 24, 37088, 400000, 50855, 6, 78798998];
// let big = 0;
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] > big) {
//     big = arr[i];
//   }
//   i++;
// }
// console.log(big);

//Output: 78798998

/* -------------------------End------------------------- */

// let arr = [901, 24, 37088, 400000, 50855, 6, 788];
// let big = 0;
// let i = 0;
// do {
//   if (arr[i] > big) {
//     big = arr[i];
//   }
//   i++;
// } while (i < arr.length);
// console.log(big);

//Output: 400000

/* -------------------------End------------------------- */

// Write a Javacsript program to find the second largest number in an array

// let arr = [289, 63, 111, 4, 5, 211];
// let big = -Infinity;
// let seclarge = -Infinity;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > big) {
//     seclarge = big;
//     big = arr[i];
//   } else if (arr[i] > seclarge && arr[i] < big) {
//     seclarge = arr[i];
//   }
// }
// console.log(seclarge);

//Output: 211

/* -------------------------End------------------------- */

// Write a Javascript program to find the smallest number in an array

// let arr = [1, 2, 37088, 0, 5085, -1, 7];
// let small = arr[0];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] < small) {
//     small = arr[i];
//   }
// }
// console.log(small);

//Output: -1

/* -------------------------End------------------------- */

// Write a Javascript program to find the sum of the even numbers in an array

// let arr=[1,2,4,6,8,4,3,7,9]
// let even=0
// for(i=0;i<arr.length;i++){
//   if (arr[i]%2==0) {
//     even=even+arr[i]
//   }
// }console.log(even)

//Output: 24

/* -------------------------End------------------------- */

// Write a Javascript program to find the odd numbers in an array and push into new array

// let arr=[1,2,3,4,5,6,7]
// odd=[]
// c=0
// for(i=0;i<arr.length;i++){
//   if(arr[i]%2==1){
//     odd[c]=arr[i]
//     c++

//   }
// }
//  console.log(odd)

//Output: [ 1, 3, 5, 7 ]

/* -------------------------End------------------------- */

// let arr = [19, 2, 39, 4, 95, 6, 7];
// let odd = [];
// let i = 0;
// c = 0;

// do {
//   if (arr[i] % 2 == 1) {
//     odd[c] = arr[i];
//     c++;
//   }
//   i++;
// } while (i < arr.length);
// console.log(odd);

//Output: [ 19, 39, 95, 7 ]

/* -------------------------End------------------------- */

// let arr = [19, 2, 39, 4, 95, 6, 7];
// let odd = [];
// let i = 0;
// c = 0;

// while (i < arr.length) {
//   if (arr[i] % 2 == 1) {
//     odd[c] = arr[i];
//     c++;
//   }
//   i++;
// }
// console.log(odd);

//Output: [ 19, 39, 95, 7 ]

/* -------------------------End------------------------- */

// let arr = [19, 25, 36, 4, 95, 6, 7];
// let odd = [];
// c = 0;

// for (i in arr) {
//   if (arr[i] % 2 == 1) {
//     odd[c] = arr[i];
//     c++;
//   }
// }
// console.log(odd);

//output: [ 19, 25, 95, 7 ]

/* -------------------------End------------------------- */

// let arr = [19, 25, 37, 4, 95, 6, 7];
// let odd = [];
// c = 0;

// for (i of arr) {
//   if (i % 2 == 1) {
//     odd[c] = i;
//     c++;
//   }
// }
// console.log(odd);

//Output: [ 19, 25, 37, 95, 7 ]

/* -------------------------End------------------------- */

// let arr = [19, 25, 37, 4, 95, 6, 7];
// let odd = [];
// c = 0;
// function oddArray(arg) {
//   for (i of arr) {
//     if (i % 2 != 0) {
//       odd[c] = i;
//       c++;
//     }
//   }
// }
// oddArray();
// console.log(odd);

//Output: [ 19, 25, 37, 95, 7 ]

/* -------------------------End------------------------- */

// Write a Javascript program to find the sum of the odd numbers in an array

// let arr = [1, 2, 4, 6, 8, 4, 3, 7, 9];
// let odd = 0;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     odd = odd + arr[i];
//   }
// }
// console.log(odd);

//Output: 20
