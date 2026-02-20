const s1 = new Set([1, 2]);
const s2 = {
  size: 1,
  has: v => {},
  keys: function* keys() {
    yield 1;
  }
};