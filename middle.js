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

const middle = function(array) {

  let arrayLength = array.length;
  let arrayMiddle = Math.floor(array.length / 2);

  if (Array.isArray(array)) {
    if (arrayLength === 1 || arrayLength === 2) {
      return [];
    } if (arrayLength % 2 === 0) {
      return [array[arrayMiddle - 1], array[arrayMiddle]];
    } else {
      return [array[arrayMiddle]];
    }

  }
  console.log("Input is not an array");
  return "Input is ot an Array";
};

module.exports = middle;




