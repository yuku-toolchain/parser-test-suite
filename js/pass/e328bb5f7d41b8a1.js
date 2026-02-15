const s1 = new Set([1, 2]);
const s2 = {
  size: 2,
  has: undefined,
  keys: function* keys() {
    yield 2;
    yield 3;
  }
};
s2.has = {};