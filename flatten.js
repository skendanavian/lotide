const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(inputArray) {
  const joinArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      inputArray[i].forEach(element => joinArray.push(element));
    } else {
      joinArray.push(inputArray[i]);
    }

  }
  return joinArray;
};

module.exports = flatten;


//Test Cases

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
// assertArraysEqual(flatten([1, 3, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => false
// assertArraysEqual(flatten([1, 2, [3, 4], 5, ["cars"], [6], 9]), [1, 2, 3, 4, 5, 6]); // => false
// assertArraysEqual(flatten([1, 2, [3, 4], 5, "cars", [6]]), [1, 2, 3, 4, 5, "cars", 6]); // => true


