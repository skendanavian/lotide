const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} === ${expected}`);
  }
};


//take in object and value
//scan object and return the first key // If no key is found return undefined

const findKeyByValue = function(listOfShows, show) {

  let genreKeys = Object.keys(listOfShows);
  for (const genre of genreKeys) {
    if (listOfShows[genre] === show) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;


//TEST FUNCTIONS

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); //True
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // True
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // True
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "comedy");// False