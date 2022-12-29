/**
 * cloning, merging, Object.assign.
 */

let objToCopy = { /*...*/ };
let objClone = {}; 

/**
 * to copy we can use an object.clone or a for in and clone all prop
 */

Object.assign(objClone, objToCopy); // it override prop that already exist.
// const newObj =  Object.assign({}, objToCopy)

let user = {
    name: 'roberto',
    hobby: ['cucina', 'stampanti 3d']
};

let new_user = structuredClone(user);
let shallow_copy = {...user};

