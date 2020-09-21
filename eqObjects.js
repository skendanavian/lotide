const assertEqual = require('./assertEqual');


const eqArrays = function(array1, array2) {

  //toggle to track if the array lengths and/or items are equal
  let arrayCheck = true;

  if (array1.length !== array2.length) {
    arrayCheck = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        arrayCheck = false;
      }
    }
  }
  return arrayCheck;
};

//takes in 2 objects // compares // -> returns true or false
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const e of keys1) {
    if (Array.isArray(object1[e]) && Array.isArray(object2[e])) {
      console.log("we are arrays");
      if (!eqArrays(object1[e], object2[e])) {
        return false;
      }
    } else if (object1[e] !== object2[e]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;


//Test Cases
// const ab = {a: "1", b: "2", };
// const ba = {b: "2", a: "1"};
// const abc = {a: "1", b: "2", c: "3"};
// const cba = {c: "3", b: "2", a: "1"};
// const cbaWrong = {c: "2", b: "2", a: "1"};


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(cba, abc), true);
// assertEqual(eqObjects(cbaWrong, abc), false);


// const cd = {c: "1", d: ["2", 3]};
// const dc = {d: ["2", 3], c: "1"};
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = {c: "1", d: ["2", 3, 4]};
// assertEqual(eqObjects(cd, cd2), false);


