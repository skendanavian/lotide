const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {

  it("should return the number of times each letter appears in the string as an object", () => {
    assert.deepEqual(countLetters("hhhhh"), {h: 5});
  });
  it("should return the number of times each letter appears in the string as an object", () => {
    assert.deepEqual(countLetters("hell30"), {h: 1, e: 1, l: 2, "3": 1, "0": 1});
  });

});