const countOnly = require('../countOnly');
const assert = require('chai').assert;


//Test Arrays
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const firstNames1 = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Karl",
  "Kavith",
  "Jason",
  "Karl",
  "Fang",
  "Karl"
];



describe('#countOnly', () => {

  it('should return an object with a count of the specified names', () => {

    assert.deepEqual(countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}), {Fang: 2, Jason: 1});

  });
  it('should return an object with a count of the specified names', () => {

    assert.deepEqual(countOnly(firstNames1, {"Jason": true, "Karl": true, "Fang": true, "Agouhanna": false}), {Karl: 4, Fang: 1, Jason: 1});

  });

});








// const result1 = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);