//Write a Javascript program to reverse number of given input

/*  Input: -987
    Output: -789 */

// num = +prompt("Enter a number: ");
let num = -987
result = 0;
if (num > 0) {
  while (num != 0) {
    rem = num % 10;
    result = result * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(result);
} else {
  let neg_num = Math.abs(num);
  while (neg_num != 0) {
    rem = neg_num % 10;
    result = result * 10 + rem;
    neg_num = Math.floor(neg_num / 10);
  }
  console.log(-result);
}