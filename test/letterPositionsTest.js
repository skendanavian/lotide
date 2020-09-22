const assert = require('chai').assert;
const letterPositions = require('../letterPositions');



describe('#letterPositions', () => {

  it('should return an object with each letter key and an array respective indexes', () => {

    assert.deepEqual(letterPositions("wWw"), {w: [0, 2], W: [1]})

  });

  it('should return an object with each letter key and an array respective indexes', () => {

    assert.deepEqual(letterPositions('hello World').l, [2, 3, 9])

  });

  it('should return an object with each letter key and an array respective indexes', () => {

    assert.deepEqual(letterPositions("101010"), {1: [0, 2, 4], 0: [1, 3, 5]})

  });


});











// assertArraysEqual(letterPositions("hello, World").l, [2, 3, 10]); // true
// assertArraysEqual(letterPositions("hello,World").l, [1, 8, 10]); // false
// assertArraysEqual(letterPositions("hello").h, [0]); // true