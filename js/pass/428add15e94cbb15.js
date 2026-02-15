const s1 = new Set([1, 2]);
const s2 = new (class {
  get size() {
    return 1;
  }
  has(v) {}
  *keys() {
    yield 1;
  }
})();