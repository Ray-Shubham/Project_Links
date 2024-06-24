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


let num="163382"
// num=prompt("enter a number:")
let evenSum=0
let oddSum=0
let diff;
for(i=0;i<=num.length;i++){
    if(num[i]%2==1){
        oddSum=oddSum+Number(num[i])
        // console.log(oddSum)
    }
    if(num[i]%2==0){
        evenSum=evenSum+Number(num[i])
        // console.log(evenSum)
    }
}
console.log(evenSum,oddSum)
if(evenSum>oddSum){
    diff=evenSum-oddSum;
    console.log(diff)
}else{
    diff=oddSum-evenSum;
    console.log(diff)
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


let num="123"
// num=prompt("enter a number:")
let evenSum=0
let oddSum=0
let diff;
for(i=0;i<num.length;i++){
    let x=Number(num[i])
    if(x%2==1){
        oddSum=oddSum+x
        // console.log(oddSum)
    }
    else{
        evenSum=evenSum+x
        // console.log(evenSum)
    }
}
console.log(evenSum,oddSum)
if(evenSum>oddSum){
    console.log("evensum is greater")
}else{
    console.log("oddsum is greater")
}
