//Write a javascript program to print reverse of a given string

let x = "hello";
let y = "";
for (i = x.length - 1; i >= 0; i--) {
  y += x[i];
}
x = y;
console.log(x);

//Output: olleh

/* -------------------------End------------------------- */

//Write a Javascript program to remove spaces between a sentence'

// let a = "          My      name is      Ray           Shubham      ";
// let s = "";
// let c = false;
// for (i = 0; i < a.length; i++) {
//   if (a[i] !== " ") {
//     s = s + a[i];
//     c = false;
//   } else if (!c) {
//     s = s + " ";
//     c = true;
//   }
// }
// s = s.trim();
// console.log(s);

//Output: My name is Ray Shubham

/* -------------------------End------------------------- */

// let a = "          My      name is      Ray           Shubham      ";
// console.log(a.split(" ").join(""));

//Output: MynameisRayShubham

/* -------------------------End------------------------- */

// let a = "          My      name is      Ray           Shubham      ";
// let b = a.trim().replace(/\s+/g, " ");
// console.log(b);

//Output: My name is Ray Shubham

/* -------------------------End------------------------- */

//Write a Javascript program to print before letters of every character by using ASCII values'

// let a = "RayShubham";
// let res;
// let c = "";
// for (i = 0; i < a.length; i++) {
//   let char = a[i];
//   if (char === "a") {
//     res = "z";
//   } else {
//     res = String.fromCharCode(char.charCodeAt(0) - 1);
//   }
//   c = c + res;
// }
// console.log(c);

//Output: QzxRgtagzl

/* -------------------------End------------------------- */

// let a = "ray";
// let res;
// let b = "";
// let c = "";
// for (i = 0; i < a.length; i++) {
//   res = a.charCodeAt(i) - 1;
//   b = b + res + " ";
//   c = c + String.fromCharCode(res);
// }
// console.log(c);

//Output: q`x

/* -------------------------End------------------------- */

// let a = "Ray Shubham";
// let c = "";

// for (let i = 0; i < a.length; i++) {
//   let char = a[i];
//   let res;

//   if (char === "a") {
//     res = "z";
//   } else if (char === "A") {
//     res = "Z";
//   } else if (char >= "b" && char <= "z") {
//     res = String.fromCharCode(char.charCodeAt(0) - 1);
//   } else if (char >= "B" && char <= "Z") {
//     res = String.fromCharCode(char.charCodeAt(0) - 1);
//   } else {
//     res = char;
//   }

//   c += res;
// }
// console.log(c);

//Output: Qzx Rgtagzl
