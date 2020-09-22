const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;



//Testing
const shows = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


describe('#findKeyByValue', () => {

  it('should return drama when given The Wire ', () => {

    assert.equal(findKeyByValue(shows, 'The Wire'), "drama")

  });

  it('should return the first object key that contains the provided value', () => {

    assert.equal(findKeyByValue(shows, "Brooklyn Nine-Nine"), "comedy")

  });
  it('should return the first object key that contains the provided value', () => {

    assert.equal(findKeyByValue({}, "The Wire"), undefined)

  });

});







// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //True
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // True
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // True
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");// False