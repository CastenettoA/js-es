/**
 * Use the built-in .map() method on arrays to solve all of these problems
 */

// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr:number[]): number[] {
    
    /* map call the callback function for each of array items
    and return an array that contain that results */
    return arr.map( (n:number) => n*2 );
}

// console.log(doubleNumbers([2, 5, 100, 250, 700]));

// 2) Take an array of numbers and make them strings
function makeStrings(arr: (number|null|undefined)[]) {
    return arr.map( ( n:number|null|undefined ) => {
        if(n === null || n === undefined)
            return n;
        else
            return n.toString();
    })
}

console.log(makeStrings([0, 1, -3, 1000, null, undefined]))