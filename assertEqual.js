//prettier-ignore
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("❌Assertion Failed: " + actual + " !== " + expected);
  }
};
//TEST CODE

assertEqual(1, 1);
assertEqual(1, 5);
assertEqual("hello", "hello");
assertEqual("hello", "goodbye");
