var count = 0;
class MySet extends Set {
  static get [Symbol.species]() {
    count++;
    return Set;
  }
}
const s1 = new MySet([1, 2]);
const s2 = new Set([2, 3]);
const expected = [1];
const combined = s1.difference(s2);