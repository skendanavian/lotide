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




const letterPositions = function(sentence) {

  const results = {};
  let counter = 0;
  for (const char of sentence) {
    if (results[char]) {
      results[char].push(counter);
    } else {
      results[char] = [];
      results[char].push(counter);
    }
    counter++;
  }
  return results;
};

assertArraysEqual(letterPositions("hello, World").l, [2, 3, 10]); // true
assertArraysEqual(letterPositions("hello,World").l, [1, 8, 10]); // false
assertArraysEqual(letterPositions("hello").h, [0]); // true