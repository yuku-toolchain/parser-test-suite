let sizeCount = 0;
let hasCount = 0;
let keysCount = 0;
class MySet extends Set {
  size(...rest) {
    sizeCount++;
    return super.size(...rest);
  }
  has(...rest) {
    hasCount++;
    return super.has(...rest);
  }
  keys(...rest) {
    keysCount++;
    return super.keys(...rest);
  }
}
const s1 = new MySet([1, 2]);
const s2 = new Set([2, 3]);
const expected = [2];
const combined = s1.intersection(s2);