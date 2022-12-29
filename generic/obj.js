// /**
//  * Object. Can be created with 2 syntaxes
//  */

const { type } = require("pomodoro-cli/models/pomodoro");

// let user = new Object() // obj constructor syntax
// let admin = {
//     status: 'active',
//     "an example": 23, // multiword property need to be quoted
//     refuse: null, // optional tailing command. Make easier to add/remove and move a property
// } // obj literal syntax

// delete admin.refuse; // delete a property
// console.log(admin.refuse) // undefined

// // if(admin.pass === undefined) ... or
// // if("pass" in admin === false)

// let key = 'status';
// // admin[key] this works
// // admin.key this NOT works

// /**
//  * we can use square brackets in a object literna,
//  * when creating it.
//  * This is COMPUTED PROPERTIES
//  */

// let propertyName = "name", status = 'freezed';
// const properyName_2 = "Code"
// let spaceship = {
//     [propertyName]: 'Valigor I',
//     ['public' + properyName_2]: '124de1'
//     ['prod' + properyName_2],
//     status
// }


// /** 
//  * in object we can use numbers as prop,
//  * the will be converted as string.
//  */
// let n = {
//     0: 'ciao',
//     1: 'hola'
// } // n["0"]



// /**
//  * ---------------
//  */

// let obj = {
//     v: undefined
// }

// // obj.v === undefined
// // "v" in obj === true!


/* Object and Ordering 
* the object prop have a special ordering.
* all the prop are listed as declares but the numbers are ordered
*/


// let phonePrefix = {
//     "39": "italy",
//     "41": "Switzerland",
//     "1": "USA"
// }

// for(let p in phonePrefix) {
//     console.log(p);
// }

// let phonePrefix_fixed = {
//     "+39": "italy",
//     "+41": "Switzerland",
//     "+1": "USA"
// }

// for(let p in phonePrefix_fixed) {
//     console.log(p, phonePrefix_fixed[p]);
// }

// let user = {}
// user.name = "John"
// user.surname = "Smith"
// user.name = "Pete"
// delete user.name

// console.log(user);

/**
 * ES: check empiteness
 */

let schedule = {}
console.warn( isEmpty(schedule) ); // true

function isEmpty(obj) {
    for(let p in obj) {
        return false
    }

    return true
}

// --------------- Sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for(let user in salaries) {
    sum += salaries[user];
}

// Multiply numeric property values by 2k
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu);
function multiplyNumeric(obj) {
    for( prop in menu ) {
        if(typeof menu[prop] === 'number')
            menu[prop] *= 2
    }
}

console.log(menu);

