const eqArrays = function(array1, array2) {
  //toggle to track if the array lengths and/or items are equal
  let arrayCheck = true;

  if (array1.length !== array2.length) {
    arrayCheck = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        arrayCheck = false;
      }
    }
  }
  return arrayCheck;
};

module.exports = eqArrays;
