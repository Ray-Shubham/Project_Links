//Write a program to print numbers from 10 to 1


for(i=10;i>=1;i--){
    console.log(i)
}

//Write a program to print numbers from -1 to -10(Do not use ">=")

for(i=-1;!(i<=-10-1);i--){
    console.log(i)
}

// for(i=-1;i!=-11;i--){
//     console.log(i)
// }

//Write a program to print numbers from -10 to -1(Do not use "<=")


for(i=-10;!(i>=0);i++){
    console.log(i)
}

// for(i=-10;i!=0;i++){
//     console.log(i)
// }

//Write a program to print the product of digits in the number

let num=9987;
let x=String(num);
let product=1;

for (i=0;i<x.length;i++){
    product*=Number(x[i]);
}
console.log(product);
