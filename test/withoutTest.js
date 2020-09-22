const without = require('../without');
const assert = require('chai').assert;

describe('#without', () => {

  it('should return [2,3] when given ([1,2,3], [1])', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should return [] when given ([], [1])', () => {
    assert.deepEqual(without([], [1]), []);
  });
  it('should return ["lighthouse"] when given (["hello", "world", "lighthouse"], ["hello", "world"])', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["hello", "world"]), ["lighthouse"]);
  });

});



