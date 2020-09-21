const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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
  return "Input is not an Array";
};

module.exports = middle;




