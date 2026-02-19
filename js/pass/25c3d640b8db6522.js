const s1 = new Set([1, 2]);
const s2 = [5, 6];
s2.size = 3;
s2.has = function (v) {
  if (v === 1 || v === 2) return true;
};
s2.keys = function () {};