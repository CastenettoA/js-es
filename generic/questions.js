// Question 1. What's the difference between undefined and not defined in JavaScript
// console.log(typeof undefinedVar) // out -> undefined
// typeof undefinedVar === 'undefined' // true


/**
 * how to empty an array?
 */

let arr = [1,2,3,4,5];
arr = []; // or arr.length = 0;

/**
 also this
 */

 while(arr.length) {
    arr.pop();
 }

//  Question 15. What will be the output of the following code?
var z = 1, y = z = typeof y;
console.log(y); // out is "undefined"