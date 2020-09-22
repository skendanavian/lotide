// takes in object and a callback.
//Scans the object and returns the first key for which the callback
//returns a truthy value. if no key - return undefined.

const findKey = function(object, callback) {
  for (const item in object) {
    if (callback(object[item])) {
      return item;
    }
  }
};

module.exports = findKey;



