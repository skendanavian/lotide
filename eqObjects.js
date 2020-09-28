// Version Using Recursion to check inner objects of objects for equality.


const eqObjects = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (Object.keys(obj1).length !== Object.keys(obj2).length || Array.isArray(obj1) || Array.isArray(obj2)) {
    return false;
  };
  for (let value of obj1Keys) {
    if (typeof obj1[value] === 'object' || typeof obj2[value] === 'object') {
      //use recursion if there is an object found as one of the property values. 
      return eqObjects(obj1[value], obj2[value]);
      //Case when property values are not an object. 
    } else if (obj1[value] !== obj2[value]) {
      return false;
    }
  }
  return true;
};

module.exports = {eqObjects}

//Original eqObjects below. Can't check equality for inner objects.

// const eqArrays = require('./eqArrays');

// //takes in 2 objects // compares // -> returns true or false
// const eqObjects = function(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }
//   for (const e of keys1) {
//     if (Array.isArray(object1[e]) && Array.isArray(object2[e])) {
//       console.log("we are arrays");
//       if (!eqArrays(object1[e], object2[e])) {
//         return false;
//       }
//     } else if (object1[e] !== object2[e]) {
//       return false;
//     }
//   }
//   return true;
// };

// module.exports = eqObjects;




// assertEqual(eqObjects({a: 1, b: 2}, {a: 1, b: 2}), true)
// assertEqual(eqObjects({a: {z: 1}, b: 2}, ["a", 'B']), false)
// assertEqual(eqObjects({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2}), true) // => true
// assertEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: {z: 1}, b: 2}), false) // => false
// assertEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2}), false) // => false
// assertEqual(eqObjects({a: {y: 0, z: 1}, b: 2, d: {y: 1, z: 1, x: 1}}, {a: {y: 0, z: 1}, b: 2, d: {y: 1, z: 1, x: 1}}), true) // => false




