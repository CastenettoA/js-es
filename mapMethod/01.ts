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

// console.log(makeStrings([0, 1, -3, 1000, null, undefined]))

// 3) Capitalize each of an array of names
function capitalizeNames(arr:string[]){
    return arr.map( (string:string) => string.toUpperCase() )
  }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings upppercased of the names
interface PeopleObj { name: string, age: number};
function namesOnly(arr: PeopleObj[]){
    // your code here
    return arr.map( (peopleObj:PeopleObj) =>  peopleObj.name.toUpperCase() )
  }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 

/**
 * 5) Make an array of strings of the names saying whether or not 
 * they can go to The Matrix
 * */

function whatUserCanAccess(arr:PeopleObj[]){

    const y = ' can go!', n = ' can\'t...';
    
    return arr.map( (p:PeopleObj) => p.age >= 18 ? p.name + y : p.name + n );
}
  
  console.log(whatUserCanAccess([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));