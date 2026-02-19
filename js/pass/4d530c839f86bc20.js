const s1 = new Set([1, 2]);
const s2 = {
  size: 2,
  has: v => {
    if (v === 1) return false;
    if (v === 2) return true;
  },
  keys: function* keys() {}
};