//Write a Javascript program to print non-prime numbers from Fibonacci series till given input number

/*  Input: Enter no of Fib Series:7
    Output: 0 1 1 8 */

function nonPrime(n) {
  if (n <= 1) {
    return true;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return true;
    }
  }
  return false;
}
// let num = +prompt("Enter number of Fibonacci series: ");
let num = 7;
let a = 0,
  b = 1,
  result = "",
  i = 1;

while (i <= num) {
  if (nonPrime(a)) {
    result += a + " ";
  }
  let c = a + b;
  a = b;
  b = c;
  i++;
}
console.log(result);
