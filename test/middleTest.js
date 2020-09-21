const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require("../middle.js");

assertArraysEqual(middle([1]), []); // expected: true
assertArraysEqual(middle([1, 2, 3]), [2]); // expected: true
assertArraysEqual(middle([1, 4, 3, 1]), [4, 3]); // expected: true
assertArraysEqual(middle([1, 4, 3, 1]), [4, 3]); // expected: true
assertArraysEqual(middle([1, 4, 3, 1]), [2, 3]); // expected: false
assertArraysEqual(middle({}), []); // expected: false