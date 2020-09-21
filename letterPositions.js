const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');




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

module.exports = letterPositions;

assertArraysEqual(letterPositions("hello, World").l, [2, 3, 10]); // true
assertArraysEqual(letterPositions("hello,World").l, [1, 8, 10]); // false
assertArraysEqual(letterPositions("hello").h, [0]); // true