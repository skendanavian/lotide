//STEPS
//take in source array and an itemsToRemove array -->  ex. ([1,2,3], [1]) => [2,3]
//return new array with only the elements from source that are not in itemsToRemove
//compare the two arrays with a nested for loop
//push values that aren't in both to the new array.
//return the new array

const without = function(source, itemsToRemove) {
  const withoutItems = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutItems.push(source[i]);
    }
  }
  return withoutItems;
};

module.exports = without;



