/**
 * Jennifer Murphy
 * February 2, 2024
 */

let myArray = [1, 2, 3, 4, 5];

// Creating array using constructor
let myArrayConstructor = new Array();
console.log(`Empty array: ${myArrayConstructor}`);
myArrayConstructor.push(24);
console.log(`Not Empty array: ${myArrayConstructor}`);

// Creating array with values using constructor
let myConstructorArray = new Array(10, 20, 30, 40, 50);
console.log(`# value array ${myConstructorArray}`);
console.log(`# value array obj`, myArrayConstructor);

// Create array with constructor
let array2 = new Array(10);
console.log(`New array: ${array2}`);

// Add (push) 80 to array
array2.push(80);
console.log(`New array: ${array2}`);

// Tuesday
let tuesdayArray = new Array(10).fill("Tuesday!");
console.log(`Class is on ${tuesdayArray}`);


/**
 * squares two nums
 * @param {*} x the number to be squared
 * @returns the squared value of the number
 */
function square(x)
{
    return x * x;
}

let nums = new Array(1, 33, 22, 5);
let squaredNums = nums.map(function(value)
{
    return square(value);
}); 

console.log(`squared values: ${squaredNums}`);

// TODO before hand it: rewrite 
// let squaredNums = nums.map(function(value)
// {
//     return square(value);
// }); 