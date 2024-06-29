//Write a Javascript program to print Non-Fibonacci series till given input number

/*  Input: Enter a number:10
    Output: 4 6 7 9 10 */

// num=prompt("Enter a number: ")

let num = 10;
let a = 0;
let b = 1;
let result = "";
while (a <= num) {
  for (i = a + 1; i < b; i++) {
    if (i <= num) {
      result = result + i + " ";
    }
  }
  c = a + b;
  a = b;
  b = c;
}
console.log(result);