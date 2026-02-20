const s1 = new Set([1, 2]);
const s2 = new (class {
  get size() {
    return 2;
  }
  has(v) {
    if (v === 1 || v === 2) return false;
  }
  *keys() {}
})();