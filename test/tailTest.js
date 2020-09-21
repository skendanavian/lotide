const assert = require("chai").assert;
const tail = require("../tail.js")

const test1 = ['I', 'am', 'a', 'lighthouse'];
const test2 = [];
const test3 = ['hello'];

describe("#tail", () => {

  it(`should return ['am', 'a', 'lighthouse'] given [${test1}]`, () => {

    assert.deepEqual(tail(test1), ['am', 'a', 'lighthouse']);

  });

  it(`should return an empty array when given an empty array []`, () => {

    assert.deepEqual(tail(test2), []);

  });

  it(`should return an empty array when given [${test3}]`, () => {

    assert.deepEqual(tail(test3), []);

  });
});




// assertEqual(words.length, 2);
// assertEqual(words[0], "Lighthouse");
// assertEqual(words[1], "Labs");