const map = require('../map');
const assert = require('chai').assert;


//tests

let words = ["ground", "control", "to", "major", "tom"];

describe('#map', () => {

  it('should edit the items of an array by the specified callback function', () => {

    assert.deepEqual(map(words, item => item = item[0]), ["g", "c", "t", "m", "t"])

  });

  it('should edit the items of an array by the specified callback function', () => {

    assert.deepEqual(map(words, x => x = "dog"), ["dog", "dog", "dog", "dog", "dog",])

  });

});





//Test Cases

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// console.log(results1);


// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]); //True
// assertArraysEqual(map(words, word => word[0] + "at"), ["gat", "cat", "tat", "mat", "tat"]); //True
// assertArraysEqual(map(words, () => "dog"), ["dog", "dog", "dog", "dog", "dog",]); //True
// assertArraysEqual(map(words, () => "dog"), ["dog", "cat", "dog", "dog", "dog",]); //False