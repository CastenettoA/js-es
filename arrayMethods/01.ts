/**
 * 1- "Array squared", so square the value of every element.
 */

let i = [1,2,3,4,5]
i = i.map( n => n**2 ) // we can also use Math.pow(n, 2);
// console.log(i)

/**
 * 2- Sum of every positive element
 * If the given input is an array of numbers
 *  return the sum of all the positives ones.
 * If the array is empty or there aren't any positive numbers, return 0.
 * 
 * reduce / filter
 */

let num = [1, -4, 12, 0, -3, 29, -150];

// return only positive num or []
let positive = num.filter( n => n > 0 ); 
let r = positive.reduce( (sum, n) =>  sum+n, 0 )

console.log(r);