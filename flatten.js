const flatten = function(inputArray) {
  const joinArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      inputArray[i].forEach(element => joinArray.push(element));
    } else {
      joinArray.push(inputArray[i]);
    }

  }
  return joinArray;
};

module.exports = flatten;



