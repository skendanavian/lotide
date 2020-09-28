const {eqObjects} = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {

  it('should return true when given {} and {}', () => {
    assert.isTrue(eqObjects({}, {}));
  });
  it("should return true when given {} and {name: 'jim'}", () => {
    assert.isFalse(eqObjects({}, {name: "jim"}));
  });

  it('should return false when given {name: "mike", age: "ten"} and {name: "mike", age: "ten"}', () => {
    assert.isTrue(eqObjects({name: "mike", age: "ten"}, {name: "mike", age: "ten"}));
  });

  it('should return true when given equal objects with equal inner objects', () => {
    assert.isTrue(eqObjects({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2}))
  });

  it('should return false when given an object with embedded objects that are not equal', () => {
    assert.isFalse(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2}))
  });

  it('should return false when given an object with an inner array and one without', () => {
    assert.isFalse(eqObjects({a: 1, b: [5]}, {a: 1, b: {y: 5}}))
  })

});






//Test Cases
// const ab = {a: "1", b: "2", };
// const ba = {b: "2", a: "1"};
// const abc = {a: "1", b: "2", c: "3"};
// const cba = {c: "3", b: "2", a: "1"};
// const cbaWrong = {c: "2", b: "2", a: "1"};


// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(cba, abc), true);
// assertEqual(eqObjects(cbaWrong, abc), false);


// const cd = {c: "1", d: ["2", 3]};
// const dc = {d: ["2", 3], c: "1"};
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = {c: "1", d: ["2", 3, 4]};
// assertEqual(eqObjects(cd, cd2), false);