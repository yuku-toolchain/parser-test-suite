const s1 = new Set([1, 2]);
const s2 = [5, 6];
s2.size = 3;
s2.has = function () {};
s2.keys = function () {
  return [2, 3, 4].values();
};
const expected = [1, 2, 3, 4];
const combined = s1.union(s2);