// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion failed: ${actual} === ${expected}`);
//   }
// };


//take in sentence as a string
//return a count of each of the letters in the string

const countLetters = function(sentence) {
  const letterCount = {};
  for (const char of sentence) {
    if (char !== " ") {
      if (letterCount[char]) {
        letterCount[char] += 1;
      } else {
        letterCount[char] = 1;
      }
    }
  }

  console.log(letterCount);
  return letterCount;
};

module.exports = countLetters;



// countLetters("lighthouse in the house");




