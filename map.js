//map function - takes in 2 args - an array to map and a callback function.


const map = function(originalArray, callback) {
  const results = [];

  for (let item of originalArray) {
    results.push(callback(item));
  }
  return results;
};

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


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); //True
assertArraysEqual(map(words, word => word[0] + "at"), ["gat", "cat", "tat", "mat", "tat"]); //True
assertArraysEqual(map(words, () => "dog"), ["dog", "dog", "dog", "dog", "dog",]); //True
assertArraysEqual(map(words, () => "dog"), ["dog", "cat", "dog", "dog", "dog",]); //False
