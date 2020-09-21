const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js")

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 5, 3], [1, 2, 3]), false); // => should PASS