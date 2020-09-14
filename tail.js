
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion failed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

//testcode
const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
