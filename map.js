const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const map = function(originalArray, callback) {
  const results = [];

  for (let item of originalArray) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


//Test Cases

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);


// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); //True
// assertArraysEqual(map(words, word => word[0] + "at"), ["gat", "cat", "tat", "mat", "tat"]); //True
// assertArraysEqual(map(words, () => "dog"), ["dog", "dog", "dog", "dog", "dog",]); //True
// assertArraysEqual(map(words, () => "dog"), ["dog", "cat", "dog", "dog", "dog",]); //False
