const assert = require('chai').assert;
const middle = require('../middle');


describe('#middleTest', () => {

  it('should return an empty array when given one item in an array', () => {

    assert.deepEqual(middle([1]), []);
  });
  it('should return [2] when given [1,2,3] - odd numbered array gives middle number', () => {

    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('should return [4,3] when given [1,4,3,1] - even numbered array gives middle two numbers', () => {

    assert.deepEqual(middle([1, 4, 3, 1]), [4, 3]);
  });

});
