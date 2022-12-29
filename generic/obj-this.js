// Using "this" in object literal
// Here the function makeUser returns an object.
// What is the result of accessing its ref? Why?

function makeUser() {
    return {
      name: "John",
      ref: this // only the call moment matters.
    };
  }
  
  let user = makeUser();
//   alert( user.ref.name ); // cannot read p. of und.

  function makeUser_fixed() {
    return {
        name: "John",
        ref() {
            return this;
        }
      } 
  }
  let user2 = makeUser_fixed();
  console.log(user2.ref().name)

  