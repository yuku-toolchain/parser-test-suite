const s1 = new Set([1, 2]);
const s2 = new Set([2, 3]);
const expected = [1];
const originalAdd = Set.prototype.add;
let count = 0;
Set.prototype.add = function (...rest) {
  count++;
  return originalAdd.apply(this, rest);
};
const combined = s1.difference(s2);
Set.prototype.add = originalAdd;