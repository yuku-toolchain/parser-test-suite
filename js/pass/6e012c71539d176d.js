const s1 = new Set([1, 2]);
const s2 = {
  size: 2,
  has: () => {},
  keys: function* keys() {
    yield 2;
    yield 3;
  }
};
const expected = [1, 2, 3];
const combined = s1.union(s2);