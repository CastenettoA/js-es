/**
 * the CONST in js.
 * create a block-scoped constants, much like variables declared using the let keyword.
 * The value can't be changed using the assignment operator and cant be redeclared.
 * However if a constant is a object or an array the items can be updated and removed.
 * 
 * 'delete' operator remove a property from a object.
 * delete object.property
 * 
 * Se la proprietà da cnacellare non esiste allora 'delete' non avrà effetto e sarà ritornato true. */

const number = 42;
let editMe = 'hello ';
// number = 3; // TypeError: Assignment to constant variable
// const number = 43; // error: cannot redeclare block-scoped variable

const rocket = {
    name: undefined,
    createdAt: new Date(),
    logRaw: ['dsd3rt4fwr3tr2r', 'rr32e22we22'],
    missions: [
        { name: 'Apollo 23', status: 2, crew: ['Anderson', 'Mali', 'Alite']  },
        { name: 'Top Secret Crew XY', status: 0, crew: ['Anderson', 'Robot_1A_2w_003']  },
    ]
}

rocket.name = 'WATER SPACESHIP 2'
rocket.missions.push({ name: 'Mars', status: 2, crew: ['Robot_1A_2w_002', 'Robot_2A_001']  })
delete rocket.logRaw

console.log(rocket)