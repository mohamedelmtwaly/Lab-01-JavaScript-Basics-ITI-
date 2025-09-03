//Fill an array of 3 elements from the user , and apply each of following math operation on (+,*,/)


// let num1 = Number(prompt("enter number 1"));
// let num2 = Number(prompt("enter number 1"));
// let num3 = Number(prompt("enter number 1"));


let nums = [];

for (let i = 0; i < 3; i++) {
    nums[i] = parseFloat(prompt("enter num " + (i+1)));
}

let sum = nums[0] + nums[1] + nums[2];
let mluti = nums[0] * nums[1] * nums[2];
let divid = nums[0] / nums[1] / nums[2];

console.log(sum);
console.log(mluti);
console.log(divid);

//sum 3 of values