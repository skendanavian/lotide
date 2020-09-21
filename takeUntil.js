const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
};

module.exports = takeUntil;


//Test Cases

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);


// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');



// assertArraysEqual(results1, [1, 2, 5, 7, 2]); //true
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']); //true
// assertArraysEqual(results2, ['I\'ve', 'been', 'from', 'Hollywood']); //false
