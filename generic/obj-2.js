  /**
   * (1)
   * convert a object to a deep array 
   * @status: SOLVED
   */
  function deepArray( object ) {
    let arr = [];
    for( key in object ) {
        arr.push([key, object[key]]);
    }

    return arr;
  }

  let a = deepArray({ a: 1, b: 2, c: 1000 });
  console.log(a);


  /**
   * (2) 
  * Task description: Write a method that returns new object without provided properties 
  * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 } 
  * Task complexity: 2 of 5 
  * @param {Object} object - Any object 
  * @param {?} args - list of properties to remove from object 
  * @returns {Object} - New object without listed values 
*/

function cleanObjProps(obj, ...props) {
  for(key in obj) {
    if(props.includes(key))
      delete obj[key];
  }
  return obj;
}

let obj = { a: 1, b: 2, c: 'avocado', d: 'sunset' };
let propsToRemove = ['c','d']
console.log(cleanObjProps(obj, ...propsToRemove))