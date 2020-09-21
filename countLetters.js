const assertEqual = require('./assertEqual')


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
  return letterCount;
};

module.exports = countLetters;


// to invoke function
// countLetters("hello world");






