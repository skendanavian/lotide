const eqArrays = require("./eqArrays.js")

const assertArraysEqual = function(inputArray1, inputArray2) {
  if (eqArrays(inputArray1, inputArray2)) {
    console.log("✅ ✅ ✅ Assertion Passed: The arrays are identical.");
  } else {
    console.log("❌❌❌ Assertion failed: The arrays are not identical.");
  }
};

module.exports = assertArraysEqual;



