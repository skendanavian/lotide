const eqArrays = function(array1, array2) {
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

const assertArraysEqual = function(inputArray1, inputArray2) {
  if (eqArrays(inputArray1, inputArray2)) {
    console.log("✅ ✅ ✅ Assertion Passed: The arrays are identical.");
  } else {
    console.log("❌❌❌ Assertion failed: The arrays are not identical.");
  }
};

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


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
assertArraysEqual(flatten([1, 3, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => false
assertArraysEqual(flatten([1, 2, [3, 4], 5, ["cars"], [6], 9]), [1, 2, 3, 4, 5, 6]); // => false
assertArraysEqual(flatten([1, 2, [3, 4], 5, "cars", [6]]), [1, 2, 3, 4, 5, "cars", 6]); // => true


