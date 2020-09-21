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

//STEPS
//take in source array and an itemsToRemove array -->  ex. ([1,2,3], [1]) => [2,3]
//return new array with only the elements from source that are not in itemsToRemove
//compare the two arrays with a nested for loop
//push values that aren't in both to the new array.
//return the new array

const without = function(source, itemsToRemove) {
  const withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutItems.push(source[i]);
    }
  }
  return withoutItems;
};

module.exports = without;

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const nums = [5, 4, 5, 3];
without(nums, ["5"]);
assertArraysEqual(nums, [5, 4, 5, 3]);