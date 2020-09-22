const map = function(originalArray, callback) {
  const results = [];

  for (let item of originalArray) {
    results.push(callback(item));
  }
  console.log(results)
  return results;
};

module.exports = map;
