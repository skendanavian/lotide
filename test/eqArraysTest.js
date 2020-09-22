const eqArrays = require('../eqArrays');
const assert = require('chai').assert;



describe('#eqArrays', () => {

  it('should return true when given [1,2,3] and [1,2,3]', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  })
  it('should return true when given [] and []', () => {
    assert.isTrue(eqArrays([], []));
  })

  it('should return false when given [1,2,3,4,5] and [1,2,3]', () => {
    assert.isFalse(eqArrays([1, 2, 3, 4, 5], [1, 2, 3]));
  })

})

//tests
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false); // => should PASS