const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion failed: ${inspect(actual)} === ${inspect(expected)}`);
  }

};

module.exports = assertObjectsEqual;



//Test Cases
// const ab = {a: "1", b: "2", };
// const ba = {b: "2", a: "1"};
// const abc = {a: "1", b: "2", c: "3"};
// const cba = {c: "3", b: "2", a: "1"};
// const cbaWrong = {c: "2", b: "2", a: "1"};
// const cd = {c: "1", d: ["2", 3]};
// const dc = {d: ["2", 3], c: "1"};


// assertObjectsEqual(cd, dc); //true
// assertObjectsEqual(ab, ba); //true
// assertObjectsEqual(ab, abc); //false
// assertObjectsEqual(cbaWrong, cba); //false

