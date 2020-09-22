const takeUntil = function(array, callback) {
  const newArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      return newArray;
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = takeUntil;
