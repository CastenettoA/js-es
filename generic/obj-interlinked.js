/**
 * interlinked objects
 */

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

  delete family.father;
  delete family.mother.husband;
  // or olnly family = null (is called Unreachable island)

  let rocket = {
    name: 'Luxury 500'
  }

  let rocket_sh_copy = rocket; // shallow copy not deep copy like struc...
  rocket = null;
  console.log(typeof rocket_sh_copy); // exist!