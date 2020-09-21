const flatten = require('../flatten');
const assert = require('chai').assert;


describe('#flatten', () => {

  it('should return [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]', () => {


    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  })
  it('should return [1, 2, 3, 4, 5, "cars", 6] when given 1, 2, [3, 4], 5, "cars", [6]]', () => {


    assert.deepEqual(flatten([1, 2, [3, 4], 5, "cars", [6]]), [1, 2, 3, 4, 5, "cars", 6]);
  })

  it('should return [] when given [[]]', () => {


    assert.deepEqual(flatten([[]]), []);
  })







});





//Test Cases

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
// assertArraysEqual(flatten([1, 3, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => false
// assertArraysEqual(flatten([1, 2, [3, 4], 5, ["cars"], [6], 9]), [1, 2, 3, 4, 5, 6]); // => false
// assertArraysEqual(flatten([1, 2, [3, 4], 5, "cars", [6]]), [1, 2, 3, 4, 5, "cars", 6]); // => true