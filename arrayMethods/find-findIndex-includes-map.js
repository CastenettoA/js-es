// 1. find the first number > of 100 in the array
let numbers = [0, 'abcd', 12, 3454, 100, 101, -3];
let first_occ = numbers.find( num => num > 100);
console.log('(1) the first result is: ' + first_occ);


// 2. find the index of the first cart occurencies
let str = ['melo', 'uva', 'anguria', 'festa', 'macchina'];
let str_index = str.findIndex( s => s === 'festa' );
console.log('(2) str index is: ' + str_index + ', and str value is: ' + str[str_index]);

// 3. check if an array contain the 12 and 100 and 'tst' value. Return true if so or false is not.
numbers = [0, 'abcd', 12, 3454, 100, 101, -3];
if(numbers.includes(12) && numbers.includes(100) && numbers.includes('tst')) {
    console.log('(3) true.')
} else {
    console.log('(3) false.')
}

// 4. refractor es. n. 3 with obj.
numbers = [0, 'abcd', 12, 3454, 100, 101, -3];
checkValues = [12, 100, -3];
passed = true; 

checkValues.forEach(val => {
    if( numbers.includes(val) === false )
        passed = false
})

console.log('(4) value finded? ' + passed)

// 5. rewrite es. n. 4 but you can't use forEach
numbers = [0, 'abcd', 12, 3454, 100, 101, -3];
checkValues = [12, 100, 'abcd'];
passed = true; 
checkValues.map( val => { numbers.includes(val) === false ? passed = false : '' })
console.log('(5) value finded? ' + passed)


/**
 * 6. Find an object in an array by one of its properties
 */

const fruit_inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];

function findApples(fruit) { return fruit.name == "apples" }
function findBananas(fruit) { return fruit.name == "bananas" }

let apples = fruit_inventory.find(findApples)
let bananas = fruit_inventory.find(findBananas)

console.log('(6) how much apples? ', apples.quantity)

/**
 * (7) same as es. n. 6 but using arrow function and destructuring
 */


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find