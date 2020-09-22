const letterPositions = function(sentence) {

  const results = {};
  let counter = 0;
  for (const char of sentence) {
    if (results[char]) {
      results[char].push(counter);
    } else {
      results[char] = [];
      results[char].push(counter);
    }
    counter++;
  }
  return results;
};

module.exports = letterPositions;

