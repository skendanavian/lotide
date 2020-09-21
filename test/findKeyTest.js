const findKey = require('../findkey');
const assert = require('chai').assert;


const object = {
  "Blue Hill": {stars: 1},
  "Akaleri": {stars: 3},
  "noma": {stars: 2},
  "elBulli": {stars: 3},
  "Ora": {stars: 5},
  "Akelarre": {stars: 3}
}

describe('#findKey', () => {

  it('should return the key that contains the value specified by the callback function; noma', () => {

    assert.equal(findKey(object, x => x.stars === 2), "noma")

  });

  it('should return the key that contains the value specified by the callback function', () => {

    assert.equal(findKey(object, x => x.stars === 3), "Akaleri")

  });
  it('should return the key that contains the value specified by the callback function', () => {

    assert.equal(findKey(object, x => x.stars === 5), "Ora")

  });

});

