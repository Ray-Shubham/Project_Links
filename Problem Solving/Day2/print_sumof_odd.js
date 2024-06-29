// Write a program to print the sum of odd digits in the number

let num=163350;
let x=String(num)
sum=0;
for(i=0;i<=x.length;i++){
    if(x[i]%2==1){
        sum=sum+Number(x[i])
    }
}console.log(sum)


// let x="163354546557";
// // let x=String(num)
// sum=0;
// for(i=0;i<=x.length;i++){
//     if(x[i]%2==1){
//         sum=sum+Number(x[i])
//     }
// }console.log(sum)



//Write a program to print the dufference between even sum & odd sum


let num1="163382"
// num=prompt("enter a number:")
let evenSum=0
let oddSum=0
let difference;
for(i=0;i<=num1.length;i++){
    if(num1[i]%2==1){
        oddSum=oddSum+Number(num1[i])
        // console.log(oddSum)
    }
    if(num1[i]%2==0){
        evenSum=evenSum+Number(num1[i])
        // console.log(evenSum)
    }
}
console.log(evenSum,oddSum)
if(evenSum>oddSum){
    difference=evenSum-oddSum;
    console.log(difference)
}else{
    difference=oddSum-evenSum;
    console.log(difference)
}


// let num="163382911"
// // num=prompt("enter a number:")
// let evenSum=0
// let oddSum=0
// let diff;
// for(i=0;i<num.length;i++){
//     let x=Number(num[i])
//     if(x%2==1){
//         oddSum=oddSum+x
//         // console.log(oddSum)
//     }
//     else{
//         evenSum=evenSum+x
//         // console.log(evenSum)
//     }
// }
// console.log(evenSum,oddSum)
// if(evenSum>oddSum){
//     diff=evenSum-oddSum;
//     console.log(diff)
// }else{
//     diff=oddSum-evenSum;
//     console.log(diff)
// }



// 3) Write a program to check whether even sum is greater or odd sum is greater.

/*input: Enter a number: 163382
output: Even sum is greater

input: Enter a number: 123
output: Odd sum is greater*/


let num2="123"
// num=prompt("enter a number:")
let even_sum=0
let odd_sum=0
let diff;
for(i=0;i<num2.length;i++){
    let x=Number(num2[i])
    if(x%2==1){
        odd_sum=odd_sum+x
        // console.log(oddSum)
    }
    else{
        even_sum=even_sum+x
        // console.log(evenSum)
    }
}
console.log(even_sum,odd_sum)
if(even_sum>odd_sum){
    console.log("evensum is greater")
}else{
    console.log("oddsum is greater")
}
