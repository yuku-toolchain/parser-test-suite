const s1 = new Set([1, 2]);
const s2 = new (class {
  get size() {
    return 2;
  }
  has(v) {}
  *keys() {
    yield 2;
    yield 3;
  }
})();
const expected = [1, 3];
const combined = s1.symmetricDifference(s2);