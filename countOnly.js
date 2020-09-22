//Given array and an object
//return an object containing counts of everything that input object listed
// function needs to return an object that can represent the stats
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }
  return results;
};

module.exports = countOnly;






