const s1 = new Set([1, 2]);
const s2 = new (class {
  get size() {
    return 2;
  }
  has(v) {
    if (v === 1) return false;
    if (v === 2) return true;
  }
  *keys() {}
})();
const expected = [2];
const combined = s1.intersection(s2);