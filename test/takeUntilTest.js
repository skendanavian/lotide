const takeUntil = require('../takeUntil');
const assert = require('chai').assert;




//Test Cases

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];



describe("#takeUntil", () => {

  it('should return the array up until the given element', () => {

    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2])
  });
  it('should return the array up until the given element', () => {

    assert.deepEqual(takeUntil(data2, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood'])
  });


});