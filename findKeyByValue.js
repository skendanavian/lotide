//take in object and value
//scan object and return the first key // If no key is found return undefined

const findKeyByValue = function(listOfShows, show) {

  let genreKeys = Object.keys(listOfShows);
  for (const genre of genreKeys) {
    if (listOfShows[genre] === show) {
      console.log(genre);
      return genre;
    }
  }

};

module.exports = findKeyByValue;





